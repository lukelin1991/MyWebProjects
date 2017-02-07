str = "If monkeys like bananas, then I must be a monkey!"

print str.find("monkey")
print str.count("monkey")
print str.replace("monkey", "alligator", 2)

x = [2,54,-2,7,12,98]
print min(x)
print max(x)

x = ["hello",2,54,-2,7,12,98,"world"]
print x[0]
print x[7]
y = [x[0], x[7]]
print y

x = [19,2,54,-2,7,12,98,32,10,-3,6]
idx = 0
y = []
x.sort()
temp = [x[0], x[1]]
x.pop(0)
x.pop(0)
print temp
print x

x.insert(0, temp)

print x
