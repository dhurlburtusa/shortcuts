# Pipenv Notes

Pipenv is a new package manager that combines `pip` and `virtualenv` into one easy-to-use tool.


## Installation

**(recommended) Install per User via pipx**

```sh
pipx install pipenv
```
Note: Recommended to use `pipx` that is installed per user in order to keep the global python installation as lean as possible.

**Install Globally**

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
