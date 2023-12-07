# PlantUML Gantt MD

## Gantt

### Lasts theme `AWS orange`

```plantuml
@startgantt
!theme aws-orange

Project starts 2020-02-01

-- Team 1 --
[T1 - Requirements] lasts 6 days
[T1 - Design] lasts 7 days
[T1 - Implementation] lasts 13 days

-- Team 2 --
[T2 - Requirements] lasts 1 week and 4 days
[T2 - Implementation] lasts 2 weeks

@endgantt
```

### Starts theme `Black Knight`

```plantuml
@startgantt
!theme black-knight

Project starts 2020-02-01

-- Team 1 --
[T1 - Requirements] lasts 6 days
[T1 - Design] lasts 7 days
[T1 - Implementation] lasts 13 days

[T1 - Requirements] starts 2020-02-02
[T1 - Design] starts 2020-02-06
[T1 - Implementation] starts 2020-02-08


-- Team 2 --
[T2 - Requirements] lasts 1 week and 4 days
[T2 - Implementation] lasts 2 weeks

[T2 - Requirements] starts 2020-02-02
[T2 - Implementation] starts 2020-02-07

@endgantt
```

### Starts and Ends theme `Blue Gray`

```plantuml
@startgantt
!theme bluegray

Project starts 2020-02-01

-- Team 1 --
[T1 - Requirements] lasts 6 days
[T1 - Design] lasts 7 days
[T1 - Implementation] lasts 13 days

[T1 - Requirements] ends 2020-02-07
[T1 - Design] ends 2020-02-12
[T1 - Implementation] ends 2020-02-20

-- Team 2 --
[T2 - Requirements] starts 2020-02-02
[T2 - Requirements] ends 2020-02-13
[T2 - Implementation] starts 2020-02-07
[T2 - Implementation] ends 2020-02-20

-- Team 3 --
[T3 - Requirements] starts 2020-02-02 and ends 2020-02-13
[T3 - Implementation] starts 2020-02-07 and ends 2020-02-20

@endgantt
```

### Constraints and Short names theme `Blue rint`

```plantuml
@startgantt
!theme blueprint

Project starts 2020-02-01

-- Team 1 --
[T1 - Requirements] lasts 6 days
[T1 - Design] lasts 7 days

[T1 - Requirements] ends 2020-02-07

'Adding constraint
[T1 - Design] starts at [T1 - Requirements]'s end

'Short Name
[T1 - Implementation] as [I] lasts 13 days
[I] starts at [T1 - Design]'s end

@endgantt
```

### Colors and Completed theme `Carbon Gray`

```plantuml
@startgantt
!theme carbon-gray

Project starts 2020-02-01

-- Team 1 --
[T1 - Requirements] as [T1R] lasts 1 week and 4 days and is 22% complete
[T1 - Implementation] as [T1I] starts 2020-02-10 and ends 2020-02-22

[T1R] is colored in pink
[T1I] is colored in lightblue
[T1I] is 90% completed

-- Days Off --
[Holidays] starts 2020-02-12 and ends 2020-02-14
[Holidays] is colored in GreenYellow

@endgantt
```

### Then, Milestones, and Hyperlinks theme `Cerulean`

```plantuml
@startgantt
!theme cerulean

Project starts 2020-02-01

-- Team 1 --
[T1 - Requirements] as [T1R] lasts 6 days
then [T1 - Design] as [T1D] lasts 7 days

'Maps work when you use html map link type
[T1R] links to [[http://www.google.com]]
[T1D] links to [[http://www.yahoo.com]]

'Milestones
[Party for Team] as [PFT] happens at [T1 - Design]'s end
[PFT] is colored in Red

@endgantt
```

### Daily and Closed days theme `Crulean Outline`

```plantuml
@startgantt
!theme cerulean-outline

'Can be daily, weekly, or monthly
ganttscale daily

saturdays are closed
sunday are closed

2020/02/06 is closed
2020/03/10 to 2020/03/12 is closed

Project starts 2020-02-01

-- Team 1 --
[Version 1] as [V1] lasts 10 days
then [Version 2] as [V2] lasts 21 days

@endgantt
```

### Weekly theme `Cloudscape Design`

```plantuml
@startgantt
!theme cloudscape-design

'Can be daily, weekly, or monthly
ganttscale weekly

saturdays are closed
sunday are closed

2020/02/06 is closed
2020/03/10 to 2020/03/12 is closed

Project starts 2020-02-01

-- Team 1 --
[Version 1] as [V1] lasts 14 days
then [Version 2] as [V2] lasts 45 days
then [Version 3] as [V3] lasts 50 days

@endgantt
```

### Resource usage theme `CRT Amber`

```plantuml
@startgantt
!theme crt-amber

'Can be daily, weekly, or monthly
ganttscale daily

2020/02/06 is closed
2020/02/10 to 2020/02/12 is closed

Project starts 2020-02-01

-- Team 1 --
[Support] as [s] on {John:10%} {Marcy:10%} lasts 10 days
[Version 1] as [V1] on {John:50%} {Marcy:20%} lasts 4 days
then [Version 2] as [V2] on {John:60%} {Marcy:10%} lasts 14 days
then [Version 3] as [V3] on {John:10%} {Marcy:20%} lasts 8 days

{John} is off on 2020-02-06
{Marcy} is off on 2020-02-06

{John} is off on 2020-02-10 to 2020-02-12
{Marcy} is off on 2020-02-10 to 2020-02-12

@endgantt
```

### Notes theme `Cyborg`

```plantuml
@startgantt
!theme cyborg

Project starts 2020-02-01

-- Team 1 --
[T1 - Requirements] as [T1R] lasts 8 days
note bottom
1. Chat w/ client
2. Write doc
3. Review with team
end note
[T1R] ends 2020-02-10

[T1 - Design] lasts 7 days
note bottom
1. List test cases
2. Think about performance
3. Security
end note


'Adding constraint
[T1 - Design] starts at [T1 - Requirements]'s end

'Short Name
[T1 - Implementation] as [I] lasts 13 days
[I] starts at [T1 - Design]'s end
note bottom
Go!!
end note

@endgantt
```

### Links & Colors theme `Cyborg Outline`

```plantuml
@startgantt
!theme cyborg-outline

Project starts 2020-02-01

-- Team 1 --
[T1 - Requirements] as [T1R] lasts 8 days 
note bottom
1. Chat w/ client
2. Write doc
3. Review with team
end note
[T1R] ends 2020-02-10

[T1 - Design] as [T1D] lasts 7 days and starts 3 days after [T1R]'s end with blue dotted link
note bottom
1. List test cases
2. Think about performance
3. Security
end note

'Short Name
[T1 - Implementation] as [I] lasts 9 days and starts 5 days after [T1D]'s end with green dashed link

note bottom
Go!!
end note

@endgantt
```
