import __main__

def test_my_function():
    __main__.create_tables()
    result = __main__.get_business()
    assert len(result) > 0
