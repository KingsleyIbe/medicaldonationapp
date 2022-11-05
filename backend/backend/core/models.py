import datetime

from django.db import models
from django.utils import timezone

# Create your models here.

class Client(models.Model):
    name = models.CharField(max_length=200)
    phone_number = models.CharField(max_length=200)
    location = models.CharField(max_length=200)
    age = models.IntegerField(default=19)
    weight = models.IntegerField(default=130)
    last_donation = models.DateField(auto_now_add=True)
    wants_to_donate = models.BooleanField(default=False)
    needs_donation = models.BooleanField(default=True)

    def eligible_donate(self):
        now = timezone.now()
        last_donation = now - datetime.timedelta(days=80) <= self.last_donation <= now
        weight = 129 > self.weight
        age = 19 < self.age

        eligibity_checker = [last_donation, weight, age]

        if any(requirement is False for requirement in eligibity_checker):
            return False
        else:
            return True

    def __str__(self):
        return self.name