import main

def test_my_function():
    main.create_tables()
    result = main.get_business()
    assert len(result) > 0
