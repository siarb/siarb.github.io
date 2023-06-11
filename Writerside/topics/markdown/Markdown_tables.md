[//]: # (title: Markdown tables)

Markdown supports both md-grid and XML tables.

## Below is a grid table.

| A       | B       | C       | D       |
|---------|---------|---------|---------|
| Item1   | Item2   | Item 3  | Item 4  |
| Item 1.1 | Item 2.1 | Item 3.1 | Item 4.1 |

## Below is a grid right-aligned table.

<!-- We don't allow alignments in tables, see: https://youtrack.jetbrains.com/issue/WH-3350, 
so we process this table as usual and ignore the alignment -->

| Option | Description |
| ------:| -----------:|
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default. |
| ext    | extension to be used for dest files. |

## Below is a table with caption (MultiMarkdown).

<!-- We agreed to process captions as <p> under the table, 
until https://youtrack.jetbrains.com/issue/WH-3349 won't be implemented -->

| One | Two | Three | Four |
|-----|-----|-------|------|
| 12  | 13  | 14    | 15   |
| 1~1 | 1!2 | 1^3   | 1=4  |
| a%a | b/b | c&c   | d#d  |
[Table caption]

## Below is XML table

<table style="none">
    <tr>
        <td>A</td>
        <td>B</td>
        <td>C</td>
        <td>D</td>
    </tr>
    <tr>
        <td>Item 1</td>
        <td>Item 2</td>
        <td>Item 3</td>
        <td>Item 4</td>
    </tr>
    <tr>
        <td>Item 1.1</td>
        <td>Item 2.1</td>
        <td>Item 3.1</td>
        <td>Item 4.1</td>
    </tr>
</table>
