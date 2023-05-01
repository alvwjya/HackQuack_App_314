from sqlalchemy import Column, Integer, Boolean, ForeignKey, Double
from database import Base
from sqlalchemy.orm import relationship

class ProfessionalServiceRequest(Base):
    __tablename__ = "professional_service_request"
    id = Column(Integer, primary_key=True)
    acceptance = Column(Integer)
    cost = Column(Double)
    service_request_id = Column(Integer, ForeignKey('service_request.id'))
    professional_id = Column(Integer, ForeignKey('professional.id'))

    service_request = relationship('ServiceRequest', back_populates='professional_service_request')
    professional = relationship('Professional', back_populates = 'professional_service_request')
    professional_request = relationship('Transaction', back_populates='professional_request')
    


    def __init__(self, acceptance, cost, service_request_id, professional_id):
        self.acceptance = acceptance
        self.cost = cost
        self.service_request_id = service_request_id
        self.professional_id = professional_id

    def __repr__(self) -> str:
        return f"id={self.id}, cost={self.cost}, service_request_id={self.service_request_id}, acceptance={self.acceptance}, professional_id={self.professional_id}"
