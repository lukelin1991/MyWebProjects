import random



def TenScore():
    for num in range(10):
        random_num = random.random() * 100
        if random_num >= 90:
            print "Score: " + str(random_num) + ". Your Grade is A."
        elif random_num >= 80 and random_num <= 89:
            print "Score: " + str(random_num) + ". Your Grade is B."
        elif random_num >=70 and random_num <= 79:
            print "Score: " + str(random_num) + ". Your Grade is C."
        elif random_num >= 60 and random_num <= 69:
            print "Score: " + str(random_num) + ". Your Grade is D."
        else:
            print "You failed. Your Grade is F."
    print "End of Scoring Program! Good Luck Next Time!"

TenScore()
