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
