# Pipenv Notes

Pipenv is a new package manager that combines `pip` and `virtualenv` into one easy-to-use tool.


## Installation

**Starting with a Global Python Install**

```sh
pip install pipenv
```


## Workflows

### Starting a new Project

```sh
mkdir my_project/
cd my_project/

# Install some package:
pipenv install <some_package>

# Activate Virtual Environment:
pipenv shell
```
