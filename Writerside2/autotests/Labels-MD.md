# Labels MD

Below is the workaround for [WRS-3328](https://youtrack.jetbrains.com/issue/WRS-3328)
<title>Labels MD</title>
<label>Tag</label>
<label>Second</label>
<annotations>Annotation</annotations>
<annotations>β</annotations>

Only the `chapter` or the `topic` tags can have a label and attribute.
There is no sense to specify a label via an attribute to the title.

The default color of the labels always matches the primary color of the product and documentation.

However, we have a palette of colors available. Each header can only have one label, as it divides the content into different parts, usually related to licenses.

![Labels](labels.png){border-effect="line" width="706"}

<procedure title="label tag, label attribute">
<step>
Use this tag or attribute to add an edition label to the content element.

```xml
<chapter title="Database features" label="U">
<label product="py">Pro</label>
</chapter>
```

![Labels](labels_1.png){width="706" border-effect="line"}

</step>
</procedure>

Annotations, a type of labels that can be used multiple times on a single element. This allows, for example, for one heading to have many different tags when needed and also helps users to more easily find and use features, even if they are not listed on the primary label.

![Annotations](annotations.png){border-effect="line" width="706"}

<procedure title="annotations tag, annotations attribute">
<step>
Use this tag to add annotations to the content element.

```xml
<chapter title="Rocket science support">
<annotations product="py">β,2024.2</annotations>
<annotations product="ij">EAP,2024.3</annotations>
```

![Annotations](annotations_1.png){width="706" border-effect="line"}

</step>
</procedure>

## labels.list file
`labels.list` file contains declarations of the labels and annotations that you will use in the project.
The <code>short-name</code> of a label or an annotation must be unique for a product and is used to add the item to documentation pages.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<labels xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="https://resources.jetbrains.com/stardust/labels.xsd">

<label short-name="U" full-name="IntelliJ IDEA Ultimate" color="tangerine" href="https://www.jetbrains.com/products/compare/?product=idea&amp;product=idea-ce">
Check out IntelliJ IDEA Ultimate for more features
</label>

<annotation short-name="EAP" full-name="Early Access Program" color="purple"/>
<annotation short-name="β" full-name="Beta" color="strawberry"/>

</labels>
```