from models.business import Business
from models.client import Client
from database import session_factory
from datetime import date


def create_tables():
    session = session_factory()
    session.commit()
    session.close()


if __name__ == "__main__":
    create_tables()
