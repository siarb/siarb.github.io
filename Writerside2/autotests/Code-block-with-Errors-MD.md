# Code block attributes with Errors MD
## Include-symbol

### Not existing method name as include-symbol

```kotlin
```
{src="Application.kt" include-symbol="mainNotExist" id="kotlin-include-symbol-method"}

Nothing is displayed in code block above

## Collapsed-title-line-number attribute

Below demonstrated Markdown code block with a title from NOT existing line number 0.
Displayed `$RenderUtils.escapeHtml($element.getSynopsis())` as the Title [WRS-863]

```java
interface Greeter {
    public void Greet();
}
```
{collapsible="true" collapsed-title-line-number="0" id="java-collapsed-title-line-number-too-small"}

```java
interface Greeter {
    public void Greet();
}
```
{collapsible="true" collapsed-title-line-number="-10" id="java-collapsed-title-line-number-negative"}

```java
interface Greeter {
    public void Greet();
}
```
{collapsible="true" collapsed-title-line-number="99" id="java-collapsed-title-line-number-too-large"}

Below demonstrated Markdown collapsible code block with a title line = "".

```java
class Main {

    public static void main(String[] args) {

        System.out.println("Enter two numbers");
        int first = 10;
        int second = 20;
    }
}
```
{collapsible="true" collapsed-title-line-number="" id="java-collapsed-title-line-empty"}

## Ignore-vars attribute

Below demonstrated Markdown code block with the ignore-vars="false" attribute

```kotlin
    import io.ktor.features.*
    // ...
    fun Application.main() {
    install(%feature_name%)
    // ...
    }
```
{ignore-vars="false"}

Below demonstrated Markdown code block without attribute

```kotlin
    import io.ktor.features.*
    // ...
    fun Application.main() {
    install(%feature_name%)
    // ...
    }
```
