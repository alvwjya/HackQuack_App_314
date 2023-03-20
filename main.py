#main file for obvious reasons 

print("hello world")

class person:
    def __init__(self, age, greetings):
        self.age = age
        self.greetings = greetings      
        
user = person(10, "hello world")

print(user.age)
user.greetings

numbers = {10, 4, 6, "bazinga"}

for i in numbers:
    print(i)

