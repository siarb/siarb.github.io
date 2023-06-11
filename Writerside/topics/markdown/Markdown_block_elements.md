[//]: # (title: Markdown block elements)

This topic contains block elements like paragraphs, tips, notes, and warnings.

## Citation markup is translated to tips, notes, and warnings.

### By default, it is treated as a tip. 

> Citation markup treated as a tip.

### But this may be altered by the attribute 'style'.

Supported values are "warning" and "note".
Also, `style="tip"` may be used but has no effect since it is a default value.

#### Warning 

> First line 
> Second line
> 
{style="warning"}

#### Note

> Note line 1
>  
> Note line 3 after empty line
> 
{style="note"}

#### Tip (default style attribute may be omitted)

> Note line 1
>
> Note line 3 after empty line
> 
{style="tip"}

## XML block markup may be mixed in. 

<p>
Some XML paragraph.</p>

<tip>
This is a useful tip.
</tip>

<note>
This is a side note.
</note>

Some plain text block.

<warning>
This is a warning.
</warning>

Some plain text block.

<procedure style="choices" title="Options" collapsible="true">
<step>
Option 1.
</step>
<step>
Option 2
</step>
</procedure>

Some plain text block. 
