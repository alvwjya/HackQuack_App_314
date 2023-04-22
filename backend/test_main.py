from main import create_tables
from main import get_business

def test_my_function():
    create_tables()
    result = get_business()
    assert len(result) > 0
