[//]: # (title: Markdown code blocks)

In Markdown, you can use either Markdown code blocks or semantic ones, 
also you can apply XML attributes to markdown code blocks.

### Here is a simple markdown code block.

```java
class FibonacciExample1{  
public static void main(String args[])  
{    
int n1=0,n2=1,n3,i,count=10;    
System.out.print(n1+" "+n2);//printing 0 and 1

for(i=2;i<count;++i)//loop starts from 2 because 0 and 1 are already printed    
{    
n3=n1+n2;    
System.out.print(" "+n3);    
n1=n2;    
n2=n3;    
}
}
}  
```

### The same as above but code is manually formatted with 5 spaces

```java
class FibonacciExample1 {
     public static void main(String args[]) {
          int n1 = 0, n2 = 1, n3, i, count = 10;
          System.out.print(n1 + " " + n2); //printing 0 and 1
          
          for (i = 2; i < count; ++i) //loop starts from 2 because 0 and 1 are already printed    
          {
               n3 = n1 + n2;
               System.out.print(" " + n3);
               n1 = n2;
               n2 = n3;
          }
     }
}  
```

### Here is a simple XML code block.

<code-block lang="java">
public class MultiplyTwoNumbers {
    public static void main(String[] args) {
        float first = 1.5f;
        float second = 2.0f;
        //
        float product = first * second;
        //
        System.out.println("The product is: " + product);
    }
} 
</code-block>

### Here is Markdown code block included from the source.

```java
```
{src="fibonacci.java" ignore-vars="false" disable-links="false"}

There is a Markdown code block included from the source with lines specified.

```kotlin
```
{src="Application.kt" include-lines="15-42"}

There is a Markdown code block included from the source with code construct (aka symbol) specified.

```kotlin
```
{src="newTest.kt" include-symbol="testSum"}

### Here is the collapsed Markdown code block.

```java
public class MultiplyTwoNumbers {

    public static void main(String[] args) {

        float first = 1.5f;
        float second = 2.0f;

        float product = first * second;

        System.out.println("The product is: " + product);
    }
}
```
{collapsible="true" default-state="collapsed"}

Below you can see the Markdown collapsible code block collapsed by default and with a title.

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
{collapsible="true" default-state="collapsed"
collapsed-title="Add two integers"}

Below you can see the Markdown collapsible code block collapsed by default and with a title taken from the code line number 3.

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
{collapsible="true" default-state="collapsed"
collapsed-title-line-number="3"}

Below you can see the Markdown collapsible code block expanded by default.

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
{collapsible="true" default-state="expanded"}

### Below are code blocks in tab groups.

<tabs group="ktor_versions">
<tab title="1.6.x" group-key="1_6">

```kotlin
bearer {
    refreshTokens {  // it: HttpResponse
        // ...
    }
}
```

</tab>
<tab title="2.0.0" group-key="2_0">

```kotlin
bearer {
    refreshTokens { // this: RefreshTokenParams
        // ...
    }
}
```
</tab>
</tabs>

### Below is a code block with prompt

```shell
chmod a+x name.sh  
```
{prompt="$"}

### Below is a code block with links and with disabled links

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

And a disabled link:

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
{disable-links="true"}

### Code block with whitespaces

```java

```
{src="indentationExample.java" show-white-spaces="true"}

### Below is an XML code block in compare element.

<compare style="left-right" first-title="Java" second-title="Kotlin">
                <code-block
                      lang="Java" ignore-vars="true">
                    public static void main(String[] args) {
                            System.out.println("Hi!")
                            }
                </code-block>
                <code-block
                      lang="Kotlin">
                    @JvmStatic fun main(args: Array) {
                    println("Hi!")
                    }
                </code-block>
            </compare>

### Below is a MD code block in compare element.

<compare style="left-right" first-title="Java" second-title="Kotlin">

```java
public static void main(String[] args) {
System.out.println("Hi!")
}
```

```kotlin
@JvmStatic fun main(args: Array) {
println("Hi!")
}
```

</compare>
