# Jupyter Notebook Notes

The Jupyter Notebook is an interactive computing environment that enables users to author notebook documents that include:

- Live code
- Interactive widgets
- Plots
- Narrative text
- Equations
- Images
- Video

These documents provide a complete and self-contained record of a computation that can be converted to various formats and shared with others.

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

### Code Cells

A code cell allows you to edit and write new code, with full syntax highlighting and tab completion. The programming language you use depends on the kernel.

When a code cell is executed, code that it contains is sent to the kernel associated with the notebook. The results that are returned from this computation are then displayed in the notebook as the cell’s output.

### Markdown Cells

A markdown cell allows you to document the computational process using the Markdown syntax.

Within Markdown cells, you can also include mathematics in a straightforward way, using standard LaTeX notation: `$...$` for inline mathematics and `$$...$$` for displayed mathematics.

### Raw Cells

Raw cells provide a place in which you can write output directly. Raw cells are not evaluated by the notebook.
