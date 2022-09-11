from django.db import models
from django.conf import settings


class DateTimeModel(models.Model):
    created_at_ad = models.DateTimeField()
    updated_at_ad = models.DateTimeField()
    created_by = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.PROTECT)

    class Meta:
        abstract = True
