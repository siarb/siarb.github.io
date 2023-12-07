# LaTeX MD

One of the greatest motivating forces for Donald Knuth when he began developing the original TeX system was to create something that allowed simple construction of mathematical formulae, while looking professional when printed.

## Greek letters

```tex
\alpha \beta \gamma \rho \sigma \delta \epsilon
```

## Binary operators

```tex
\times \otimes \oplus \cup \cap	
```

## Relation operators

```tex
< > \subset \supset \subseteq \supseteq	
```

## Others

```tex
\int \oint \sum \prod	
```

## From task description

```tex
x = \sin \left( \frac{\pi}{2} \right)
```


## Operators

```tex
\cos (2\theta) = \cos^2 \theta - \sin^2 \theta
```

## Limits

```tex
\lim\limits_{x \to \infty} \exp(-x) = 0
```

## Pythagorean theorem

```tex
x^2 + y^2 = z^2
```

## The mass-energy equivalence
```tex
E=mc^2
```

## Simple math expression

```tex
sqrt{x^2+1}
```

## Modular operator

`\bmod`: 

```tex
a \bmod b
```

`\pmod`:

```tex
x \equiv a \pmod{b}
```

## Powers and indices

The caret (^; also known as the circumflex accent) character is used to raise something, and the underscore (_) is for lowering. If an expression containing more than one character is raised or lowered, it should be grouped using curly braces (`{` and `}`).

```tex
k_{n+1} = n^2 + k_n^2 - k_{n-1}
```

For powers with more than one digit, surround the power with {}.

```tex
n^{22}
```

An underscore (_) can be used with a vertical bar (|) to denote evaluation using subscript notation in mathematics:

```tex
f(n) = n^5 + 4n^2 + 2 |_{n=17}
```

## Fractions and Binomials

A fraction is created using the `\frac{numerator}{denominator}` command (for those who need their memories refreshed, that's the top and bottom respectively!). Likewise, the binomial coefficient (a.k.a, the Choose function) may be written using the `\binom` command:

```tex
\frac{n!}{k!(n-k)!} = \binom{n}{k}
```

You can embed fractions within fractions:

```tex
\frac{\frac{1}{x}+\frac{1}{y}}{y-z}
```

For relatively simple fractions, especially within the text, it may be more aesthetically pleasing to use powers and indices instead:

```tex
^3/_7
```

## Continued fractions

```tex
\begin{equation}
  x = a_0 + \cfrac{1}{a_1 
          + \cfrac{1}{a_2 
          + \cfrac{1}{a_3 + \cfrac{1}{a_4} } } }
\end{equation}
```

## Multiplication of two numbers

```tex
\begin{equation}
\frac{
    \begin{array}[b]{r}
      \left( x_1 x_2 \right)\\
      \times \left( x'_1 x'_2 \right)
    \end{array}
  }{
    \left( y_1y_2y_3y_4 \right)
  }
\end{equation}
```

## Roots

```tex
\sqrt{\frac{a}{b}}
```

It accepts an optional argument specified in square brackets (`[` and `]`) to change magnitude:

```tex
\sqrt[n]{1+x+x^2+x^3+\dots+x^n}
```

## Sums and integrals

The \sum and \int commands insert the sum and integral symbols respectively, with limits specified using the caret (^) and underscore (_). The typical notation for sums is:

```tex
\sum_{i=1}^{10} t_i
```

or: 

```tex
\displaystyle\sum_{i=1}^{10} t_i
```

The limits for the integrals follow the same notation. It's also important to represent the integration variables with an upright d, which in math mode is obtained through the \mathrm{} command, and with a small space separating it from the integrand, which is attained with the \, command.

```tex
\int_0^\infty \mathrm{e}^{-x}\,\mathrm{d}x
```

There are many other "big" commands which operate in a similar manner:

```tex
\sum	
\prod	
\coprod	
\bigoplus	
\bigotimes	
\bigodot	
\bigcup	
\bigcap	
\biguplus	
\bigsqcup	
\bigvee	
\bigwedge	
\int	
\oint	
\iint
\iiint	
\iiiint
\idotsint
```

The `\substack` command allows the use of `\\` to write the limits over multiple lines:

```tex
\sum_{\substack{
   0<i<m \\
   0<j<n
  }} 
 P(i,j)
```

If you want the limits of an integral to be specified above and below the symbol (like the sum), use the `\limits` command:


```tex
\int\limits_a^b
```

## Brackets, braces and delimiters

```tex
( a ), [ b ], \{ c \}, | d |, \| e \|,
\langle f \rangle, \lfloor g \rfloor,
\lceil h \rceil, \ulcorner i \urcorner,
/ j \backslash
```

## Automatic sizing

Very often, mathematical features will differ in size, in which case the delimiters surrounding the expression should vary accordingly. This can be done automatically using the `\left`, `\right`, and `\middle` commands.

```tex
\left(\frac{x^2}{y^3}\right)
```

Any of the previous delimiters may be used in combination with these:

```tex
P\left(A=2\middle|\frac{A^2}{B}>4\right)
```

Curly braces are defined differently by using `\left\{` and `\right\}`:

```tex
\left\{\frac{x^2}{y^3}\right\}
```

If a delimiter on only one side of an expression is required, then an invisible delimiter on the other side may be denoted using a period (.).

```tex
\left.\frac{x^3}{3}\right|_0^1
```

## Manual sizing

In certain cases, the sizing produced by the \left and \right commands may not be desirable, or you may simply want finer control over the delimiter sizes. In this case, the `\big`, `\Big`, `\bigg` and `\Bigg` modifier commands may be used:

```tex
( \big( \Big( \bigg( \Bigg(
```

These commands are primarily useful when dealing with nested delimiters. For example, when typesetting:


```tex
\frac{\mathrm d}{\mathrm d x} \left( k g(x) \right)
```

`\left` and `\right` commands produce the same size delimiters as those nested within it. This can be difficult to read. To fix this, we write

```tex
\frac{\mathrm d}{\mathrm d x} \big( k g(x) \big)
```

## Matrices and arrays

A basic matrix may be created using the `matrix` environment: in common with other table-like structures, entries are specified by row, with columns separated using an ampersand (`&`) and new rows separated with a double backslash (`\\`)

```tex
\begin{matrix}
a & b & c \\
d & e & f \\
g & h & i
\end{matrix}
```

Two matrices:

```tex
\begin{matrix}
-1 &  3 \\
 2 & -4
\end{matrix}
=
\begin{matrix}
-1 &  3 \\
 2 & -4
\end{matrix}
```

When writing down arbitrary sized matrices, it is common to use horizontal, vertical and diagonal triplets of dots (known as ellipses) to fill in certain columns and rows. These can be specified using the `\cdots`, `\vdots` and `\ddots` respectively:


```tex
A_{m,n} = 
 \begin{pmatrix}
  a_{1,1} & a_{1,2} & \cdots & a_{1,n} \\
  a_{2,1} & a_{2,2} & \cdots & a_{2,n} \\
  \vdots  & \vdots  & \ddots & \vdots  \\
  a_{m,1} & a_{m,2} & \cdots & a_{m,n} 
 \end{pmatrix}
 ```

In some cases, you may want to have finer control of the alignment within each column, or to insert lines between columns or rows. This can be achieved using the array environment, which is essentially a math-mode version of the tabular environment, which requires that the columns be pre-specified:

```tex
\begin{array}{c|c}
  1 & 2 \\ 
  \hline
  3 & 4
 \end{array}
```

You may see that the AMS matrix class of environments doesn't leave enough space when used together with fractions resulting in output similar to this:

```tex
M = \begin{bmatrix}
       \frac{5}{6} & \frac{1}{6} & 0           \\[0.3em]
       \frac{5}{6} & 0           & \frac{1}{6} \\[0.3em]
       0           & \frac{5}{6} & \frac{1}{6}
     \end{bmatrix}
```

To counteract this problem, add additional leading space with the optional parameter to the `\\` command:

```tex
M = \begin{bmatrix}
       \frac{5}{6} & \frac{1}{6} & 0           \\[0.3em]
       \frac{5}{6} & 0           & \frac{1}{6} \\[0.3em]
       0           & \frac{5}{6} & \frac{1}{6}
     \end{bmatrix}
```

## Adding text to equations

```tex
50 apples \times 100 apples = lots of apples^2
```

There are two noticeable problems: there are no spaces between words or numbers, and the letters are italicized and more spaced out than normal. Both issues are simply artifacts of the maths mode, in that it treats it as a mathematical expression: spaces are ignored (LaTeX spaces mathematics according to its own rules), and each character is a separate element (so are not positioned as closely as normal text).

There are a number of ways that text can be added properly. The typical way is to wrap the text with the `\text{...}` command (a similar command is `\mbox{...}`, though this causes problems with subscripts, and has a less descriptive name). Let's see what happens when the above equation code is adapted:

```tex
50 \text{apples} \times 100 \text{apples} 
 = \text{lots of apples}^2
```

The text looks better. However, there are no gaps between the numbers and the words. Unfortunately, you are required to explicitly add these. There are many ways to add spaces between math elements, but for the sake of simplicity we may simply insert space characters into the `\text` commands.

```tex
50 \text{ apples} \times 100 \text{ apples}
 = \text{lots of apples}^2
```

## Formatted text

Using the `\text` is fine and gets the basic result. Yet, there is an alternative that offers a little more flexibility. You may recall the introduction of font formatting commands, such as `\textrm`, `\textit`, `\textbf`, etc. These commands format the argument accordingly, e.g., `\textbf{bold text}` gives bold text. These commands are equally valid within a maths environment to include text. The added benefit here is that you can have better control over the font formatting, rather than the standard text achieved with `\text`.

```tex
50 \textrm{ apples} \times 100
 \textbf{ apples} = \textit{lots of apples}^2
```

## Plus and minus signs

A plus-minus sign is written as:

```tex
\pm
```

Similarly, there exists also a minus-plus sign:

```tex
\mp
```

## Controlling horizontal spacing

```tex
f(n) =
  \begin{cases}
    n/2       & \quad \text{if } n \text{ is even}\\
    -(n+1)/2  & \quad \text{if } n \text{ is odd}
  \end{cases}
```

Simple equation for the indefinite integral of y with respect to x:

```tex
\int y \mathrm{d}x
```

```tex
\int y\, \mathrm{d}x
```

```tex
\int y\: \mathrm{d}x
```

```tex
\int y\; \mathrm{d}x
```

The negative space may seem like an odd thing to use, however, it wouldn't be there if it didn't have some use! Take the following example:


```tex
\left(
    \begin{array}{c}
      n \\
      r
    \end{array}
  \right) = \frac{n!}{r!(n-r)!}
```

The matrix-like expression for representing binomial coefficients is too padded. There is too much space between the brackets and the actual contents within. This can easily be corrected by adding a few negative spaces after the left bracket and before the right bracket.

```tex

\left(\!
    \begin{array}{c}
      n \\
      r
    \end{array}
  \!\right) = \frac{n!}{r!(n-r)!}
```

## Manually Specifying Formula Style

```tex
\begin{equation}
   C^i_j = {\textstyle \sum_k} A^i_k B^k_j
\end{equation}
```

For "dots with commas":
```tex
A_1,A_2,\dotsc,
```

For "dots with binary operators/relations":

```tex
A_1+\dotsb+A_N
```

For "multiplication dots":

```tex
A_1 \dotsm A_N
```

For "dots with integrals":

```tex
\int_a^b \dotsi
```

For "other dots" (none of the above):

```tex
A_1\dotso A_N	
```

