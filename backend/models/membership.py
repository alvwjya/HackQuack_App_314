from sqlalchemy import Column, Integer, String, Date, Double, ForeignKey
from database import Base
from sqlalchemy.orm import relationship

class Membership(Base):
    __tablename__="membership"
    id = Column(Integer, primary_key=True)
    start_date = Column(Date)
    due_date = Column(Date)
    cost = Column(Double)
    client_id = Column(Integer, ForeignKey('client.id'))
    professional_id = Column(Integer, ForeignKey('professional.id'))

    client = relationship("Client", back_populates="membership")
    professional = relationship("Professional", back_populates="membership")

    def __init__(self, start_date, due_date, cost, client_id, professional_id):
        self.start_date = start_date
        self.due_date = due_date
        self.cost = cost
        self.client_id = client_id
        self.professional_id = professional_id

    def __str__(self) -> str:
        return f"id={self.id}, start_date={self.start_date}, due_date={self.due_date}, cost={self.cost}, client_id={self.client_id}, professional_id={self.professional_id}"
