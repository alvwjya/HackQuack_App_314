from sqlalchemy import Column, Integer, String, Date
from database import Base
from sqlalchemy.orm import relationship
from sqlalchemy.orm import Mapped
from sqlalchemy.orm import mapped_column
from sqlalchemy import ForeignKey

class Professional(Base):
    __tablename__ = "professional"

    id = Column(Integer, primary_key=True)
    first_name = Column(String(255))
    last_name = Column(String(255))
    abn = Column(String(255))
    password = Column(String(255))
    suburb = Column(String(255))
    state = Column(String(255))
    postcode = Column(String(255))
    card_number = Column(String(255))
    card_security_num = Column(String(255))
    card_expiry_date = Column(Date)
    service_type_id = Column(Integer, ForeignKey("service_type.id"))
    service_type = relationship("ServiceType", back_populates="professional")
    
    business_service_requests = relationship('BusinessServiceRequest', back_populates = 'business')
    transaction = relationship('Transaction', back_populates = 'business')
    ratings = relationship("Rating", back_populates="business")


    def __init__(self, first_name, last_name, abn, password, suburb, state, poscode, card_number, card_security_num, card_expiry_date, service_type_id):
        self.first_name = first_name
        self.last_name = last_name
        self.abn = abn
        self.password = password
        self.suburb = suburb
        self.state = state
        self.postcode = poscode
        self.card_number = card_number
        self.card_security_num = card_security_num
        self.card_expiry_date = card_expiry_date
        self.service_type_id = service_type_id

    def __repr__(self) -> str:
        return f"id={self.id}, ibn={self.ibn}, password={self.password}, location={self.location}, card_number={self.card_number}, card_security_num={self.card_security_num}, card_expiry_date{self.card_expiry_date}"
