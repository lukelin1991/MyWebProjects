class Bike(object):
    def __init__(self, price, max_speed):
        print 'Brand New Bike'
        self.price = price
        self.max_speed = max_speed
        self.miles = 0

    def displayInfo(self):
        print 'Price: ', self.price
        print 'Max Speed: ', self.max_speed
        print 'Total Miles: ', abs(self.miles)
        return self

    def ride(self):
        print 'Riding'
        self.miles += 10
        return self

    def reverse(self):
        print 'Reversing'
        self.miles -= 5
        return self

Bike1 = Bike(200, '25mph')
Bike1.ride().ride().ride().reverse().displayInfo()

Bike2 = Bike(100, '10mph')
Bike2.ride().ride().reverse().reverse().displayInfo()

Bike3 = Bike(500, '50mph')
Bike3.reverse().reverse().reverse().displayInfo()
