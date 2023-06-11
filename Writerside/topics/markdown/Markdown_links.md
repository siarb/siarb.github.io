[//]: # (title: Markdown links)

Start writing here.

## Testing links {id="links-test"}

You can point the link to the md topic — [`Markdown_tables`](Markdown_tables.md)
or to the XML topic — [e.g. to the XML topic named `Definition Lists`](Definition_list.topic)

* External link 1 (with anchor in url and id): [markdown basic syntax](https://www.markdownguide.org/basic-syntax/#an-example-putting-the-parts-together){id="link-markdown-guide"}
* External link 2 (http, with title and id) [tomcat](http://tomcat.apache.org/download-90.cgi "Download tomcat") {id="link-download-tomcat"}
* "mail-to" link: [Email Sales](mailto:sales@jetbrains.com)

Links can be in XML markup as well: <a href="Markdown_topic.md">Link with text specified</a>

This is a link to the [topic with tldr](Summary_elements.topic ).

## Local links
1. Local link to chapter [with implicit id](#links-to-the-anchors)
2. Local link to chapter [with explicit id](#custom-id-works-for-chapters)
3. Local link [to anchor](#anchor-seealso)
4. The same local link but with empty square brackets [](#anchor-seealso)

## Links to the anchors.

Links can point to the anchors.
<a anchor="anchor-seealso">Link to the local anchor in the same doc.</a>

And in markdown too. [Link to anchor in "Images and Video" MD topic](Markdown_images_and_videos.md#anchor-videos)

## Link summaries. {id="custom-id-works-for-chapters"}

Links can have summaries from the [starting paragraphs](Markdown_tables.md)
or defined explicitly via link-summary element.
This is supposed to work [for target XML topics](Link-summary.topic)
or [for XML link-summary nodes in the Markdown targets](Markdown_link_summaries.md)

Finally, summaries may come from the [Markdown link titles](https://www.markdownguide.org/basic-syntax/#adding-titles "link title is the part of the basic syntax").

| Target File | Topic or Chapter | Link                                                                                                            |
|-------------|---------|-----------------------------------------------------------------------------------------------------------------|
| MD  | Topic   | [Link with Chapter summary](Markdown_link_summaries.md)                                                         |
| MD  | Chapter | [Link with Summary from top of the chapter](Markdown_link_summaries.md#inner-chapter-1)                         |
| MD  | Chapter | [Summary from the middle of the chapter](Markdown_link_summaries.md#inner-chapter-2)                            |
| XML | Topic   | <a href="Link-summary.topic">Link to link summary topic</a>                                                     |
| XML | Chapter | <a href="Link-summary.topic" anchor="chapter-anchor-summary">Link to chapter with summary</a>                   |
| XML | Chapter | <a href="Links-A.topic" anchor="chapter-anchor-one">Link to chapter without summary</a>                         |
| XML | Chapter | <a href="Links-B.topic" anchor="chapter-anchor-b" summary="This summary overrides target">Overriden summary</a> |

## Additional formatting of the links text.

This was reported as a WH-2697, the link with strikethrough and the code in the text.
[~~`ElementLookupRenderer`~~](https://whatever.com). The XML counterpart of this markup is
[~~here~~](Links-A.topic#chapter-links-with-inline-markup-in-text). 
Some other combinations [^^work^^ ~too~](https://google.com)

## Reference-style links.

[You can use numbers for reference-style link definitions][1]

Some text to show that the reference links can [follow later][2].

We can use reference [numbers][5] [in any][4] [order][3], and can use [them][3] more [than once][2].

Finally, you may have [gaps][123] in the numbering, no problem.

[1]: http://number.academy/1
[2]: https://www.oracle.com/java/technologies/downloads/ "Download Java"
[3]: #links-test "Local link to the chapter on top"
[5]: Markdown_chapters.md "Link to other topic with anchor"
[4]: Markdown_chapters.md#nice-chapter-2 "Link to other topic with anchor"
[123]: https://number.academy/123 "Neither duplicate URLS nor skipped numbers is an error"

## Empty links

1. This is a markdown empty link. [](Markdown_images_and_videos.md).
2. An empty link with a title. This is a [](Markdown_link_summaries.md "The target topic summary").
3. This is an XML one: <a href="Chapter.topic"/>

Below is an empty link in a tip.

> See [](Markdown_definition_lists.md) on how to do this.
>
> See [](Markdown_chapters.md) on how to do that.
>
{style="tip"}

## See also block with XML links only.

<anchor name="anchor-seealso"/>

 <seealso>
        <category ref="categoryA">
            <a href="Tldr.topic">Tutorial</a>
            <a href="Videos.topic">Overview</a>
        </category>
        <category ref="categoryB">
            <a href="Chapter.topic">Tutorial</a>
            <a href="Code.topic">Overview</a>
        </category>
    </seealso>