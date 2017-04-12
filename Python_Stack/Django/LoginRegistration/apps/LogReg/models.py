from __future__ import unicode_literals
from django.db import models
import re
import bcrypt
from django.core.exceptions import ObjectDoesNotExist, MultipleObjectsReturned, ValidationError
# Create your models here.

EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9\.\+_-]+@[a-zA-Z0-9\._-]+\.[a-zA-Z]*$')
letters = re.compile(r'[a-zA-Z]')

class RegisterManager(models.Manager):
    def login(self, data):
        error = []
        if not EMAIL_REGEX.match(data['email']):
            error.append("Email must be valid")
        if len(data['password']) < 8:
            error.append('Password must be at least 8 characters long')
        try:
            registered_info = Register.objects.get(email=data['email'])
            registered_password = registered_info.password
            if not bcrypt.checkpw(data['password'].encode(), registered_password.encode()):
                error.append("Password does not match.")
        except ObjectDoesNotExist:
            error.append("Email does not Exist. Please register for an account")
        if error:
            return (False, error, False)
        return (True, "Succesful login", registered_info.first_name)

    def register(self, data):
        error = []
        if len(data['first_name']) < 2 or not letters.match(data['first_name']):
            error.append("First name must have at least 2 or more characters.")
        if len(data['last_name']) < 2 or not letters.match(data['last_name']):
            error.append("Last name must have at least 2 or more characters")
        if not EMAIL_REGEX.match(data['email']):
            error.append("Not a valid Email.")
        if len(data['password']) < 8:
            error.append('Password must be at least 8 characters long')
        if data['password'] != data['password']:
            error.append('Passwords must match')
        if error:
            return (False, error, False)

        try:
            user_email = data['email']
            db_email = Register.objects.get(email = user_email)
            print "DB_EMAIL", db_email.email
            if db_email.email == user_email:
                error.append("User email already exists. Please use a different email")
                return (False, error, False)

        except ObjectDoesNotExist:
            print "Email is new! Carry on"
            pass

        password = data['password'].encode()
        hashed = bcrypt.hashpw(password, bcrypt.gensalt())
        register_user = Register.objects.create(first_name = data['first_name'], last_name=data['last_name'], email= data['email'], password = hashed)
        return (True, "Succesful login!", register_user)


class Register(models.Model):
    first_name = models.CharField(max_length =45)
    last_name = models.CharField(max_length=45)
    email = models.CharField(max_length=255)
    password = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    objects = RegisterManager()
