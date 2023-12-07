# Snippet includes MD

## Use the Snippet

Below is an example of a snippet included

<include from="Snippets-library-MD.md" element-id="runTests"/>

## Snippets with filters

### Below A filter included

<include from="Snippets-library-MD.md" element-id="note-with-filters" use-filter="empty,a"/>

### Below B filter included

<include from="Snippets-library-MD.md" element-id="note-with-filters" use-filter="b,empty"/>

### Filter negative

Below is '!a' filter, so all 'NOT A' elements are included:

<include from="Snippets-library-MD.md" element-id="note-with-filters" use-filter="!a"/>

### Two filters negative

Below is '!a,c' filters, so all 'NOT A' and 'NOT C' elements are included:

<include from="Snippets-library-MD.md" element-id="note-with-filters" use-filter="!c,a"/>

### Below is a block with empty filter

So all elements without filters and "not something" should be included.

<include from="Snippets-library-MD.md" element-id="note-with-filters" use-filter="empty"/>

<snippet id="wrapped-in-snippet-header">

### Header wrapped in snippet

This content is under h3 header, not h4.

</snippet>