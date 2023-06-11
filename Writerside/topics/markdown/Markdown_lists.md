[//]: # (title: Markdown lists)

Markdown supports various lists itself.

## Ordered list {id=ordered}

Below is an ordered list in commonmark.

1. Item 1.
2. Item 2.

Ordered list that starts numbering with offset:

57. foo
1. bar

Ordered list with mixed numbering and id:

3. foo
7. bar
{id="ordered-list-with-id"}

Below is an ordered list in XML (only single line works as of now)

<list style="decimal"><li> Item 1</li><li> Item 2</li></list>

## Unordered list

Below is an unordered list in commonmark.

* Option 1
* Option 2

Below is an unordered list in XML.

<list style="bullet"><li> Item 1</li><li> Item 2</li></list>

## Other lists

Below is an alphabetic list in XML.

<list style="alpha-lower" sorted="desc"><li> Apple</li><li> Book</li></list>
