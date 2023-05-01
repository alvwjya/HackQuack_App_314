from sqlalchemy import Column, Integer, Float, DateTime, ForeignKey
from datetime import datetime
from database import Base
from sqlalchemy.orm import relationship

class Transaction(Base):
    __tablename__ = "transaction"
    id = Column(Integer, primary_key=True)
    service_request_id = Column(Integer, ForeignKey('service_request.id'))
    professional_id = Column(Integer, ForeignKey('professional.id'))
    total_cost = Column(Float)
    transaction_time = Column(DateTime, default = datetime.utcnow)

    service_request = relationship('ServiceRequest', back_populates = 'transactions')
    professional = relationship('Professional', back_populates = 'transactions')

    def __init__(self, service_request_id, professional_id, total_cost, transaction_time):
        self.service_request_id = service_request_id
        self.professional_id = professional_id
        self.total_cost = total_cost
        self.transaction_time = transaction_time

    def __repr__(self) -> str:
        return f"id={self.id}, service_request_id={self.service_request_id}, business_id={self.professional_id}, total_cost={self.total_cost}, transaction_time={self.transaction_time}"
