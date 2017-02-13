#stars part 1:

#def draw_stars(num):
#    star = "*"

#    for value in num:
#        print star*value

#x = [4, 6, 1, 3, 5, 7, 25]

#draw_stars(x)

#commenting out the 1st part to work on 2nd part.

#stars part 2:

def draw_stars(list):
    star = "*"

    for value in list:
        if (isinstance(value, int)):
            print star*value
        else:
            print value[:1].lower()*len(value)

x = [4, "Tom", 1, "Michael", 5, 7, "Jimmy Smith"]

draw_stars(x)
