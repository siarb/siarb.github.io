[//]: # (title: Markdown images and videos)

## Images

Markdown supports both **Commonmark** and *XML* images markup.

Below is a Commonmark internal image without any attributes.

![A small black mug with a tiny loop handle with a shot of deep brown espresso on a medium brown table](espresso.png)

Below is an external image.

![Minion](https://octodex.github.com/images/minion.png)

Below is a Commonmark image with specified width.

![A small black mug with a tiny loop handle with a shot of deep brown espresso on a medium brown table](espresso.png){ width=300 }

Below is a Commonmark image with specified border effect.

![A small black mug with a tiny loop handle with a shot of deep brown espresso on a medium brown table](espresso.png){ border-effect="rounded" }

Below is an XML image.

<img src="espresso.png" alt="A small black mug
with a tiny loop handle with a shot of deep brown espresso on a medium brown table" border-effect="rounded"/>

## Gifs

You can specify gif using md markup.

![A little girl is overexcited](gurl.gif)

Or XML markup.

<img src="gurl.gif" alt="girl is excited" preview-src="gurl-preview.png"/>

Some text.

## Icons

Icons are supported as a little inline images.

This is inline image ![lightbulb yellow](icons.actions.intentionBulb.svg) in Markdown.

This is inline image <img src="icons.actions.intentionBulb.svg" alt="lightbulb yelow"/> in XML.

## Videos

<anchor name="anchor-videos"/>

Markdown accepts XML video markup, it does not have its own.

<video src="https://youtu.be/xHlahGVq_BE" title="Five SQL Tips"/>

## Images with links

Paragraph [![An old rock in the desert](open.png) {height="16px"}](https://www.flickr.com/photos/beaurogers/31833779864)
paragraph.

## Image references

<!-- Start with declarations --> 

[experimental]: https://img.shields.io/badge/-Experimental_API-red?style=flat-square
[deprecated]: https://img.shields.io/badge/-Deprecated-lightgrey?style=flat-square
[4242]: https://img.shields.io/cpan/l/Config-Augeas?style=plastic

Now using them:

![Experimental API][experimental]
![Deprecated API][deprecated]

Text with inline badge ![One more badge][4242] here
