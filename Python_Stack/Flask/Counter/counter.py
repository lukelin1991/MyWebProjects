from flask import Flask, render_template, session, redirect, request, url_for

app = Flask(__name__)

app.secret_key = "poohSecret"

def counterplus():
    try:
        session['counter'] += 1
    except KeyError:
        session['counter'] = 1

@app.route('/')
def index():
    counterplus()
    return render_template("index.html")

@app.route('/reset')
def reset_counter():
    session.clear()
    return redirect(url_for('index'))

@app.route('/plus2')
def plus_two():
    session['counter'] += 1
    return redirect(url_for('index'))

app.run(debug=True)
