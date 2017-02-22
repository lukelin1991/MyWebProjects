import random
from flask import Flask, render_template, session, redirect, request

app = Flask(__name__)
app.secret_key='SecretPooh'

def gen_random():
    session['random_number'] = random.randrange(0,101)

@app.route('/')
def index():
    if 'random_number' not in session:
        gen_random()
    return render_template('index.html')

@app.route('/result', methods=['POST'])
def result():
    the_guess = request.form['guess']
    random = request.form['random_number']
    if the_guess < random:
        print "Your guess was"
        result = "too low"
        class_color = "red"
    if the_guess > random:
        result = "too high"
        class_color = "red"
    if the_guess == random:
        result = "You got it!"
        class_color = "green"
    return render_template('index.html', result = result, class_color = class_color, the_guess = the_guess)

@app.route('/reset')
def reset():
    session.clear()
    return redirect('/')

app.run(debug = True)
