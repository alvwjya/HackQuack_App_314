from sqlalchemy import Column, Integer, ForeignKey, String, Double
from datetime import datetime
from database import Base
from sqlalchemy.orm import relationship
    
# Creates a table to save a payment transaction
class Payment:
    __tablename__ = "payment"
    
    payment_id = Column(Integer, primary_key=True)
    client_id = Column(Integer, ForeignKey('client.id'))
    customer_email = Column(String(255), ForeignKey('client.email'))
    payment_type = Column(String(255))
    amount = Column(Double, ForeignKey('membership.cost'))
    profesional_id = Column(Integer, ForeignKey('professional.id'))
    transaction_id = Column(Integer, ForeignKey('transaction.id'))        
    
    #checks what sort of payment it is and therfore were to pull the value from
    if payment_type == "membership":
        amount = Column(Double, ForeignKey('proffesionalservicerequest.cost'))  
                  

    def __init__(self, payment_id, client_id, customer_email, amount, payment_type, profesional_id, transaction_id):
        self.payment_id = payment_id
        self.client_id = client_id
        self.customer_email = customer_email
        self.amount = amount
        self.payment_type = payment_type
        
        # expected behaviour is for it to determin if its a subscription payment and if 
        # so finish the initiliation here
        
        if payment_type == "membership":
            return
        
         #just going to make the code do a non-applicable instead

        self.profesional_id = profesional_id
        self.transaction_id = transaction_id   
        