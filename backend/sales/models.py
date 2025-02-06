from django.db import models

# Create your models here.

class SalesData(models.Model):
    order_id = models.CharField(max_length=50, primary_key=True)
    customer_name = models.CharField(max_length=255)
    category = models.CharField(max_length=255)
    sub_category = models.CharField(max_length=255)
    city = models.CharField(max_length=255)
    region = models.CharField(max_length=255)
    sales = models.FloatField()
    order_date = models.DateField()
    discount = models.FloatField()
    profit = models.FloatField()

    def __str__(self):
        return self.order_id
