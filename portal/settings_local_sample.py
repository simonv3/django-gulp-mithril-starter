import os

BASE_DIR = os.path.dirname(os.path.abspath(__file__))

DOMAIN = "http://localhost:8000"

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': os.path.join(BASE_DIR, 'db.sqlite3'),
    }
}

DEBUG = True

LOCAL = True

TEMPLATE_DEBUG = DEBUG

ISBNDB_KEY = ''
