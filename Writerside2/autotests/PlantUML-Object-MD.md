# PlantUML Object MD

## Properties

```plantuml
@startuml

skin rose

object ObjectOne
object "Object Two" as o2

o2 : id = 1
o2 : Name = "John"

@endumlml
```

## Relationship

```plantuml
@startuml

skin rose

title Simple Object Diagram

object Germany
object France
object Spain
object USA
object Mexico
object Russia
object Canada
object Japan

Germany <|-- France
Spain *-- USA
Mexico o-- Russia
Canada .. Japan

Germany : Liquor = Jagermeister
France : Liquor = Wine
Spain : Liquor = Wine
USA : Liquor = BudLight
Mexico : Liquor = Taquilla
Russia : Liquor = Vodka
Canada : Liquor = Beer
Japan : Liquor = Sake

@enduml
```

## Nesting approach

```plantuml
@startuml
object firstObject
object "My Second Object" as o2
@enduml
```

```plantuml
@startuml

object "Object Two" as o2 {
    id = 1
    Name = "John"
}
@enduml
```

```plantuml
@startuml
artifact artifact {
card card {
cloud cloud {
component component {
database database {
file file {
folder folder {
frame frame {
hexagon hexagon {
node node {
package package {
queue queue {
rectangle rectangle {
stack stack {
storage storage {
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
@enduml
```

## Nesting reverse alphabetical order

```plantuml
@startuml
storage storage {
stack stack {
rectangle rectangle {
queue queue {
package package {
node node {
hexagon hexagon {
frame frame {
folder folder {
file file {
database database {
component component {
cloud cloud {
card card {
artifact artifact {
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
@enduml
```

## Associations objects

```plantuml
@startuml
object o1
object o2
diamond dia
object o3

o1  --> dia
o2  --> dia
dia --> o3
@enduml
```

## Adding fields

To declare fields, you can use the symbol `:` followed by the field's name.

```plantuml
@startuml

object user

user : name = "Dummy"
user : id = 123

@enduml
```

It is also possible to group all fields between brackets `{}`.

```plantuml
@startuml

object user {
  name = "Dummy"
  id = 123
}

@enduml
```

## Map table or associative array

### 1

```plantuml
@startuml
map CapitalCity {
 UK => London
 USA => Washington
 Germany => Berlin
}
@enduml
```

### 2

```plantuml
@startuml
map "Map **Contry => CapitalCity**" as CC {
 UK => London
 USA => Washington
 Germany => Berlin
}
@enduml
```

### 3

```plantuml
@startuml
map "map: Map<Integer, String>" as users {
 1 => Alice
 2 => Bob
 3 => Charlie
}
@enduml
```

### 4

```plantuml
@startuml
object London
object Washington
object Berlin
object NewYork

map CapitalCity {
 UK *-> London
 USA *--> Washington
 Germany *---> Berlin
}

NewYork --> CapitalCity::USA
@enduml
```


### 5

```plantuml
@startuml
package foo {
    object baz
}

package bar {
    map A {
        b *-> foo.baz
        c =>
    }
}

A::c --> foo
@enduml
```


### 6

```plantuml
@startuml
object Foo
map Bar {
  abc=>
  def=>
}
object Baz

Bar::abc --> Baz : Label one
Foo --> Bar::def : Label two
@enduml
```

## Program (or project) evaluation and review technique (PERT) with map

```plantuml
@startuml PERT
left to right direction
' Horizontal lines: -->, <--, <-->
' Vertical lines: ->, <-, <->
title PERT: Project Name

map Kick.Off {
}
map task.1 {
    Start => End
}
map task.2 {
    Start => End
}
map task.3 {
    Start => End
}
map task.4 {
    Start => End
}
map task.5 {
    Start => End
}
Kick.Off --> task.1 : Label 1
Kick.Off --> task.2 : Label 2
Kick.Off --> task.3 : Label 3
task.1 --> task.4
task.2 --> task.4
task.3 --> task.4
task.4 --> task.5 : Label 4
@enduml
```