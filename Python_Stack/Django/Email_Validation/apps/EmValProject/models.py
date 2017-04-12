from __future__ import unicode_literals

from django.db import models
import re
# Create your models here.

EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9\.\+_-]+@[a-zA-Z0-9\._-]+\.[a-zA-Z]*$')

class EmailManager(models.Manager):
    def create_email(self, data):
        errors = []
        if not EMAIL_REGEX.match(data['email']):
            errors.append("Not a valid email address, try again.")
            return (False, errors)
        else:
            new_entry = EmailEntry.objects.create(email=data['email'])
            print new_entry
            return (True, new_entry)

class EmailEntry(models.Model):
    email = models.EmailField(max_length = 100)
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)
    objects = EmailManager()
