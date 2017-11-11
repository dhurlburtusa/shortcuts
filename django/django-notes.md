# Django Notes

Django is a free and open-source web framework, written in Python, which
follows the model-view-template architectural pattern.


## Installation

See https://docs.djangoproject.com/en/1.11/intro/install/ for the quick
installation guide.  See
https://docs.djangoproject.com/en/1.11/topics/install/ for a complete
installation quide.

The following is an overview of how to install Django on a Windows 10 box.
It assumes Python and Pip are already installed.  See
https://docs.djangoproject.com/en/1.11/howto/windows/ for details.

```sh
pip install virtualenvwrapper-win
```

```sh
mkvirtualenv django_project
```

```sh
pip install django
```

```sh
django-admin --version
```


## Project

A project is a collection of configuration and apps for a particular website.
A project can contain multiple apps.  An app can be in multiple projects.

**Creating a Project**

```sh
django-admin startproject <name>
cd <name>
```

**Creating an App**

```sh
python manage.py startapp <name>
```

**Checking for Project Problems**

```sh
python manage.py check
```

**Starting an Interactive Console Shell**

```sh
python manage.py shell
```

**Running the Server**

```sh
python manage.py runserver
```

**Creating Migrations**

```sh
python manage.py makemigrations <app-name>
```

**Show Migration SQL**

```sh
python manage.py sqlmigrate <app-name> <migration-id>
```

**Migrating Database**

```sh
python manage.py migrate
```


## Models

```python
from django.db import models


class ParentModel(models.Model):
    some_text = models.CharField(max_length=200)
    age = models.IntegerField(default=0)


class ChildModel(models.Model):
    parent = models.ForeignKey(ParentModel, on_delete=models.CASCADE)
    some_text = models.CharField(max_length=200)
    dob = models.DateTimeField('date of birth')

```


## Views

```python
from django.http import HttpResponse


# Manually generating an HttpResponse:
def index(request):
    return HttpResponse("Hello, world. You're at the polls index.")

```
