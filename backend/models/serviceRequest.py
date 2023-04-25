from sqlalchemy import Column, Integer
from database import Base

class ServiceRequest(Base):
    __tablename__ = "service_request"
    id = Column(Integer, primary_key=True)
