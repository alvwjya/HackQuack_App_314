from sqlalchemy import Column, Integer, String, ForeignKey, Double
from sqlalchemy.orm import relationship
from database import Base


class ServiceType(Base):
    __tablename__ = "service_type"

    id = Column(Integer, primary_key=True)
    service_type = Column(String, ForeignKey('service.type'))
    cost_per_service = Column(Double, ForeignKey('business.id'))

    def __init__(self, service_type, cost_per_service):
        self.service_type = service_type
        self.cost_per_service = cost_per_service

    def __repr__(self) -> str:
        return f"id={self.id}, service_type={self.service_type}, cost_per_service={self.cost_per_service}"