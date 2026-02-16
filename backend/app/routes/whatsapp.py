"""
WhatsApp API Routes
"""
from fastapi import APIRouter, HTTPException, status
from app.database.mongo import get_database
from app.integrations.whatsapp_service import WhatsAppService
from app.services.astrology_service import AstrologyService
from app.models.customer_model import CustomerInDB
from bson import ObjectId
import logging

logger = logging.getLogger(__name__)

router = APIRouter(prefix="/whatsapp", tags=["whatsapp"])

# Initialize services
whatsapp_service = WhatsAppService()
astrology_service = AstrologyService()


@router.post("/send/{customer_id}")
async def send_prediction_to_customer(customer_id: str):
    """
    Generate and send daily prediction to a customer via WhatsApp
    
    Args:
        customer_id: Customer ID
        
    Returns:
        Success message
    """
    try:
        db = get_database()
        
        # Validate ObjectId
        if not ObjectId.is_valid(customer_id):
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail="Invalid customer ID format"
            )
        
        # Find customer
        customer_data = db.customers.find_one({"_id": ObjectId(customer_id)})
        
        if not customer_data:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail="Customer not found"
            )
        
        # Convert to CustomerInDB model
        customer_data["_id"] = str(customer_data["_id"])
        customer = CustomerInDB(**customer_data)
        
        logger.info(f"Generating prediction for customer: {customer.name}")
        
        # Generate prediction
        prediction = astrology_service.generate_daily_prediction(customer)
        
        # Format as WhatsApp message
        message = astrology_service.format_whatsapp_message(prediction)
        
        # Send via WhatsApp
        success = whatsapp_service.send_prediction(customer.phone, message)
        
        if not success:
            raise HTTPException(
                status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
                detail="Failed to send WhatsApp message"
            )
        
        return {
            "status": "success",
            "message": "Prediction sent successfully",
            "customer_id": customer_id,
            "customer_name": customer.name,
            "phone": customer.phone
        }
        
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"Error sending prediction: {e}", exc_info=True)
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Failed to send prediction: {str(e)}"
        )


@router.post("/send-all")
async def send_predictions_to_all():
    """
    Send daily predictions to all customers
    
    Returns:
        Summary of sent messages
    """
    try:
        db = get_database()
        
        # Get all customers
        customers_data = list(db.customers.find())
        
        if not customers_data:
            return {
                "status": "success",
                "message": "No customers found",
                "total": 0,
                "sent": 0,
                "failed": 0
            }
        
        sent_count = 0
        failed_count = 0
        
        for customer_data in customers_data:
            try:
                # Convert to CustomerInDB model
                customer_data["_id"] = str(customer_data["_id"])
                customer = CustomerInDB(**customer_data)
                
                # Generate prediction
                prediction = astrology_service.generate_daily_prediction(customer)
                
                # Format message
                message = astrology_service.format_whatsapp_message(prediction)
                
                # Send via WhatsApp
                success = whatsapp_service.send_prediction(customer.phone, message)
                
                if success:
                    sent_count += 1
                else:
                    failed_count += 1
                    
            except Exception as e:
                logger.error(f"Error sending to customer {customer_data.get('name')}: {e}")
                failed_count += 1
        
        return {
            "status": "success",
            "message": "Bulk send completed",
            "total": len(customers_data),
            "sent": sent_count,
            "failed": failed_count
        }
        
    except Exception as e:
        logger.error(f"Error in bulk send: {e}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Failed to send bulk predictions: {str(e)}"
        )

