# Included image

## Image with path outside the module is included

<include from="Light-dark-image-test.md" element-id="image"></include>

## The same image included but now the "library" article is in different subfolder and path does not match

Image is not displayed in this case (it is better to warn users in the documentation and reflect that preferable way is to use `$WRS_MODULE$` variable, that means module root).
Included element has a relative path image.

<include from="Light-dark-image-test-but-subfolder.md" element-id="this-wont-work"></include>

## But there is workaround by using the "kinda-absolute" syntax

Included element has a `$WRS_MODULE$` path image.

<include from="Light-dark-image-test-but-subfolder.md" element-id="this-will-work"></include>
