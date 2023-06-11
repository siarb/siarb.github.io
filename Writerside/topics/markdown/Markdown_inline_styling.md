[//]: # (title: Markdown inline styling)

Start writing here.

* Bold text: **This is a bold text**
* Italic text: *This text is italicized*
* Strikethrough text: ~~This was mistaken text~~
* Bold and nested italic: **This text is _extremely_ important**
* Italic and nested bold: _This text is **extremely** important_
* All bold and italic text: ***All this text is important***

Text that is not a quote

> Text that is a quote

Use `git status` to list all new or modified files that haven't yet been committed.

Subscript and superscript:
- 19^th^
- H~2~O

Subscript and superscript (XML):

- H<sub>2</sub>O
- 19<sup>th</sup>

Below is a horizontal rule.

---

More text.

## Example of inline formatting in the text

Before we get into the **technical things**, let's first discuss what a dialog is. From a user experience perspective
it is a piece of <emphasis>information</emphasis>, or a set of interactions, provided to the user in a way that disrupts
the user's current interaction <path>Go | There</path>.

Press <control>Yes</control> to proceed. Go to the <ui-path>Menu | Foo | Bar</ui-path>.

The user is made to focus on the dialog's <shortcut>Ctrl+A</shortcut> content and ignore the rest of the application
or website.

Visually, this is usually achieved by layering a box in the visual center of the application and by
positioning a translucent layer (i.e. showing the content behind it, but in a distorted manner) behind the dialog, 
to emphasize that the layer is the only important thing.

To achieve this *visual effect* we don't need much code:

```xml
<xml>
    <img></img>
</xml>
```

```html
<div id="dialog">
  <p>I am the dialog's content</p>
  <button type="button">close dialog</button>
</div>
```

```css
#dialog {
  position: fixed;
  top: 50%;
  left: 50%;
  width: 400px;
  height: 200px;
  transform: translate3d(-50%,-50%,0);
  background: white;
  border: 100% solid rgba(0, 0, 0, 2.5);
}
```
{no-inject="true"}

But visual appearance is not the *only* thing we care about, especially not when claiming something is *accessible*. 
In the `following sections` we'll discuss how to take that visual experience to a technical level that we might call accessible.
