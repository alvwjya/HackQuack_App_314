from sqlalchemy import Column, Integer, ForeignKey, String, DateTime
from datetime import datetime
from database import Base
from sqlalchemy.orm import relationship

class ServiceRequest(Base):
    __tablename__ = "service_request"
    id = Column(Integer, primary_key=True)
    request_time = Column(DateTime, default = datetime.utcnow)
    description = Column(String(1000))
    client_id = Column(Integer, ForeignKey('client.id'))
    service_type_id = Column(Integer, ForeignKey("service_type.id"))
    
    client = relationship("Client", back_populates="service_request")
    professional_service_request = relationship('ProfessionalServiceRequest', back_populates = 'service_request')
    transaction = relationship('Transaction', back_populates = 'service_request')
    service_type = relationship("ServiceType", back_populates="service_request")

    def __init__(self, request_time, description, client_id, service_type_id):
        self.request_time = request_time
        self.description = description
        self.client_id = client_id
        self.service_type_id = service_type_id

    def __repr__(self) -> str:
        return f"id={self.id}, request_time={self.request_time}, description={self.description}, client_id={self.client_id}, service_type_id={self.service_type_id}"
