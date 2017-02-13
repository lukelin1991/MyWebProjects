import random

heads = 0
tails = 0

for num in range(5000):
    toss = round(random.random())
    if toss == 0:
        heads += 1
        message = "heads"
    elif toss == 1:
        tails += 1
        message = "tails"
    print "Attempt #" + str(num+1) + "Throwing a coin... It's a" + message + "Got" + str(heads) + "head(s) so far and" + str(tails) + "tail(s) so far."
