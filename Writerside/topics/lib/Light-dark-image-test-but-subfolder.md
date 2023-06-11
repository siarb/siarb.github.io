# The same as Light-dark image test

But since it is in different subfolder (`topics/lib`), the relative path to the image is different.
It works well per current location, but supposedly does not work, when the image is included into article from other folder.
Path in code:  
`![](../../../imageStock/Boy.jpeg){id="this-wont-work"}`

![](../../../imageStock/Boy.jpeg){id="this-wont-work"}

The below syntax allows to work around the issue. Path in code:  
`![]($WRS_MODULE$/../imageStock/Boy.jpeg){id="this-will-work"}`

![]($WRS_MODULE$/../imageStock/Boy.jpeg){id="this-will-work"}
