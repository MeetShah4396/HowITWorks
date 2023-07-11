from django.db import models

# Create your models here.

class Item(models.Model):
    title=models.CharField(max_length=500)
    price=models.IntegerField()
    discount_price=models.IntegerField()
    image=models.ImageField(default="default.jpg", upload_to="itemImages")

    def _str_(self):
        return self.title