from sqlalchemy import Column, Integer, String, Date
from database import Base
from sqlalchemy.orm import relationship


class Client(Base):
    __tablename__ = "client"
    id = Column(Integer, primary_key=True)
    first_name = Column(String(255))
    last_name = Column(String(255))
    email = Column(String(255))
    phone = Column(String(255))
    password = Column(String(255))
    suburb = Column(String(255))
    state = Column(String(255))
    postcode = Column(String(255))
    card_number = Column(String(255))
    card_security_num = Column(String(255))
    card_expiry_date = Column(Date)

    rating = relationship("Rating", back_populates="client")
    service_request = relationship('ServiceRequest', back_populates='client')
    membership = relationship("Membership", back_populates="client")

    def __init__(self, first_name, last_name, email, phone, password, suburb, state, postcode, card_number, card_security_num, card_expiry_date):
        self.first_name = first_name
        self.last_name = last_name
        self.email = email
        self.phone = phone
        self.password = password
        self.suburb = suburb
        self.state = state
        self.postcode = postcode
        self.card_number = card_number
        self.card_security_num = card_security_num
        self.card_expiry_date = card_expiry_date

    def __repr__(self) -> str:
        return f"id={self.id}, first_name={self.first_name}, last_name={self.last_name}, email={self.email}, phone={self.phone}, password={self.password}, suburb={self.suburb}, state={self.state}, postcode={self.postcode}, card_number={self.card_number}, card_security_num={self.card_security_num}, card_expiry_date={self.card_expiry_date}"
