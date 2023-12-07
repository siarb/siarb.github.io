# PlantUML JSON MD

## Object theme Hacker

```plantuml
@startjson
!theme hacker

{ "name" : "Mark" }

@endjson
```

## Array theme Lightgray

```plantuml
@startjson
!theme lightgray

["Apple","Banana", "Fig", "Pear"]

@endjson
```

## Array of Objects theme Materia

```plantuml
@startjson
!theme materia

[
  {
    "name" : "Mark", 
    "age" : 31, 
    "city" : "New York"
  },
  {
    "name" : "Amy", 
    "age" : 24, 
    "city" : "Denver"
  },
  {
    "name" : "Steve", 
    "age" : 75, 
    "city" : "San Angelo"
  }
]

@endjson
```

## Complex theme `Materia Outline`

```plantuml
@startjson
!theme materia-outline

{
  "people" : [
      {
        "name" : "Mark", 
        "age" : 31, 
        "city" : "New York",
        "phone": [
          {
            "type": "home",
            "number": "867-5309"
          },
          {
            "type": "mobile",
            "number": "646 555-4567"
          }
        ]
      },
      {
        "name" : "Amy", 
        "age" : 24, 
        "city" : "Denver",
        "pets" : [ "Spot", "George", "Fred"]
      },
      {
        "name" : "Steve", 
        "age" : 75, 
        "city" : "San Angelo"
      }
    ]
}

@endjson
```

## Highlighting theme Mimeograph

```plantuml
@startjson
!theme mimeograph

#highlight "people"
#highlight "people" / "2" / "age"
#highlight "people" / "0" / "phone" / "0" / "type"

{
  "people" : [
      {
        "name" : "Mark", 
        "age" : 31, 
        "city" : "New York",
        "phone": [
          {
            "type": "home",
            "number": "867-5309"
          },
          {
            "type": "mobile",
            "number": "646 555-4567"
          }
        ]
      },
      {
        "name" : "Amy", 
        "age" : 24, 
        "city" : "Denver",
        "pets" : [ "Spot", "George", "Fred"]
      },
      {
        "name" : "Steve", 
        "age" : 75, 
        "city" : "San Angelo"
      }
    ]
}

@endjson
```

### Data Types theme Minty

```plantuml
@startjson
!theme minty

{
  "null" : null,
  "string" : "String", 
  "boolean" : true,
  "boolean" : false, 
  "number" : 1000,
  "array": ["Apple", "Banana", "Grapes"],
  "object": { "type": "home", "number": "867-5309"},
  "array of objects" :
  [
  { "type": "home", "number": "867-5309"},
  { "type": "mobile", "number": "867-5309"},
  { "type": "fax", "number": "867-5309"} ]
}

@endjson
```

## In other Diagrams theme Plain

```plantuml
@startuml
!theme plain

skin rose

title Classes - Class Diagram


class Dwelling {
  +Int Windows
  +void Lock()
}

class House
class Commune

json HouseInfo {
   "Doors":"2",
   "Windows":"24",
   "Color": ["Green", "White"]
}

House --> HouseInfo : "Details"

@enduml
```