# PlantUML MindMap MD

## Basic theme `Reddress Darkblue`

```plantuml
@startmindmap
!theme reddress-darkblue

skin rose

'Compatible with OrgMode 

* Solving \n Global \n Warming

** Eating differently
*** Vegan
*** Vegetarian
*** Less processed foods
*** Buy local food
** Travel
*** Bike more
*** Ride buses
*** Buy an electric car

left side

** Home
*** Energy audit
*** Use a cloths line
*** Add insulation
*** Get solar panels
** Be a role model
*** Vote
*** Encourage others
*** Teach your kids

@endmindmap
```

## Colors & Remove Box theme Sandstone

```plantuml
@startmindmap
!theme sandstone

skin rose

<style>
mindmapDiagram {
  .green {
    BackgroundColor lightgreen
  }
  .rose {
    BackgroundColor #FFBBCC
  }
}
</style>

* Solving \n Global \n Warming <<rose>>

**[#lightgreen] Eating differently
***[#Orange] Vegan
***[#Orange] Vegetarian
***[#Orange] Less processed foods
***[#Orange] Buy local food
** Travel <<green>>
***[#Orange] Bike more
***[#Orange] Ride buses
***[#Orange] Buy an electric car

left side

** Home <<green>>
***[#Orange] Energy audit
***[#Orange] Use a cloths line
***[#Orange] Add insulation
***[#Orange] Get solar panels
**[#lightgreen] Be a role model
***_ Vote
***_ Encourage others
***_ Teach your kids

@endmindmap
```

## Multilines theme Silver

```plantuml
@startmindmap
!theme silver

skin rose

* Solving \n Global \n Warming
**[#lightgreen] Eating differently
***[#Orange] Vegan
***[#Orange] Vegetarian
***[#Orange] Less processed foods
***[#Orange] Buy local food
** Travel
***:-Bike more
-Skateboard more
-Walk more
;
***:-Ride buses
-Ride UBER
-Ride carpool
;
***:-Buy an electric car
-Buy an electric scooter
-Buy an electric skateboard
;

@endmindmap
```

## Arithmetic Notation theme `Sketchy`

```plantuml
@startmindmap
!theme sketchy

skin rose

+ Solving \n Global \n Warming
++ Eating differently
+++ Vegan
+++ Vegetarian
+++ Less processed foods
+++ Buy local food
++ Travel
+++ Bike more
+++ Ride buses
+++ Buy an electric car

-- Home <<green>>
--- Energy audit
--- Use a cloths line
--- Add insulation
--- Get solar panels
-- Be a role model
--- Vote
--- Encourage others
--- Teach your kids

@endmindmap
```

## Markdown Syntax theme Spacelab

```plantuml
@startmindmap
!theme spacelab

skin rose

* Solving \n Global \n Warming
 * Eating differently
  * Vegan
  * Vegetarian
  * Less processed foods
  * Buy local food
 * Travel
  * Bike more
  * Ride buses
  * Buy an electric car

 * Home
  *_ Energy audit
  *_ Use a cloths line
  *_ Add insulation
  *_ Get solar panels
 * Be a role model
  *_ Vote
  *_ Encourage others
  *_ Teach your kids

@endmindmap
```

## Extras theme Superhero

```plantuml
@startmindmap
!theme superhero

skin rose

caption Save World Diagram
title Save the World

header
Draft One
endheader

center footer 1 of 3

legend left
|= |= Type |
|<back:#FFBBCC>   </back>| Problem |
|<back:lightgreen>   </back>| Areas |
|<back:Orange>   </back>| Actions |
endlegend

<style>
mindmapDiagram {
  .green {
    BackgroundColor lightgreen
  }
  .rose {
    BackgroundColor #FFBBCC
  }
}
</style>

* Solving \n Global \n Warming <<rose>>

**[#lightgreen] Eating differently
***[#Orange] Vegan
***[#Orange] Vegetarian
***[#Orange] Less processed foods
***[#Orange] Buy local food
** Travel <<green>>
***[#Orange]:Bike more
Skateboard more
Walk more
;
***[#Orange]:Ride buses
Ride UBER
Ride carpool
;
***[#Orange]:Buy an electric car
Buy an electric scooter
Buy an electric skateboard
;

left side

** Home <<green>>
***[#Orange] Energy audit
***[#Orange] Use a cloths line
***[#Orange] Add insulation
***[#Orange] Get solar panels
**[#lightgreen] Be a role model
***_ Vote
***_ Encourage others
***_ Teach your kids

@endmindmap
```

## Styles theme `Superhero Outline`

```plantuml
@startmindmap
!theme superhero-outline

skin rose

<style>

node {
    Padding 12
    Margin 3
    HorizontalAlignment center
    LineColor blue
    LineThickness 3.0
}

rootNode {
    LineStyle 8.0;3.0
    LineColor blue
    BackgroundColor lightgreen
    LineThickness 3.0
    RoundCorner 0
    Shadowing 5
}

leafNode {
    LineStyle 1
    LineColor red
    LineThickness 1.0
    RoundCorner 20
    Padding 3
}

arrow {
    LineStyle 4
    LineThickness 1
    LineColor blue
}
</style>

* Solving \n Global \n Warming

** Eating differently
*** Vegan
*** Vegetarian
*** Less processed foods
*** Buy local food
** Travel
***:Bike more
Skateboard more
Walk more
;
***:Ride buses
Ride UBER
Ride carpool
;
***:Buy an electric car
Buy an electric scooter
Buy an electric skateboard
;

left side

** Home
*** Energy audit
*** Use a cloths line
*** Add insulation
*** Get solar panels
** Be a role model
***_ Vote
***_ Encourage others
***_ Teach your kids

@endmindmap
```