from models.professional import Professional
from models.serviceType import ServiceType
from models.client import Client
from models.rating import Rating
from models.professionalServiceRequest import ProfessionalServiceRequest
from models.transaction import Transaction
from models.serviceRequest import ServiceRequest
from models.membership import Membership
from database import session_factory
from datetime import date


def create_tables():
    session = session_factory()
    # gong_clean = Business("business_name", "ibn", "password", "location",
    #                       "card_number", "card_security_num", date(1990, 5, 17))
    # session.add(gong_clean)
    session.commit()
    session.close()


def get_business():
    session = session_factory()
    business_query = session.query(Professional)
    session.close()
    return business_query.all()


if __name__ == "__main__":
    create_tables()
    print(len(get_business()))
