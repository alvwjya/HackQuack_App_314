from .models.business import Business
from .models.client import Client
from database import session_factory
from datetime import date


def create_tables():
    session = session_factory()
    gong_clean = Business("business_name", "ibn", "password", "location",
                          "card_number", "card_security_num", date(1990, 5, 17))
    session.add(gong_clean)
    session.commit()
    session.close()


def get_business():
    session = session_factory()
    business_query = session.query(Business)
    session.close()
    return business_query.all()


if __name__ == "__main__":
    create_tables()
    print(len(get_business()))
