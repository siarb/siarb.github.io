[//]: # (title: Markdown topic)

Prolog: Start writing here.

A `Map` stores _key-value_ pairs (or _entries_); keys are unique.

![The image](https://cdn.pixabay.com/photo/2013/09/22/19/14/brick-wall-185082_1280.jpg)

# Chapter 1

To configure the scope of data to include in the backup file, use the following options:

* `-C` or `--include-config` — includes build configurations settings.

## Chapter 2: How to deal with frequent problems

Running tests fails with `jarFiles is not set for [...]` or `Created extension classloader is not equal to plugin’s one`
: Set system property `idea.force.use.core.classloader` to `true`.

`com.intellij.ui.mac.MacMessages.showMessageDialog(String, String, String[], boolean, Window, int, int, DialogWrapper.
DoNotAskOption)` method removed
: Use `com.intellij.ui.mac.MacMessages.showMessageDialog(String, String, String[], boolean, Window, int, int,  
DoNotAskOption)` instead

`com.intellij.openapi.ui.MessageDialogBuilder.doNotAsk(DialogWrapper.DoNotAskOption)` method removed
: Use `com.intellij.openapi.ui.MessageDialogBuilder.doNotAsk(DoNotAskOption)` instead

`com.intellij.diagnostic.PerformanceWatcher.Snapshot` class now interface
: Recompile the dependant code or use `com.intellij.diagnostic.PerformanceWatcherImpl.SnapshotImpl` instead

`com.intellij.openapi.fileEditor.impl.EditorTabPresentationUtil.getEditorTabTitle(Project, VirtualFile, EditorWindow)`
method parameter `EditorWindow` removed
: This parameter never needed, but lead to code coupling

### Chapter 3: Just some text

According to Wikipedia, the World Health Organization (WHO) is a specialized agency of the United Nations that 
is concerned with international public health. 
We can now use WHO because, it has been defined, but we can't use DAAB, because people may not know what it represents. 

However, the effect of an extra pause might be crucial to create the right feel, good timing, grace, and clarity.

#### Chapter 4: code block

The full interface for this class looks like:

```kotlin
interface Attributes {
    operator fun <T : Any> get(key: AttributeKey<T>): T
    fun <T : Any> getOrNull(key: AttributeKey<T>): T?
    operator fun contains(key: AttributeKey<*>): Boolean
    fun <T : Any> put(key: AttributeKey<T>, value: T)
    fun <T : Any> remove(key: AttributeKey<T>)
    fun <T : Any> take(key: AttributeKey<T>): T = get(key).also { remove(key) }
}
```
