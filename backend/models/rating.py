from sqlalchemy import Column, Integer, String, Float, ForeignKey
from sqlalchemy.orm import relationship
from database import Base


class Rating(Base):
    __tablename__ = "rating"

    id = Column(Integer, primary_key=True)
    client_id = Column(Integer, ForeignKey('client.id'))
    business_id = Column(Integer, ForeignKey('business.id'))
    rating = Column(Float)
    review = Column(String(1000))

    client = relationship("Client", back_populates="ratings")
    business = relationship("Business", back_populates="ratings")

    def __init__(self, client_id, business_id, rating, review):
        self.client_id = client_id
        self.business_id = business_id
        self.rating = rating
        self.review = review

    def __repr__(self) -> str:
        return f"id={self.id}, client_id={self.client_id}, business_id={self.business_id}, rating={self.rating}, review={self.review}"

