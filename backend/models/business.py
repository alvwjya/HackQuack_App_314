from sqlalchemy import Column, Integer, String, Date
from database import Base
from sqlalchemy.orm import relationship

class Business(Base):
    __tablename__ = "business"

    id = Column(Integer, primary_key=True)
    business_name = Column(String(255))
    ibn = Column(String(255))
    password = Column(String(255))
    location = Column(String(255))
    card_number = Column(String(255))
    card_security_num = Column(String(255))
    card_expiry_date = Column(Date)
    
    business_service_requests = relationship('BusinessServiceRequest', back_populates = 'business')
    transaction = relationship('Transaction', back_populates = 'business')

    def __init__(self, business_name, ibn, password, location, card_number, card_security_num, card_expiry_date):
        self.business_name = business_name
        self.ibn = ibn
        self.password = password
        self.location = location
        self.card_number = card_number
        self.card_security_num = card_security_num
        self.card_expiry_date = card_expiry_date

    def __repr__(self) -> str:
        return f"id={self.id}, ibn={self.ibn}, password={self.password}, location={self.location}, card_number={self.card_number}, card_security_num={self.card_security_num}, card_expiry_date{self.card_expiry_date}"
