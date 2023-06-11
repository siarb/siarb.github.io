[//]: # (title: Markdown chapters)

In Markdown headings are treated as chapters.

## Some nice chapter {id="nice-chapter" collapsible="true"}

There are a few more things we'll want to consider, that ARIA practices do not mention specifically:

* make sure no element outside the dialog is visible to screen readers.
* to avoid the document from being scrolled by the browser.

## Another chapter {id="nice-chapter-2" collapsible="true" default-state="expanded"}

First of all, we need a container for the dialog to live in, we use a `<div>` element, 
because it doesn't have any semantic meaning itself. We explain that the `<div>` actually *is*
a dialog by adding [`role="dialog"`](https://www.w3.org/TR/wai-aria/roles#dialog).

Roles are defined by ARIA, which allows us to express the *meaning* of an element.

We also add `tabindex="-1"` to allow the dialog container to be focused, something we'll revisit soon. 
Because dialogs are not always visible, we also add.

To structure the content rendered by the dialog, we'll use `<header>` for the introduction,`<section>` for the content
and `<footer>` for the buttons to interact with the dialog.

```html
<div role="dialog" tabindex="-1" hidden>
    <header></header>
    <section></section>
    <footer></footer>
</div>
```

## This is the chain of empty chapters included one into another.
### Chapter on level 3.
#### Chapter on level 4.

### This one is for Section 1 {switcher-key="Section1"}

This one is for Section one.

### This one is for Section 2 {switcher-key="Section2"}

This one is for Section two.

### Yet another chapter {caps="title"}

This chapter is one level below the previous one.

### Yet yet another chapter {level="1"}

In this chapter, we suppress the level with the level parameter.

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