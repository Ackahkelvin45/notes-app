# Generated by Django 4.1 on 2022-10-16 05:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('mynotesapp', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='note',
            name='header',
            field=models.CharField(max_length=100, null=True),
        ),
    ]
