# Different locations MD

## Images within the module

Image from the non-default images dir: `<images dir="pictures" web-path="images"/>`. Path in code:  
`![Image from non-default dir, legacy filename](Ray-Charles-color.jpeg)`.

![Image from non-default dir, legacy filename](Ray-Charles-color.jpeg)

The same picture with the relative path notation. Path in code:  
`![Image from non-default dir, relative path](../pictures/Ray-Charles-color.jpeg)`

![Image from non-default dir, relative path](../pictures/Ray-Charles-color.jpeg)

The same picture with the alternative relative path notation. Path in code:  
`![Image from non-default dir, alternative relative path](./../pictures/Ray-Charles-color.jpeg)`

![Image from non-default dir, alternative relative path](./../pictures/Ray-Charles-color.jpeg)

Image from the module root. Path in code:  
`![Image from module root](../U2-color.jpeg)`

![Image from module root](../U2-color.jpeg)

Image from the topics. Path in code:  
`![Image from topics](./The-Rolling-Stones-color.jpg)`

![Image from topics](./The-Rolling-Stones-color.jpg)

Image from the `cfg` folder. Path in code:  
`![Image from cfg](../../stock/cfg/Pink_Floyd-color.jpg)`

![Image from cfg](../../stock/cfg/Pink_Floyd-color.jpg)

## Image outside the module

Image from the lego images folder outside the original module. Path in code:  
`![Image from lego]($PROJECT_DIR$/test-data/lego/build-profiles/images/sample-jpg-image-50kb.jpg)`

![Image from lego]($PROJECT_DIR$/test-data/lego/build-profiles/images/sample-jpg-image-50kb.jpg)

Image from the sandbox images folder outside the original module. Path in code:  
`![Image from sandbox images]($PROJECT_DIR$/test-data-nebula/stardust-sandbox/input/sandbox/images/espresso.png)`

![Image from sandbox images]($PROJECT_DIR$/test-data-nebula/stardust-sandbox/input/sandbox/images/espresso.png)

Swg logo from a folder outside the module. Path in code:  
`![Swg icon]($WRS_MODULE$/../../test-data/lego/build-profiles/images/logo.svg)`

![Swg icon]($WRS_MODULE$/../../test-data/lego/build-profiles/images/logo.svg)

## Preview-src within the module

Preview-src from a non-default images dir: `<images dir="pictures" web-path="images"/>`.  
The preview should be in color, the original picture by click should be black-and-white. Path in code:  
`![Preview-src legacy](Ray-Charles-bw.jpeg){preview-src="Ray-Charles-color.jpeg"}`

![Preview-src legacy](Ray-Charles-bw.jpeg){preview-src="Ray-Charles-color.jpeg"}

The same preview with the relative path notation. Path in code:  
`![Preview-src relative path](Ray-Charles-bw.jpeg){preview-src="../pictures/Ray-Charles-color.jpeg"}`

![Preview-src relative path](Ray-Charles-bw.jpeg){preview-src="../pictures/Ray-Charles-color.jpeg"}

The same preview with the alternative relative path notation. Path in code:  
`![Preview-src alternative relative path](Ray-Charles-bw.jpeg){preview-src="./../pictures/Ray-Charles-color.jpeg"}`

![Preview-src alternative relative path](Ray-Charles-bw.jpeg){preview-src="./../pictures/Ray-Charles-color.jpeg"}

Preview-src from the module root.  
The preview should be in color, the original picture by click should be BW. Path in code:  
`![Preview-src from module root]($WRS_MODULE$/U2-bw.jpg){preview-src="$WRS_MODULE$/U2-color.jpeg"}`

![Preview-src from module root]($WRS_MODULE$/U2-bw.jpg){preview-src="$WRS_MODULE$/U2-color.jpeg"}

Preview-src from topics.  
The preview should be in color, the original picture by click should be BW. Path in code:  
`![Preview-src from topics]($PROJECT_DIR$/test-data-nebula/stock/topics/The-Rolling-Stones-bw.jpg){preview-src="$PROJECT_DIR$/test-data-nebula/stock/topics/The-Rolling-Stones-color.jpg"}`

![Preview-src from topics]($PROJECT_DIR$/test-data-nebula/stock/topics/The-Rolling-Stones-bw.jpg){preview-src="$PROJECT_DIR$/test-data-nebula/stock/topics/The-Rolling-Stones-color.jpg"}

Preview-src from the `cfg` folder.  
The preview should be in color, the original picture by click should be BW. Path in code:  
`![Preview-src from cfg]($WRS_MODULE$/cfg/Pink_Floyd-bw.jpg){preview-src="$PROJECT_DIR$/test-data-nebula/stock/cfg/Pink_Floyd-color.jpg"}`

![Preview-src from cfg]($WRS_MODULE$/cfg/Pink_Floyd-bw.jpg){preview-src="$PROJECT_DIR$/test-data-nebula/stock/cfg/Pink_Floyd-color.jpg"}

## Preview-src outside the module

Preview from folder outside the module.  
Butterflies on the preview, a dog as the main picture by click. Path in code:  
`![Preview-src from lego](dog.png){preview-src="$WRS_MODULE$/../../test-data/lego/build-profiles/images/sample-jpg-image-50kb.jpg"}`

![Preview-src from lego](dog.png){preview-src="$WRS_MODULE$/../../test-data/lego/build-profiles/images/sample-jpg-image-50kb.jpg"}

Preview from folder outside the module.  
Espresso on the preview, a dog as the main picture by click. Path in code:  
`![Preview-src from sandbox](dog.png){preview-src="$WRS_MODULE$/../stardust-sandbox/input/sandbox/images/espresso.png"}`

![Preview-src from sandbox](dog.png){preview-src="$WRS_MODULE$/../stardust-sandbox/input/sandbox/images/espresso.png"}

## Border-effect attribute for image outside

Path in code:  
`![Border-effect image outside]($WRS_MODULE$/../stock/U2-color.jpeg){border-effect="rounded"}`

![Border-effect image outside]($WRS_MODULE$/../stock/U2-color.jpeg){border-effect="rounded"}

## Thumbnail attribute for image outside

Path in code:  
`![Thumbnail image module root]($WRS_MODULE$/U2-color.jpeg){thumbnail="true"}`

![Thumbnail image module root]($WRS_MODULE$/U2-color.jpeg){thumbnail="true"}

## Width attribute for image outside

Path in code:  
`![Width attribute image outside]($PROJECT_DIR$/test-data-nebula/stock/U2-color.jpeg){width="300"}`

![Width attribute image outside]($PROJECT_DIR$/test-data-nebula/stock/U2-color.jpeg){width="300"}

## Animated GIF outside module

Path in code:  
`![Animated gif with module macro]($WRS_MODULE$/../imageStock/flamingo-gif.gif)`

![Animated gif with module macro]($WRS_MODULE$/../imageStock/flamingo-gif.gif)

And the same animated image but with preview-src. Path in code:  
`![Animated gif with module macro and preview]($WRS_MODULE$/../imageStock/flamingo-gif.gif){ preview-src="$WRS_MODULE$/../imageStock/flamingo-frame.jpg" }`

![Animated gif with module macro and preview]($WRS_MODULE$/../imageStock/flamingo-gif.gif){ preview-src="$WRS_MODULE$/../imageStock/flamingo-frame.jpg" }


## Image from other module

Path in code:  
`![Image from other module]($WRS_MODULE$/../stardust-sandbox/input/sandbox/images/book.jpg)`

![Image from other module]($WRS_MODULE$/../stardust-sandbox/input/sandbox/images/book.jpg)

## Not existing path
Image from **not existing** folder, but the filename exists in the `images` dir (`pictures` in this particular case). 
Path in code:  
`![file-name is ok, folder is wrong]($WRS_MODULE$/../aaa/bbb/Ray-Charles-color.jpeg)`

![file-name is ok, folder is wrong]($WRS_MODULE$/../aaa/bbb/Ray-Charles-color.jpeg)
