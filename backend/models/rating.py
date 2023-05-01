from sqlalchemy import Column, Integer, String, Float, ForeignKey
from sqlalchemy.orm import relationship
from database import Base


class Rating(Base):
    __tablename__ = "rating"

    id = Column(Integer, primary_key=True)
    rating = Column(Float)
    review = Column(String(1000))
    client_id = Column(Integer, ForeignKey('client.id'))
    transaction_id = Column(Integer, ForeignKey('transaction.id'))

    client = relationship("Client", back_populates="rating")
    transaction = relationship("Transaction", back_populates="rating")

    def __init__(self, rating, review, client_id, transaction_id):
        self.rating = rating
        self.review = review
        self.client_id = client_id
        self.transaction_id = transaction_id

    def __repr__(self) -> str:
        return f"id={self.id}, rating={self.rating}, review={self.review}, client_id={self.client_id}, transaction_id={self.transaction_id}"
