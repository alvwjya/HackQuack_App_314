from sqlalchemy import create_engine
from sqlalchemy.orm import DeclarativeBase, sessionmaker
import os
from dotenv import load_dotenv, find_dotenv


load_dotenv(find_dotenv())
user = os.environ.get("DATABASE_USER")
password = os.environ.get("DATABASE_PASSWORD")
host = os.environ.get("DATABASE_URL")
database = os.environ.get("DATABASE_SCHEMA")

engine = create_engine(
    f"mysql+pymysql://{user}:{password}@{host}/{database}?charset=utf8mb4")

_SessionFactory = sessionmaker(bind=engine)


class Base(DeclarativeBase):
    pass


def session_factory():
    Base.metadata.create_all(engine)
    return _SessionFactory()
