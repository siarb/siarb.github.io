# Different locations MD

## Image in module root

U2 from module root without attributes:
![](help-instance/U2.jpeg)

U2 from module root with attributes and preview from source-dir: 
![](help-instance/U2.jpeg){border-effect="rounded" style="inline" thumbnail="true" width="300" preview-src="U2.jpeg"}

## Image outside the original module

Book from other module without attributes:
![](kartinki/book.jpg)

Book from other module with attributes:
![](/pictures_1/book.jpg){border-effect="rounded" style="inline" thumbnail="true" width="300" preview-src="book.jpeg"}

## Image in the original module in 'images' folder with relative path

U2 from **not existing** images folder without attributes [WRS-1646]:
![](hello/U2.jpeg)

## Image in the original module from 'topics'

The Rolling Stones from 'topics':
![](help-module/topics/The-Rolling-Stones.jpeg)

## Image from non-default source-dir images in original module with default path

Ray Charles from non-default source-dir:
![](Ray-Charles.jpeg)

## Image from source-dir in original module with src-preview NOT in source-dir
U2 from module root with attributes and preview from NOT source-dir:
![](U2.jpeg){border-effect="rounded" style="inline" thumbnail="true" width="300" preview-src="test-data-nebula/stock/U2.jpeg"}

## GIF from non-source-dir images in original module with src-preview in non-source-dir
U2 from module root with attributes and preview from NOT source-dir [WRS-1646]:
![](kartinki/gurl.gif){border-effect="rounded" style="inline" thumbnail="true" width="300" preview-src="kartinki/book.jpg"}
