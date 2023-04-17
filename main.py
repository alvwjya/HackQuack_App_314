#main file for obvious reasons 

print("hello world")

z = 0

class test:
    x = 500

class person:
    def __init__(self, age, greetings): #init is the actual class constructor
        self.age = age
        self.greetings = greetings      
        
user = person(10, "hello world")

print(user.age)
user.greetings

numbers = {10, 4, 6, "bazinga"} #The BAZINGA MOVES????

for i in numbers:
    print(i)
    
    
for i in 5:
    z += (2*i-5)

print(test.x)