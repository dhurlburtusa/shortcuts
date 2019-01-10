# Flask Notes

Flask is a web application framework built with Python. Flask claims to be a
microframework for Python. The “micro” in microframework means Flask aims to
keep the core simple but extensible.


## Prerequisites

- Python 2.7+, 3.4+


## Installation

Flask is simply a Python package. Thus, it can be installed with

```sh
pip install Flask
```

However, it is best practice to install dependencies of a Python project in a
dedicated virtual environment (VE). Without a VE, Python packages are installed
in a sub-directory of your Python installation. With a VE, you pick a directory
where your Python packages are installed. Then you activate one of your VEs when
you want to use (e.g., install, update, run) it.

The following will create a VE in the `/PyVirEnvs/flask` directory.

```sh
python3 -m venv /PyVirEnvs/flask

# Or for Windows:
python3 -m venv \PyVirEnvs\flask
```

Then you can activate the VE by

```sh
source /PyVirEnvs/flask/bin/activate

# Or on Windows:
\PyVirEnvs\flask\Scripts\activate.bat

# Or on Git Bash on Windows:
source \PyVirEnvs\flask\Scripts\activate
```

The above is great if you want to share a set of dependencies between several
projects. However, you may want to use a sub-directory in your project as the
VE, think `node_modules`. (I am not sure if there is an established convention
for project isolated VEs.)

See http://flask.pocoo.org/docs/1.0/installation/ for details or instructions
for Python 2.7.
