[//]: # (title: Code block attributes MD)

##  Code block attributes without default state

### Collapsible Markdown code block without default state

```sql
SELECT Orders.OrderID, Customers.CustomerName, Orders.OrderDate
FROM Orders
INNER JOIN Customers ON Orders.CustomerID=Customers.CustomerID;
```
{collapsible="true"}

### Not collapsible Markdown code block without default state

```kotlin
fun main(args: Array<String>) {

    // Create a reader instance which takes input from keyboard
    val reader = Scanner(System.`in`)
    print("Enter a number: ")

    // read the next integer from the keyboard
    var integer: Int = reader.nextInt()

    // print the following line to the output screen
    println("You entered: $integer")
}
```
{collapsible="false" id="kotlin-collapsible-false"}

## Markdown Code block attributes with default state

### Collapsible Markdown code block with default-state = collapsed

```python
num1 = 1.5
num2 = 6.3

# Add two numbers
sum = num1 + num2

# Display the sum
print('The sum of {0} and {1} is {2}'.format(num1, num2, sum))
```
{collapsible="true" default-state="collapsed"}

### Markdown code block with default-state = expanded

```javascript
const num1 = 5;
const num2 = 3;

// add two numbers
const sum = num1 + num2;

// display the sum
console.log('The sum of ' + num1 + ' and ' + num2 + ' is: ' + sum);
```
{collapsible="true" default-state="expanded"}

### Not collapsible Markdown code block with default-state = collapsed

```html
<style>
p.one {
    border-style: solid;
    border-color: #0000ff;
}

p.two {
    border-style: solid;
    border-color: #ff0000 #0000ff;
}
</style>
<p class="one">One-colored border!</p>
<p class="two">Two-colored border!</p>
```
{collapsible="false" default-state ="collapsed"}

### Not collapsible Markdown code block with default-state = expanded

```css
p.one {
    border-style: solid;
    border-color: #0000ff;
}

p.two {
    border-style: solid;
    border-color: #ff0000 #0000ff;
}
```
{collapsible="false" default-state="expanded"}


## Collapsible Markdown attributes with collapsed-title

### Collapsed title empty

```C#
class CSharpProgram  
    {  
        static void Main(string[] args)  
        {  
            System.Console.WriteLine("Hello World!");  
        }  
    }
```
{collapsible="true" collapsed-title=""}

### Collapsed title specified

```Typescript
class UserAccount {
    name: string;
    id: number;

    constructor(name: string, id: number) {
        this.name = name;
        this.id = id;
    }
}

const user: User = new UserAccount("Murphy", 1);
```
{collapsible="true" collapsed-title="Typescript code block summary"}

## Full content of src

```java
```
{src="fibonacci.java" id="java-fibonacci"}

## Lines from src

```kotlin
```
{src="Application.kt" include-lines="27-31" id="kotlin-code-lines-from-file"}

## Include-symbol

### Existing method name as include-symbol

```kotlin
```
{src="Application.kt" include-symbol="main" id="kotlin-include-symbol-main"}

### Not existing method name as include-symbol

```kotlin
```
{src="Application.kt" include-symbol="mainNotExist" id="kotlin-include-symbol-method"}

Nothing is displayed in code block above

### Class with no additional constructor

```java
```
{src="AppTestConstructor.java" include-symbol="AppTestConstructor" id="no-additional-constructor"}

There are must be no imports, no additional constructor and comment displayed in the rendered code above

## Prompt attribute

```shell
chmod a+x name.sh  
```
{prompt="$"}

## Disable-links attribute

Below demonstrated link that must be displayed as the code in the code below:

```java
class Main {

    public static void main(String[] args) {

        System.out.println("Enter two numbers");
        [[[int|https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html]]] first = 10;
        int second = 20;

        System.out.println(first + " " + second);

        // add two numbers
        int sum = first + second;
        System.out.println("The sum is: " + sum);
    }
}
```
{disable-links="true" id="java-data-links-true"}

Below demonstrated link that must be displayed as link in the code below:

```java
class Main {

    public static void main(String[] args) {

        System.out.println("Enter two numbers");
        [[[int|https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html]]] first = 10;
        int second = 20;
    }
}
```
{disable-links="false" id="java-disable-links-false"}

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

Below demonstrated Markdown collapsible code block collapsed by default with a title taken from the empty code line number 4.

```java
class Main {

    public static void main(String[] args) {

        System.out.println("Enter two numbers");
        int first = 10;
        int second = 20;
        
        System.out.println(first + " " + second);
        
        // add two numbers
        int sum = first + second;
        System.out.println("The sum is: " + sum);                           
    }
}
```
{collapsible="true" default-state="collapsed" collapsed-title-line-number="4" id="java-collapsed-title-line-number-empty"}

Below demonstrated Markdown collapsible code block collapsed by default with a title taken from the code line number 5.

```java
class Main {

    public static void main(String[] args) {

        System.out.println("Enter two numbers");
        int first = 10;
        int second = 20;
    
        System.out.println(first + " " + second);
    
        // add two numbers
        int sum = first + second;
        System.out.println("The sum is: " + sum);
    }
}
```
{collapsible="true" collapsed-title-line-number="5" id="java-collapsed-title-line-number-not-empty"}

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

Below demonstrated Markdown code block with the ignore-vars="true" attribute

```kotlin
    import io.ktor.features.*
    // ...
    fun Application.main() {
    install(%feature_name%)
    // ...
    }
```
{ignore-vars="true"}

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