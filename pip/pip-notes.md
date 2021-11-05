# pip Notes


## Installation

Most python distributions come with pip pre-installed. However, if yours does not, see https://pip.pypa.io/en/latest/installation/.


## Upgrading

```sh
python -m pip install --upgrade pip
```


## Usage

**Installing a Package from PyPy**

```sh
# Syntax
python -m pip <pip arguments>
```

```sh
# Example
python -m pip numpy pandas
```

**Installing a Package from a Requirements File**

```sh
python -m pip install -r requirements.txt
```

**Uninstalling a Package**

```sh
python -m pip uninstall SomePackage
```
