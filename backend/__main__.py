from models.business import Business
from database import session_factory
from datetime import date


def createBusiness():
    session = session_factory()
    # wollongong = Business("wollongong clean", "1232121", "1234", "north wollongong", "1234567890", "123", date(1984, 10, 20))
    # session.add(wollongong)
    session.commit()
    session.close()


def getBusiness():
    session = session_factory()
    business_query = session.query(Business)
    session.close()
    return business_query


if __name__ == "__main__":
    createBusiness()
    print(getBusiness())
