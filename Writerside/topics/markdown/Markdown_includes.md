[//]: # (title: Markdown includes)

<tldr>
<var name="example_name" value="client-json/src/JsonClient.kt"/>
<include src="lib.topic" include-id="download_example"/>
</tldr>

Markdown supports includes.

## Markdown to Markdown

### Below is a chapter with text, included as a whole.

<include from="warning.md" element-id="gen-warn"/>

### Below A filter elements should be included.

<include from="Markdown_snippets.md" element-id="note-with-filters" use-filter="empty,a"/>

### Below B filter elements should be included.

<include from="Markdown_snippets.md" element-id="note-with-filters" use-filter="b,empty"/>

### Below is a block with !a filter. 

So all not A elements should be included.

<include from="Markdown_snippets.md" element-id="note-with-filters" use-filter="!a"/>

### Below is a block with `!a,!c` filter (and `!c,!a` to confirm)

Clearly, both should be the same.

<include from="Markdown_snippets.md" element-id="note-with-filters" use-filter="!c,!a"/>

Is it the same? 

<include from="Markdown_snippets.md" element-id="note-with-filters" use-filter="!a,!c"/>

### Below is a block with empty filter.

So all elements without filters and "not something" should be included.

<include from="Markdown_snippets.md" element-id="note-with-filters" use-filter="empty"/>

### Filtering inner items in list.

Expected below: 2, 4 and 5.

<include from="Markdown_snippets.md" 
         element-id="list" 
         use-filter="empty,2,4"/>

## XML to Markdown

#### Below is simple included block.

<include from="warning.topic" element-id="warning_generic"/>

#### Below is an included block with a variable.

<include from="warning.topic" element-id="warning_deprecation">
<var name="version" value="1.7"/>
</include>

#### Below is an included block with an instance filter.

<if instance="s">
<include from="warning.topic" element-id="warning_deprecation"/>
</if>

### Includes with filters

#### Below A filter elements should be included.

<include from="note.topic" element-id="note-with-filters" use-filter="a,empty"/>

#### Below B filter elements should be included.

<include from="note.topic" element-id="note-with-filters" use-filter="empty,b"/>

#### Below is a block with !a filter, so all not A elements should be included.

<include from="note.topic" element-id="note-with-filters" use-filter="!a"/>

#### Below is a block with empty filter, so all elements without filters and "not something" should be included.

<include from="note.topic" element-id="note-with-filters" use-filter="empty"/>

### Filtering inner items in list.

Only 2, 4, and 5 expected below.

<include from="note.topic"
         element-id="list"
         use-filter="empty,2,4"/>
