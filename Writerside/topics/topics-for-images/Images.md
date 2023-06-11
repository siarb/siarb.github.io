# Images

With [WRS-1439](https://youtrack.jetbrains.com/issue/WRS-1439) implemented we can display images from different locations within a project.

For topics path is built from the topic. E.g. `![](./dog.png)` is the correct path, if 'dog.png' file is placed in the `topics` folder of the documentation module (`Writerside/topics/dog.png`).

The path for images can be specified the following ways:
1. `![](dog.png)` - legacy for Writerside.
    Must work by default, but shouldn't work if there is no `<images dir="images"/>` in the `writerside.cfg` (formerly `project.ihp`) file. 
2.  a) Must work: `![](../images/dog.png)`
    b) Alternative way of relative path also must work: `![](./../images/dog.png)`
3. `![](../../<Module_name>/images/dog.png)` - correct path
4. `![]($PROJECT_DIR$/<Module_name>/images/dog.png)` - correct, if module placed in the root of a project (by default now)
5. `![]($WRS_MODULE$/../images/dog.png)` - `$WRS_MODULE$` means module folder. Convenient, if you need to go beyond the module to a higher level, for example. Or user can specify path this way for images in the documentation module.
6. Absolute path to image is not supported.