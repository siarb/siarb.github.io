[//]: # (title: Markdown more complex snippets)

## The whole chapter to be included {id="chapter-for-direct-include"}

This is **bold text** to include. 

## Chapter for more granular direct includes.

Some text in prologue.

> Warning to be included.
>
{style="warning" id="warning-for-direct-include"}

| A      | B      | C      | 
|--------|--------|--------|
| Item 1 | Item 2 | Item 3 |
| Item 4 | Item 5 | Item 6 |
{id="table-for-direct-include"}

### Chapter with the same elements but in snippets.

Some more unrelated text.

<snippet id="snippet-text">

This is **bold text** to include.

</snippet>

<snippet id="snippet-warning">

> Warning to be included.
>
{style="warning" id="warning-as-a-chunk"}

</snippet>

<snippet id="snippet-table">

| YY                | ZZ        |  
|-------------------|-----------|
| Next to last item | Last item |
{id="table-as-a-chunk"}

</snippet>

## Snippet with inner chapter.

<snippet id="snippet-inner-chapter">

Prologue. 

* Some list items 
* More list items 
* Last item

## Inner chapter to include (level 2-1).

Text L2-1.

### Inner chapter to include (level 3).

_Italic_ text L3.

## Inner chapter to include (level 2-2).

Text L2-2.

</snippet>

Epilogue.

