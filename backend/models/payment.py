from sqlalchemy import Column, Integer, ForeignKey, String, Double
from datetime import datetime
from database import Base
from sqlalchemy.orm import relationship    
        
# Creates a table to save a payment transaction
class Payment:
    __tablename__ = "payment"
    
    payment_id = Column(Integer, primary_key=True)
    client_id = Column(Integer, ForeignKey('client.id'))
    payment_type = Column(String(255))
    amount = Column(Double, ForeignKey('membership.cost'))
    profesional_id = Column(Integer, ForeignKey('professional.id'))
    transaction_id = Column(Integer, ForeignKey('transaction.id'))        
    
    #checks what sort of payment it is and therfore were to pull the value from
    if payment_type == "membership":
        amount = Column(Double, ForeignKey('proffesionalservicerequest.cost'))  
                  

    def __init__(self, payment_id, client_id, amount, payment_type, profesional_id, transaction_id):
        self.payment_id = payment_id
        self.client_id = client_id
        self.amount = amount
        self.payment_type = payment_type
        self.profesional_id = profesional_id
        self.transaction_id = transaction_id
        
        def __repr__(self) -> str:
            return f"id={self.id}, client_id={self.payment_id}, total_cost={self.total_cost}, payment_type={self.payment_type}, professional_id={self.professional_id}, transaction_id={self.transaction_id}"
       
    def createPayment(payment_id, client_id, amount, payment_type, profesional_id, transaction_id):
        standin = Payment(payment_id, client_id, amount, payment_type, profesional_id, transaction_id)
    