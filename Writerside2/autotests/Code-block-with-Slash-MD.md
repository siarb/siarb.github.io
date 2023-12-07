# Code block with Slash MD

## BackSlash test

`\[`
{id="backslash-with-square-bracket"}

`\]`
{id="backslash-with-square-closing-bracket"}

`\1`
{id="backslash-with-digit"}

`\A`
{id="backslash-with-capital-letter"}

`\b`
{id="backslash-with-letter"}

`\`
{id="backslash"}

## ForwardSlash test

`/[`
{id="forwardslash-with-square-bracket"}

`/]`
{id="forwardslash-with-square-closing-bracket"}

`/5`
{id="forwardslash-with-digit"}

`/C`
{id="forwardslash-with-capital-letter"}

`/`
{id="forwardslash"}

## Backslash after code-block with src initially ok

```java
```
{src="fibonacci.java" id="java-fibonacci" include-lines="2"}

`\[`
{id="backslash-with-square-bracket-after-code"}

`\]`
{id="backslash-with-square-closing-bracket-after-code"}

`\C`
{id="backslash-with-capital-letter-after-code"}

`\`
{id="backslash-after-code"}

## Code-block

```
\[
```
{id="multiline-code-block-backslash"}

```
/[
```
{id="multiline-code-block-forwardlash"}
