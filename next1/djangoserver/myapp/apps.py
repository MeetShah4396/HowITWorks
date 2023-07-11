from django.apps import AppConfig
import argparse
import glob
import os

class MyappConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'myapp'



def parse_args():
    parser = argparse.ArgumentParser()
    parser.add_argument(
        '-d',
        '--dir',
        type=str,
        required=True)
    args = parser.parse_args()
    return args



