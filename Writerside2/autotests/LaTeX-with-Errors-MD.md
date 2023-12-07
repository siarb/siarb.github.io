# LaTeX with Errors MD

## Bold

To bold lowercase Greek or other symbols use the `\boldsymbol` command; this will only work if there exists a bold version of the symbol in the current font. As a last resort there is the `\pmb` command (poor man's bold): this prints multiple versions of the character slightly offset against each other.

```tex
\boldsymbol{\beta} = (\beta_1,\beta_2,\dotsc,\beta_n)
```

## Color

```tex
k = {\color{red}x} \mathbin{\color{blue}-} 2
```
