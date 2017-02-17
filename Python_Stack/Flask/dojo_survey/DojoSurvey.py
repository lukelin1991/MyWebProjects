from flask import Flask, render_template, request, redirect
app = Flask(__name__)
#the app route will handle our form... aka localhost:5000
@app.route('/')
#function renders the template of survey.html <-- survey form.
def survey():
    return render_template("survey.html")
#this next app route will route the users and post methods.
@app.route('/users', methods=['POST'])
#this function allows the creation of the user input.
def create_survey():
    print "Submitted Survey Info"
#creating survey for Name, Dojo Location, Favorite Language, and to comment. all through request.form.
    name = request.form['name']
    DojoLocation = request.form['location']
    FavLanguage = request.form['language']
    comment = request.form['comment']
# return redirect was not good because it didnt POST the names to a 2nd page, so i did return render_template
# onto the results.html page. with the name, location, language, and comment being visible through that page.
    return render_template("results.html", name = name, location = DojoLocation, language = FavLanguage, comment = comment)
# set the app in motion. 
app.run(debug=True)
