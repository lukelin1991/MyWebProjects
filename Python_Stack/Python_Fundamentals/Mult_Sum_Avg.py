#This assignment has several parts. All of your code should be in one file that is well commented to indicate what each block of code is doing and which problem you are solving. Don't forget to test your code as you go!
#Multiples:
#Part I
#Write code that prints all the odd numbers from 1 to 1000.
#Use the for loop and don't use an array to do this exercise.

# first i set the variable to 0
#then i create a for loop using the num in range of 0-1000
#create an if statement to make sure im taking ONLY odds and printing them.

#num = 0
#for num in range (0,1000):
#    if num%2 != 0:
#        print num
#    num+=num

#commented these out for now so i dont run ALL the code parts. (the part 1, 2, sum, and avg)

#Part II
#Create another program that prints all the multiples of 5 from 5 to 1,000,000.
#I did the same thing as i did up top, except this time i started the variable at 5.
# made the number range higher, created an if statement to take in my modulos of 5.
#so i can print ONLY multiples of 5.

#num = 5

#for num in range (5, 1000000):
#    if num%5 == 0:
#        print num
#    num+= num

#going to comment these out as well.


#Sum List
#Create a program that prints the sum of all the values in the list: a = [1, 2, 5, 10, 255, 3]

# i wanted to create a variable sum originally, but its already an operation, so i changed it to adder.
# i created an index with a range of 0-5. and then ran a for loop.
#created an if statement underneath to run through the length of the indexes and add them to the "adder".
#looped it til i went through the list.

#a = [1, 2, 5, 10, 255, 3]
#adder = 0
#for idx in range(0, 6):
#    if idx < len(a):
#        adder = adder + a[idx]
#        print adder
#    idx+=idx

#commenting these out again.


#Average List
#Create a program that prints the average of the values in the list: a = [1, 2, 5, 10, 255, 3]

#i want to create a program that puts the sum of list a together, then multiplies them by the number of a.length.
#adder divided by length of a would give us the average of the sum of the total. 
a = [1, 2, 5, 10, 255, 3]
adder = 0
for idx in range (0, 6):
    if idx < len(a):
        adder = adder + a[idx]
    idx+=idx

print adder/len(a)
