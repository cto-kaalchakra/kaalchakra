from pydantic import BaseModel, Field
from typing import Optional
from datetime import datetime, date, time
from bson import ObjectId


class PyObjectId(str):
    """Custom ObjectId type for Pydantic v2"""

    @classmethod
    def __get_pydantic_core_schema__(cls, source_type, handler):
        from pydantic_core import core_schema

        return core_schema.union_schema([
            core_schema.is_instance_schema(ObjectId),
            core_schema.chain_schema([
                core_schema.str_schema(),
                core_schema.no_info_plain_validator_function(cls.validate),
            ])
        ], serialization=core_schema.plain_serializer_function_ser_schema(str))

    @classmethod
    def validate(cls, v):
        if isinstance(v, ObjectId):
            return v
        if isinstance(v, str) and ObjectId.is_valid(v):
            return ObjectId(v)
        raise ValueError("Invalid ObjectId")


class CustomerBase(BaseModel):
    """Base customer model with all fields"""
    name: str = Field(..., min_length=1, max_length=100)
    phone: str = Field(..., min_length=10, max_length=15)

    # Birth details
    date_of_birth: date
    time_of_birth: time
    place_of_birth: str
    birth_latitude: Optional[float] = None
    birth_longitude: Optional[float] = None
    birth_timezone: Optional[str] = None

    # Current location (optional, defaults to birth location)
    current_location: Optional[str] = None
    current_latitude: Optional[float] = None
    current_longitude: Optional[float] = None

    # Astrological details (optional, can be calculated)
    zodiac_sign: Optional[str] = None
    moon_sign: Optional[str] = None
    nakshatra: Optional[str] = None


class CustomerCreate(BaseModel):
    """Model for creating a new customer - only requires user input fields"""
    name: str = Field(..., min_length=1, max_length=100)
    phone: str = Field(..., min_length=10, max_length=15)

    # Birth details - only what user provides
    date_of_birth: date
    time_of_birth: time
    place_of_birth: str

    # Current location (optional)
    current_location: Optional[str] = None

    # Astrological details (optional)
    zodiac_sign: Optional[str] = None
    moon_sign: Optional[str] = None
    nakshatra: Optional[str] = None


class CustomerInDB(CustomerBase):
    """Model for customer stored in database"""
    id: Optional[PyObjectId] = Field(default=None, alias="_id")
    created_at: datetime = Field(default_factory=datetime.utcnow)
    updated_at: datetime = Field(default_factory=datetime.utcnow)
    
    class Config:
        populate_by_name = True
        arbitrary_types_allowed = True
        json_encoders = {
            ObjectId: str,
            datetime: lambda v: v.isoformat(),
            date: lambda v: v.isoformat(),
            time: lambda v: v.isoformat()
        }


class CustomerResponse(CustomerBase):
    """Model for customer API response"""
    id: str = Field(..., alias="_id")
    created_at: datetime
    updated_at: datetime
    
    class Config:
        populate_by_name = True
        json_encoders = {
            datetime: lambda v: v.isoformat(),
            date: lambda v: v.isoformat(),
            time: lambda v: v.isoformat()
        }

