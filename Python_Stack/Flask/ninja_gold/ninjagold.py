from flask import Flask, render_template, request, redirect, session, Markup
import random, time
app = Flask(__name__)
app.secret_key = 'SecretPooh'

#creating gold
def gold(begin, end):
    gold = random.randrange(begin, end)
    return gold

@app.route('/')
def index():
    #check session to see if active or not.
    if 'gold' not in session:
        session['gold'] = 0
        session['activities'] = ""
    return render_template('index.html')

@app.route('/process_money', methods = ['POST'])
def money():
    #get location info from each hidden input in form.
    location = request.form['location']
    print location
    if location == 'farm':
        begin = 10
        end = 21
    elif location == 'cave':
        begin = 5
        end = 11
    elif location == 'house':
        begin = 2
        end = 6
    elif location == 'casino':
        begin = -50
        end = 51
    #process the gold gains and loss, and add current result with previous gains and losses.
    process = gold(begin, end)
    session['gold'] += process

    #depending on gain or loss, color coordinate. red = loss, green = gain.
    if process < 0:
        message = "<p id='red'>You entered the " + location + " and Lost " + str(process) + " gold! oh no! (" + time.strftime("%Y-%m-%d %H:%M:%S %p") + ")</p>"
    else:
        message = "<p id='green'>You entered the " + location + " and You earned " + str(process) + " gold! oh WOW!! (" + time.strftime("%Y-%m-%d %H:%M:%S %p") + ")</p>"

    activity = Markup(message)
    session['activities'] = activity + session['activities']
    return redirect('/')

@app.route('/reset')
#reseting the game.
def reset():
    session.clear()
    return redirect('/')

app.run(debug=True)
