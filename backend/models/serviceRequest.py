from sqlalchemy import Column, Integer, ForeignKey, String, DateTime#, Time
from datetime import datetime
from database import Base

class ServiceRequest(Base):
    __tablename__ = "service_request"
    id = Column(Integer, primary_key=True)
    client_id = Column(Integer, ForeignKey('client.id'))
    service_id = Column(Integer)#, ForeignKey('service.id'))
    request_time = Column(DateTime, default = datetime.utcnow)
    description = Column(String(1000))
    
    business_service_requests = relationship('BusinessServiceRequest', back_populates = 'service_request')
    transaction = relationship('Transaction', back_populates = 'service_request')
    
    def __init__(self, client_id, service_id, request_time, description):
        self.client_id = client_id
        self.service_id = service_id
        self.request_time = request_time
        self.description = description

    def __repr__(self) -> str:
        return f"id={self.id}, client_id={self.client_id}, service_id={self.service_id}, request_time={self.request_time}, description={self.description}"

    
