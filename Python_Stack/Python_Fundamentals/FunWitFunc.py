#Odd/Even:
#Create a function called odd_even that counts from 1 to 2000.
#As your loop executes have your program print the number of that iteration and specify whether it's an odd or even number.

#def odd_even():
#    for num in range (1, 2001):
#        if num%2 == 0:
#            print "Number is " + str(num) + ". This is an even number."
#        else:
#            print "Number is " + str(num) + ". This is an odd number."
#print odd_even()

#im going to comment these out so i can run the other codes.

#Multiply:
#Create a function called 'multiply' that iterates through each value in a list (e.g. a = [2, 4, 10, 16])
#and returns a list where each value has been multiplied by 5.

# put the variable of the array outside the function. made the function.
#created a for loop using the in range(x,y). then multiplied the element within each index.
#returned a.
#printed multiply().

#a = [2, 4, 10, 16]
#def multiply():
#    for idx in range (0, 4):
#        a[idx] *= 5
#    return a
#print multiply()

#going to comment out for the hacker challenge.

#Hacker Challenge:
#Write a function that takes the multiply function call as an argument.
#Your new function should return the multiplied list as a two-dimensional list.
#Each internal list should contain as many ones as the number in the original list.

def layered_multiples(arr, mult):
#defines a function called layered multiples that accepts 2 arguments, the 1st of which, is a lists
#and the 2nd one is an integer. upon invocation, these 2 variables will be renamed "arr" and "mult" respectively, within the scope of this function.
#the goal of this function is to multiply each( USE FOR LOOP) element within the list, by the "mult" variable.
    #for idx in range(len(arr)):
    #    (arr[idx] * mult)

# 1. the goal of this function is to multiply each element within the list (arr), by the "mult" variable.
# 2. afterwards, we will put the results of each multiplied element into a new empty list.
# 3. i gotta figure out/remember how to turn each multiplied element result into a sequence of 1's based on the number i get back from each element.

    #temp = []
    #for idx in range(len(arr)):
#        x = (arr[idx] * mult)
#        temp.append(x)

#    print temp

# 1. the goal of this function is to multiply each element within the list (arr), by the "mult" variable.
# 2. afterwards, we will put the results of each multiplied element into a new empty list.
# 3. we now have a list of numbers that are properly multiplied.
# 4. for each number inside our new list. we will create a NEW NEW LIST and populate it with just as many 1's.
# 5. we are storing this new new list in a variable named "NewNewList = []".

#    temp = []
#    for idx in range(len(arr)):
#        x = (arr[idx] * mult)
#        temp.append(x)

#    container = []
#    for num in temp:
#        NewNewList = []
#        for count in range(num):
#
#            NewNewList.append(1)
#        container.append(NewNewList)
#    return container
#
# 1. the goal of this function is to multiply each element within the list (arr), by the "mult" variable.
# 2. afterwards, we will put the results of each multiplied element into a new empty list.
# 3. we now have a list of numbers that are properly multiplied.
# 4. we have to FIRST CREATE A CONTAINER list. We are going to populate the Container List with the NewNewList.
# 5. for each number inside our new list(temp), we will create an empty NewNewList and populate it with just as many 1's.
# 6. we are appending this NewNewList to the container variable.

    temp = []
    for idx in range(len(arr)):
        x = (arr[idx] * mult)
        temp.append(x)

    container = []
    for num in temp:
        NewNewList = []

        for count in range(num):
            NewNewList.append(1)
        container.append(NewNewList)
    return container

x = layered_multiples([2,4,5],3)
print x



# output
#>>>[[1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]]
