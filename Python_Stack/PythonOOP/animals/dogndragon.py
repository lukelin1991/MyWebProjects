from animal import Animal

class Dog(Animal):
    def __init__(self, name):
        super(Dog, self).__init__(name)
        self.health = 150

    def pet(self):
        self.health += 5
        return self

class Dragon(Animal):
    def __init__(self, name):
        super(Dragon, self).__init__(name)
        self.health = 170
        print "This is a Dragon!"
    def fly(self):
        self.health -= 10
        return self
print "--------------------"
dog1 = Dog("dog")
dog1.walk().walk().walk().run().run().pet().displayhealth()
print "--------------------"
dragon1 = Dragon("dragon")
dragon1.walk().walk().walk().run().run().fly().fly().displayhealth()
print "--------------------"
# animal1 = Animal("animal")
# animal1.walk().walk().run().run().pet().fly().displayhealth() <-- pet doesn't work and Fly doesnt work either. GOOD!
