# DataTables Notes

`DataTables` is a plug-in for the `jQuery` Javascript library.  It is a highly
flexible tool, based upon the foundations of progressive enhancement, and will
add advanced interaction controls to any HTML table.


## Installation

Basically, only the following is necessary for installation:

1) jQuery
2) DataTables CSS
3) DataTables JS

How the above three are made available to an HTML document can vary.  One
simple way is to include the following markup in your HTML:

```html
<link href="//cdn.datatables.net/1.10.16/css/jquery.dataTables.css" rel="stylesheet">

<script crossorigin="anonymous" integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4=" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script src="//cdn.datatables.net/1.10.16/js/jquery.dataTables.js"></script>
```

See https://datatables.net/manual/installation for details.


## Required Markup

`DataTables` expects markup similar to the following.  Notice how the head,
body, and foot are explicitly declared. The `tfoot` is optional.

```html
<table id="table_id" class="display">
    <thead>
        <tr>
            <th>Column 1</th>
            <th>Column 2</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Row 1 Data 1</td>
            <td>Row 1 Data 2</td>
        </tr>
        <tr>
            <td>Row 2 Data 1</td>
            <td>Row 2 Data 2</td>
        </tr>
    </tbody>
    <tfoot>
        <tr>
            <th>Column 1</th>
            <th>Column 2</th>
        </tr>
    </tfoot>
</table>
```
