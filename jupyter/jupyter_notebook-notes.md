# Jupyter Notebook Notes

## Running

```sh
jupyter notebook
```

**With some Options**

```sh
jupyter notebook --port 4321 ./path/to/some/notebook.ipynb
```

## Executing Notebooks

```sh
jupyter execute ./path/to/some/notebook.ipynb
```

## Structure of a Notebook Document

The notebook consists of a sequence of cells. A cell is a multiline text input field, and its contents can be executed by using `Shift`-`Enter` or by clicking either the “Play” button the toolbar. The execution behavior of a cell is determined by the cell’s type. There are three types of cells: code cells, markdown cells, and raw cells.
