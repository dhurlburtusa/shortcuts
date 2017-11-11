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

**Running Tests**

```sh
python manage.py test
python manage.py test <app-name>
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

**Querying Models**

```python
from app.models import ChildModel, ParentModel

children = ChildModel.objects.all()
children = ChildModel.objects.filter(id=1)
children = ChildModel.objects.filter(some_text__startswith='Foo')
child = ChildModel.objects.get(pk=1)

from django.utils import timezone

current_year = timezone.now().year
child = ChildModel.objects.get(dob__year=current_year)
```

## Views

```python
from django.http import HttpResponse


# Manually generating an HttpResponse:
def index(request):
    return HttpResponse("Hello, world. You're at the polls index.")

def detail(request, child_id):
    return HttpResponse("You're looking at child %s." % child_id)
```

**Shortcuts**

```python
# app/views.py
from django.shortcuts import get_list_or_404, get_object_or_404, render

from .models import MyModel

def search(request, query):
    models = get_list_or_404(MyModel, query)
    return render(request, 'app/search.html', {'models': models})

def detail(request, model_id):
    model = get_object_or_404(MyModel, pk=model_id)
    return render(request, 'app/detail.html', {'model': model})
```


## URLconfs

Django uses what are known as URLconfs to get from a URL to a view.  These are
defined in an app's `urls.py` file.

```python
# app/urls.py
from django.conf.urls import url

from . import views

# Setting an app name allows URLs to be namespaced which can
# be used by the {% url %} template tag.
app_name = 'my_app'

urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^(?P<child_id>[0-9]+)/$', views.detail, name='detail'),
]

```

**Named RegEx Captures**

Capturing groups in regular expressions can be named by adding `?P<name>`
immediately following the opening parenthesis of the capturing group.  See an
example in the above code snippet.


## Templates

```python
{% if condition %}
  <p>Condition is truthy.</p>
{% else %}
  <p>Condition not truthy.</p>
{% endif %}

<ul>
{% for my_item in my_list %}
    <li>{{ forloop.counter }} <a href="{% url 'my_app:detail' my_item.id %}">{{ my_item.some_text }}</a></li>
{% endfor %}
</ul>

<form method="post" ...>
  {% csrf_token %}
</form>
```
