# Generated by Django 4.2.6 on 2024-01-19 08:36

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('messenger', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='chatview',
            name='send_date',
            field=models.DateTimeField(auto_now=True),
        ),
    ]
