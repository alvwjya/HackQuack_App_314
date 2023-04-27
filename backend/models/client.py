from sqlalchemy import Column, Integer, String, Date
from database import Base


class Client(Base):
    __tablename__ = "client"

    id = Column(Integer, primary_key=True)
    first_name = Column(String(255))
    last_name = Column(String(255))
    email = Column(String(255))
    phone = Column(String(255))
    password = Column(String(255))
    location = Column(String(255))
    card_number = Column(String(255))
    card_expiry_date = Column(Date)
    ratings = relationship("Rating", back_populates="client")


    def __init__(self, id, first_name, last_name, email, phone, password, location, credit_card_number, credit_card_expiry_date):
        self.id = id
        self.first_name = first_name
        self.last_name = last_name
        self.email = email
        self.phone = phone
        self.password = password
        self.location = location
        self.card_number = credit_card_number
        self.credit_card_expiry_date = credit_card_expiry_date

    def __repr__(self) -> str:
        return f"id={self.id}, first_name={self.first_name}, last_name={self.last_name}, email={self.email}, phone={self.phone}, password={self.password}, location={self.location},{self.credit_card_number}) ({self.credit_card_expiry_date})"
