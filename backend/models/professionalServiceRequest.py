from sqlalchemy import Column, Integer, Boolean, ForeignKey
from database import Base
from sqlalchemy.orm import relationship

class ProfessionalServiceRequest(Base):
    __tablename__ = "professional_service_request"
    id = Column(Integer, primary_key=True)
    service_request_id = Column(Integer, ForeignKey('service_request.id'))
    acceptance = Column(Boolean)
    professional_id = Column(Integer, ForeignKey('professional.id'))

    service_request = relationship('ServiceRequest', back_populates = 'professional_service_requests')
    professional = relationship('Professional', back_populates = 'professional_service_requests')

    def __init__(self, service_request_id, acceptance, professional_id):
        self.service_request_id = service_request_id
        self.acceptance = acceptance
        self.professional_id = professional_id

    def __repr__(self) -> str:
        return f"id={self.id}, service_request_id={self.service_request_id}, acceptance={self.acceptance}, professional_id={self.professional_id}"
