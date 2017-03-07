class Animal(object):
    def __init__(self, name, health = 100):
        self.name = name
        self.health = health

    def walk(self):
        self.health -= 1
        return self

    def run(self):
        self.health -= 5
        return self

    def displayhealth(self):
        print "Name: ", self.name
        print "Health: ", self.health
        return self
