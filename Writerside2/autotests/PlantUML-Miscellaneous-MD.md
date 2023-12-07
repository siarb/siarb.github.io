# PlantUML Muscallaneous MD

## Oregon Trial

```plantuml
@startuml
'https://plantuml.com/oregon-trail
run oregon trail
@enduml
```

## Handwritten diagram theme Toy

```plantuml
@startuml
!theme toy

skin rose

'https://plantuml.com/handwritten
skinparam handwritten true

Alice -> Bob : hello
note right: Not validated yet
@enduml
```

## Steve Jobs

```plantuml
@startuml
'https://plantuml.com/steve
apple II
@enduml
```

## Smetana project theme United

```plantuml
@startuml
!theme united

skin rose

'https://plantuml.com/smetana02

!pragma layout smetana
class Foo1

Foo1 --> Foo2
Foo1 --> Foo3
Foo1 ---> Foo4 : test 4
Foo1 ----> Foo5 : test 5

@enduml
```

## Colors

```plantuml
@startuml
'https://plantuml.com/color
colors
@enduml
```

## Colors close to

```plantuml
@startuml
colors chocolate
@enduml
```

## Write code skin Rose

```plantuml
@startuml

skin rose

Alice -> Bob : hello
note right
<code>
main() {
  printf("Hello world");
}
</code>
end note
@enduml
```

## Legacy html

```plantuml
@startuml

skin rose

:* You can change <color:red>text color</color>
* You can change <back:cadetblue>background color</back>
* You can change <size:18>size</size>
* You use <u>legacy</u> <b>HTML <i>tag</i></b>
* You use <u:red>color</u> <s:green>in HTML</s> <w:#0000FF>tag</w>
----
* Use image : <img:http://plantuml.com/logo3.png>
;
@enduml
```

## Escape character skin Rose

```plantuml
@startuml

skin rose

object demo {
  This is not ~___underscored__.
  This is not ~""monospaced"".
}
@enduml
```

## Emphasized text

```plantuml
@startuml

Alice -> Bob : hello --there--
... Some ~~long delay~~ ...
Bob -> Alice : ok
note left
  This is **bold**
  This is //italics//
  This is ""monospaced""
  This is --stroked--
  This is __underlined__
  This is ~~waved~~
end note
@enduml
```

## Lists skin Rose

```plantuml
@startuml

skin rose

object demo {
  * Bullet list
  * Second item
}
note left
  * Bullet list
  * Second item
  ** Sub item
end note

legend
  # Numbered list
  # Second item
  ## Sub item
  ## Another sub item
  # Third item
end legend
@enduml
```