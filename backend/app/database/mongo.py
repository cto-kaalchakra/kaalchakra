from pymongo import MongoClient
from pymongo.database import Database
from app.config.settings import settings
import logging

logger = logging.getLogger(__name__)

# Global MongoDB client and database
mongo_client: MongoClient = None
mongo_db: Database = None


def connect_to_mongo():
    """Connect to MongoDB"""
    global mongo_client, mongo_db
    
    try:
        logger.info(f"Connecting to MongoDB at {settings.MONGODB_URL}")
        mongo_client = MongoClient(settings.MONGODB_URL)
        mongo_db = mongo_client[settings.MONGODB_DB_NAME]
        
        # Test the connection
        mongo_client.admin.command('ping')
        logger.info(f"Successfully connected to MongoDB database: {settings.MONGODB_DB_NAME}")
        
    except Exception as e:
        logger.error(f"Failed to connect to MongoDB: {e}")
        raise


def close_mongo_connection():
    """Close MongoDB connection"""
    global mongo_client
    
    if mongo_client:
        logger.info("Closing MongoDB connection")
        mongo_client.close()


def get_database() -> Database:
    """Get the MongoDB database instance"""
    return mongo_db

