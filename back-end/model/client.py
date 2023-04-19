from sqlalchemy import Column, Integer, String, Date

class Client():
    __tablename__ = "client"
    
    id = Column(Integer, primary_key=True)
    first_name = Column(String)
    last_name = Column(String)
    email = Column(String)
    phone = Column(String)
    password = Column(String)
    location = Column(String)
    credit_card_number = Column(String)
    credit_card_expiry_date = Column(Date)
    
    def __init__(self, id, first_name, last_name, email, phone, password, location, credit_card_number, credit_card_expiry_date):
        self.id = id
        self.first_name = first_name
        self.last_name = last_name
        self.email = email
        self.phone = phone
        self.password = password
        self.location = location
        self.credit_card_number = credit_card_number
        self.credit_card_expiry_date = credit_card_expiry_date
        
    def __repr__(self) -> str:
        return f"({self.id}) ({self.first_name}) ({self.last_name}) ({self.email}) ({self.phone}) ({self.password}) ({self.location}) ({self.credit_card_number}) ({self.credit_card_expiry_date})"