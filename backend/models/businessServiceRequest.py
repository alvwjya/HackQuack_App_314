from sqlalchemy import Column, Integer, ForeignKey
from database import Base
from sqlalchemy.orm import relationship

class BusinessServiceRequest(Base):
    __tablename__ = "business_service_request"
    id = Column(Integer, primary_key=True)
    service_request_id = Column(Integer, ForeignKey('service_request.id'))
    business_id = Column(Integer, ForeignKey('business.id'))

    # service_request = relationship('ServiceRequest', back_populates = 'business_service_request')
    # business = relationship('Business', back_populates = 'business_service_request')

    def __init__(self, service_request_id, business_id):
        self.service_request_id = service_request_id
        self.business_id = business_id

    def __repr__(self) -> str:
        return f"id={self.id}, service_request_id={self.service_request_id}, business_id={self.business_id}"
