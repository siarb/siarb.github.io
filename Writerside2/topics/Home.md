# Documentation Home

```plantuml
@startuml
Bob->Alice : Hello!
@enduml
```

## Flowchart single block

```mermaid
flowchart TB

    subgraph emailSystem[Email System]
        h4[-Software System-]:::type
        d4[The internal Microsoft Exchange \n email system]:::description
    end
```


## Flowchart TB

```mermaid
flowchart TB

    subgraph personalBankingCustomer[Personal Banking Customer]
        h1[-Person-]:::type
        d1[A customer of the bank, with \n personal bank accounts]:::description
    end
    personalBankingCustomer:::person

    subgraph internetBankingSystem[Internet Banking System]
        h2[-Software System-]:::type
        d2[Allows customers to view \n information about their bank \n banks, and make payments]:::description
    end
    internetBankingSystem:::internalSystem

    subgraph mainframeBankingSystem[Mainfram Banking System]
        h3[-Software System-]:::type
        d3[Stores all of the core banking \n information about customers, \n accounts, transactions etc]:::description
    end
    mainframeBankingSystem:::externalSystem

    subgraph emailSystem[Email System]
        h4[-Software System-]:::type
        d4[The internal Microsoft Exchange \n email system]:::description
    end
    emailSystem:::externalSystem

    personalBankingCustomer--Views account \n balances, and \n makes payments \n using-->internetBankingSystem
    internetBankingSystem--Gets accounts \n information from, \n and makes \n payments using-->mainframeBankingSystem
    internetBankingSystem--Sends emails using--> emailSystem
    emailSystem--Sends emails to-->personalBankingCustomer

%% Element type definitions

    classDef person fill:#08427b
    classDef internalSystem fill:#1168bd
    classDef externalSystem fill:#999999

    classDef type stroke-width:0px, color:#fff, fill:transparent, font-size:12px
    classDef description stroke-width:0px, color:#fff, fill:transparent, font-size:13px
```

## Flowchart Email System

```mermaid
flowchart TB

subgraph personalBankingCustomer[Personal Banking Customer]
    h1[-Person-]:::type
    d1[A customer of the bank, with \n personal bank accounts]:::description
end
personalBankingCustomer:::person

personalBankingCustomer--Visits bigbank.com using HTTPS-->webApplication
personalBankingCustomer--Views account \n balancs, and \n makes payments \n using-->singlePageApplication
personalBankingCustomer--Views account \n balancs, and \n makes payments \n using-->mobileApp

subgraph internetBankingSystem[Internet Banking System]
    subgraph webApplication[Web Application]
        direction LR
        h2[Container: Java and Spring MVC]:::type
        d2[Delivers the static content and the \n Internet banking single page \n application]:::description
    end
    webApplication:::internalContainer

    subgraph singlePageApplication[Single Page Application]
        direction LR
        h3[Container: JavaScript and Angular]:::type
        d3[Provides all of the Internet banking \n fuctionality to customers via their \n web browser]:::description
    end
    singlePageApplication:::internalContainer

    subgraph mobileApp[Mobile App]
        direction LR
        h4[Container: Xamarin]:::type
        d4[Provides a limited subset of the \n Internet banking functionality to \n customers via their mobile device]:::description
    end
    mobileApp:::internalContainer

    subgraph apiApplication[API Application]
        direction LR
        h5[Container: Java and Spring MVC]:::type
        d5[Provides Internet banking \n functionality via a JSON/HTTP API]:::description
    end
    apiApplication:::internalContainer

    subgraph database[Database]
        direction LR
        h6[Container: Oracle Database Schema]:::type
        d6[Stores user registration information, \n hashed authentication credentials, \n access logs, etc]:::description
    end
    database:::internalContainer

    webApplication--Delivers to the \n customer's web \n browser-->singlePageApplication
    singlePageApplication--Makes API calls to-->apiApplication
    mobileApp--Makes API calls to-->apiApplication
    apiApplication--Reads from and \n writes to-->database
end

apiApplication--Sends emails using-->emailSystem
apiApplication--Makes API calls to-->mainframeBankingSystem

subgraph mainframeBankingSystem[Mainfram Banking System]
    h98[-Software System-]:::type
    d98[Stores all of the core banking \n information about customers, \n accounts, transactions etc]:::description
end
mainframeBankingSystem:::externalSystem

subgraph emailSystem[Email System]
    h99[-Software System-]:::type
    d99[The internal Microsoft Exchange \n email system]:::description
end
emailSystem:::externalSystem

emailSystem--Sends emails to-->personalBankingCustomer

%% Element type definitions

classDef person fill:#08427b
classDef internalContainer fill:#1168bd
classDef externalSystem fill:#999999

classDef type stroke-width:0px, color:#fff, fill:transparent, font-size:12px
classDef description stroke-width:0px, color:#fff, fill:transparent, font-size:13px
```

## Flowchart Single Page Application

```mermaid
flowchart TB

subgraph singlePageApplication[Single Page Application]
    direction LR
    h3[Container: JavaScript and Angular]:::type
    d3[Provides all of the Internet banking\nfuctionality to customers via their\nweb browser]:::description
end
singlePageApplication:::internalContainer

subgraph mobileApp[Mobile App]
    direction LR
    h4[Container: Xamarin]:::type
    d4[Provides a limited subset of the\nInternet banking functionality to\ncustomers via their mobile device]:::description
end
mobileApp:::internalContainer

subgraph database[Database]
    direction LR
    h6[Container: Oracle Database Schema]:::type
    d6[Stores user registration information, \n hashed authentication credentials, \n access logs, etc]:::description
end
database:::internalContainer

subgraph mainframeBankingSystem[Mainfram Banking System]
    h98[-Software System-]:::type
    d98[Stores all of the core banking \n information about customers, \n accounts, transactions etc]:::description
end
mainframeBankingSystem:::externalSystem

subgraph emailSystem[Email System]
    h99[-Software System-]:::type
    d99[The internal Microsoft Exchange \n email system]:::description
end
emailSystem:::externalSystem

singlePageApplication--Make API calls to-->signInController
singlePageApplication--Make API calls to-->resetPasswordController
singlePageApplication--Make API calls to-->accountsSummaryController
mobileApp--Make API calls to-->signInController
mobileApp--Make API calls to-->resetPasswordController
mobileApp--Make API calls to-->accountsSummaryController

subgraph apiApplication[API Application]
    subgraph signInController[Sign In Controller]
        direction LR
        h10[Component: Spring MVC Rest Controller]:::type
        d10[Allows users to sign in to the Internet \n Banking System]:::description
    end
    signInController:::internalComponent

    subgraph resetPasswordController[Reset Password Controller]
        direction LR
        h20[Component: Spring MVC Rest Controller]:::type
        d20[Allows users to reset their passwords \n with a single use URL]:::description
    end
    resetPasswordController:::internalComponent

    subgraph accountsSummaryController[Accounts Summary Controller]
        direction LR
        h30[Component: Spring MVC Rest Controller]:::type
        d30[Provides customers with a summary \n of their bank accounts]:::description
    end
    accountsSummaryController:::internalComponent

    subgraph securityComponent[Security Component]
        direction LR
        h40[Component: Spring Bean]:::type
        d40[Provides functionality related to \n signing in, changing passwords, etc]:::description
    end
    securityComponent:::internalComponent

    subgraph emailComponent[Email Component]
        direction LR
        h50[Component: Spring Bean]:::type
        d50[Sends emails to users]:::description
    end
    emailComponent:::internalComponent

    subgraph mainframeBankingSystemFacade[Mainframe Banking System Facade]
        direction LR
        h60[Component: Spring Bean]:::type
        d60[A facade onto the mainframe \n banking system]:::description
    end
    mainframeBankingSystemFacade:::internalComponent

    signInController--Uses-->securityComponent
    resetPasswordController--Uses-->securityComponent
    resetPasswordController--Uses-->emailComponent
    accountsSummaryController--Uses-->mainframeBankingSystemFacade
end

securityComponent--Reads from and \n writes to-->database
emailComponent--Sends email using-->emailSystem
mainframeBankingSystemFacade--Uses-->mainframeBankingSystem

%% Element type definitions

classDef person fill:#08427b
classDef internalContainer fill:#1168bd
classDef internalComponent fill:#4b9bea
classDef externalSystem fill:#999999

classDef type stroke-width:0px, color:#fff, fill:transparent, font-size:12px
classDef description stroke-width:0px, color:#fff, fill:transparent, font-size:13px
```

## Basic example

```plantuml
@startuml
Alice -> Bob: Authentication Request
Bob --> Alice: Authentication Response

Alice -> Bob: Another authentication Request
Alice <-- Bob: Another authentication Response
@enduml
```

## Declaring participant

```plantuml
@startuml
participant Participant as Foo
actor       Actor       as Foo1
boundary    Boundary    as Foo2
control     Control     as Foo3
entity      Entity      as Foo4
database    Database    as Foo5
collections Collections as Foo6
queue       Queue       as Foo7
Foo -> Foo1 : To actor 
Foo -> Foo2 : To boundary
Foo -> Foo3 : To control
Foo -> Foo4 : To entity
Foo -> Foo5 : To database
Foo -> Foo6 : To collections
Foo -> Foo7: To queue
@enduml
```

### Rename a participant using the `as` keyword

```plantuml
@startuml
actor Bob #red
' The only difference between actor
'and participant is the drawing
participant Alice
participant "I have a really\nlong name" as L #99FF99
/' You can also declare:
   participant L as "I have a really\nlong name"  #99FF99
  '/

Alice->Bob: Authentication Request
Bob->Alice: Authentication Response
Bob->L: Log transaction
@enduml
```

### `order` keyword to customize the display order of participants

```plantuml
@startuml
participant Last order 30
participant Middle order 20
participant First order 10
@enduml
```

## Declaring participant on multiline

```plantuml
@startuml
participant Participant [
    =Title
    ----
    ""SubTitle""
]

participant Bob

Participant -> Bob
@enduml
```

## Use non-letters in participants

```plantuml
@startuml
Alice -> "Bob()" : Hello
"Bob()" -> "This is very\nlong" as Long
' You can also declare:
' "Bob()" -> Long as "This is very\nlong"
Long --> "Bob()" : ok
@enduml
```

## Message to Self

## Message to Self 1

```plantuml
@startuml
Alice -> Alice: This is a signal to self.\nIt also demonstrates\nmultiline \ntext
@enduml
```

## Message to Self 2

```plantuml
@startuml
Alice <- Alice: This is a signal to self.\nIt also demonstrates\nmultiline \ntext
@enduml
```

## Text alignment

```plantuml
@startuml
skinparam sequenceMessageAlign right
Bob -> Alice : Request
Alice -> Bob : Response
@enduml
```

You can put the text of the response message below the arrow, with the skinparam responseMessageBelowArrow true command.

```plantuml
@startuml
skinparam responseMessageBelowArrow true
Bob -> Alice : hello
Alice -> Bob : ok
@enduml
```

## Change arrow style

```plantuml
@startuml
Bob ->x Alice
Bob -> Alice
Bob ->> Alice
Bob -\ Alice
Bob \\- Alice
Bob //-- Alice

Bob ->o Alice
Bob o\\-- Alice

Bob <-> Alice
Bob <->o Alice
@enduml
```

## Change arrow color

```plantuml
@startuml
Bob -[#red]> Alice : hello
Alice -[#0000FF]->Bob : ok
@enduml
```

## Message sequence numbering

```plantuml
@startuml
autonumber
Bob -> Alice : Authentication Request
Bob <- Alice : Authentication Response
@enduml
```

You can specify a startnumber with autonumber `<start>` , and also an increment with autonumber `<start>` `<increment>`.

```plantuml
@startuml
autonumber
Bob -> Alice : Authentication Request
Bob <- Alice : Authentication Response

autonumber 15
Bob -> Alice : Another authentication Request
Bob <- Alice : Another authentication Response

autonumber 40 10
Bob -> Alice : Yet another authentication Request
Bob <- Alice : Yet another authentication Response

@enduml
```

You can specify a format for your number by using between double-quote.
The formatting is done with the Java class DecimalFormat (0 means digit, # means digit and zero if absent).
You can use some html tag in the format.

```plantuml
@startuml
autonumber "<b>[000]"
Bob -> Alice : Authentication Request
Bob <- Alice : Authentication Response

autonumber 15 "<b>(<u>##</u>)"
Bob -> Alice : Another authentication Request
Bob <- Alice : Another authentication Response

autonumber 40 10 "<font color=red><b>Message 0  "
Bob -> Alice : Yet another authentication Request
Bob <- Alice : Yet another authentication Response

@enduml
```

You can also use autonumber stop and autonumber resume `<increment>` `<format>` to respectively pause and resume automatic numbering.

```plantuml
@startuml
autonumber 10 10 "<b>[000]"
Bob -> Alice : Authentication Request
Bob <- Alice : Authentication Response

autonumber stop
Bob -> Alice : dummy

autonumber resume "<font color=red><b>Message 0  "
Bob -> Alice : Yet another authentication Request
Bob <- Alice : Yet another authentication Response

autonumber stop
Bob -> Alice : dummy

autonumber resume 1 "<font color=blue><b>Message 0  "
Bob -> Alice : Yet another authentication Request
Bob <- Alice : Yet another authentication Response
@enduml
```

To increment the first digit, use: autonumber inc A. To increment the second digit, use: autonumber inc B.

```plantuml
@startuml
autonumber 1.1.1
Alice -> Bob: Authentication request
Bob --> Alice: Response

autonumber inc A
'Now we have 2.1.1
Alice -> Bob: Another authentication request
Bob --> Alice: Response

autonumber inc B
'Now we have 2.2.1
Alice -> Bob: Another authentication request
Bob --> Alice: Response

autonumber inc A
'Now we have 3.1.1
Alice -> Bob: Another authentication request
autonumber inc B
'Now we have 3.2.1
Bob --> Alice: Response
@enduml
```

You can also use the value of autonumber with the `autonumber` variable:

```plantuml
@startuml
autonumber 10
Alice -> Bob
note right
  the <U+0025>autonumber<U+0025> works everywhere.
  Here, its value is ** %autonumber% **
end note
Bob --> Alice: //This is the response %autonumber%//
@enduml
```

## Page Title, Header and Footer

The title keyword is used to add a title to the page.
Pages can display headers and footers using header and footer.

```plantuml
@startuml

header Page Header
footer Page %page% of %lastpage%

title Example Title

Alice -> Bob : message 1
Alice -> Bob : message 2

@enduml
```

## Splitting diagrams

```plantuml
@startuml

Alice -> Bob : message 1
Alice -> Bob : message 2

newpage

Alice -> Bob : message 3
Alice -> Bob : message 4

newpage A title for the\nlast page

Alice -> Bob : message 5
Alice -> Bob : message 6
@enduml
```

## Grouping message

```plantuml
@startuml
Alice -> Bob: Authentication Request

alt successful case

    Bob -> Alice: Authentication Accepted

else some kind of failure

    Bob -> Alice: Authentication Failure
    group My own label
    Alice -> Log : Log attack start
        loop 1000 times
            Alice -> Bob: DNS Attack
        end
    Alice -> Log : Log attack end
    end

else Another type of failure

   Bob -> Alice: Please repeat

end
@enduml
```

## Secondary group label

```plantuml
@startuml
Alice -> Bob: Authentication Request
Bob -> Alice: Authentication Failure
group My own label [My own label 2]
    Alice -> Log : Log attack start
    loop 1000 times
        Alice -> Bob: DNS Attack
    end
    Alice -> Log : Log attack end
end
@enduml
```

## Notes on messages

```plantuml
@startuml
Alice->Bob : hello
note left: this is a first note

Bob->Alice : ok
note right: this is another note

Bob->Bob : I am thinking
note left
a note
can also be defined
on several lines
end note
@enduml
```

## Some other notes

```plantuml
@startuml
participant Alice
participant Bob
note left of Alice #aqua
This is displayed
left of Alice.
end note

note right of Alice: This is displayed right of Alice.

note over Alice: This is displayed over Alice.

note over Alice, Bob #FFAAAA: This is displayed\n over Bob and Alice.

note over Bob, Alice
This is yet another
example of
a long note.
end note
@enduml
```

## Changing notes shape [hnote, rnote]

```plantuml
@startuml
caller -> server : conReq
hnote over caller : idle
caller <- server : conConf
rnote over server
 "r" as rectangle
 "h" as hexagon
endrnote
rnote over server
 this is
 on several
 lines
endrnote
hnote over caller
 this is
 on several
 lines
endhnote
@enduml
```

## Note over all participants [across]

```plantuml
@startuml
Alice->Bob:m1
Bob->Charlie:m2
note over Alice, Charlie: Old method for note over all part. with:\n ""note over //FirstPart, LastPart//"".
note across: New method with:\n""note across""
Bob->Alice
hnote across:Note across all part.
@enduml
```

## Several notes aligned at the same level [/]

You can make several notes aligned at the same level, with the syntax /:
without /(by default, the notes are not aligned):

```plantuml
@startuml
note over Alice : initial state of Alice
note over Bob : initial state of Bob
Bob -> Alice : hello
@enduml
```

with /(the notes are aligned):

```plantuml
@startuml
note over Alice : initial state of Alice
/ note over Bob : initial state of Bob
Bob -> Alice : hello
@enduml
```

## Creole and HTML

```plantuml
@startuml
participant Alice
participant "The **Famous** Bob" as Bob

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

Alice -> Bob : A //well formatted// message
note right of Alice
 This is <back:cadetblue><size:18>displayed</size></back>
 __left of__ Alice.
end note
note left of Bob
 <u:red>This</u> is <color #118888>displayed</color>
 **<color purple>left of</color> <s:red>Alice</strike> Bob**.
end note
note over Alice, Bob
 <w:#FF33FF>This is hosted</w> by <img /Users/siarhei/idea-wrs/writerside-stardust/test-data-nebula/stardust-sandbox/input/sandbox/images/JB_Writerside_logo.png>
end note
@enduml
```

## Divider or separator

```plantuml
@startuml

== Initialization ==

Alice -> Bob: Authentication Request
Bob --> Alice: Authentication Response

== Repetition ==

Alice -> Bob: Another authentication Request
Alice <-- Bob: another authentication Response

@enduml
```

## Reference

```plantuml
@startuml
participant Alice
actor Bob

ref over Alice, Bob : init

Alice -> Bob : hello

ref over Bob
  This can be on
  several lines
end ref
@enduml
```

## Delay

```plantuml
@startuml

Alice -> Bob: Authentication Request
...
Bob --> Alice: Authentication Response
...5 minutes later...
Bob --> Alice: Good Bye !

@enduml
```

## Text wrapping

```plantuml
@startuml
skinparam maxMessageSize 50
participant a
participant b
a -> b :this\nis\nmanually\ndone
a -> b :this is a very long message on several words
@enduml
```

## Space

```plantuml
@startuml

Alice -> Bob: message 1
Bob --> Alice: ok
|||
Alice -> Bob: message 2
Bob --> Alice: ok
||45||
Alice -> Bob: message 3
Bob --> Alice: ok

@enduml
```

## Lifeline Activation and Destruction

```plantuml
@startuml
participant User

User -> A: DoWork
activate A

A -> B: << createRequest >>
activate B

B -> C: DoWork
activate C
C --> B: WorkDone
destroy C

B --> A: RequestCreated
deactivate B

A -> User: Done
deactivate A

@enduml
```

Nested lifeline can be used, and it is possible to add a color on the lifeline.

```plantuml
@startuml
participant User

User -> A: DoWork
activate A #FFBBBB

A -> A: Internal call
activate A #DarkSalmon

A -> B: << createRequest >>
activate B

B --> A: RequestCreated
deactivate B
deactivate A
A -> User: Done
deactivate A

@enduml
```

Autoactivation is possible and works with the return keywords:

```plantuml
@startuml
autoactivate on
alice -> bob : hello
bob -> bob : self call
bill -> bob #005500 : hello from thread 2
bob -> george ** : create
return done in thread 2
return rc
bob -> george !! : delete
return success

@enduml
```

## Return

```plantuml
@startuml
Bob -> Alice : hello
activate Alice
Alice -> Alice : some action
return bye
@enduml
```

## Participant creation

```plantuml
@startuml
Bob -> Alice : hello

create Other
Alice -> Other : new

create control String
Alice -> String
note right : You can also put notes!

Alice --> Bob : ok

@enduml
```

## Shortcut syntax for activation, deactivation, creation

```plantuml
@startuml
alice -> bob ++ : hello
bob -> bob ++ : self call
bob -> bib ++  #005500 : hello
bob -> george ** : create
return done
return rc
bob -> george !! : delete
return success
@enduml
```

Then you can mix activation and deactivation, on same line:

```plantuml
@startuml
alice   ->  bob     ++   : hello1
bob     ->  charlie --++ : hello2
charlie --> alice   --   : ok
@enduml
```

```plantuml
@startuml
alice -> bob   --++ #gold: hello
bob   -> alice --++ #gold: you too
alice -> bob   --: step1
alice -> bob   : step2
@enduml
```

## Incoming and outgoing messages

```plantuml
@startuml
[-> A: DoWork

activate A

A -> A: Internal call
activate A

A ->] : << createRequest >>

A<--] : RequestCreated
deactivate A
[<- A: Done
deactivate A
@enduml
```

You can also have the following syntax:
```plantuml
@startuml
participant Alice
participant Bob #lightblue
Alice -> Bob
Bob -> Carol
...
[-> Bob
[o-> Bob
[o->o Bob
[x-> Bob
...
[<- Bob
[x<- Bob
...
Bob ->]
Bob ->o]
Bob o->o]
Bob ->x]
...
Bob <-]
Bob x<-]

@enduml
```
## Short arrows for incoming and outgoing messages

```plantuml
@startuml
?-> Alice    : ""?->""\n**short** to actor1
[-> Alice    : ""[->""\n**from start** to actor1
[-> Bob      : ""[->""\n**from start** to actor2
?-> Bob      : ""?->""\n**short** to actor2
Alice ->]    : ""->]""\nfrom actor1 **to end**
Alice ->?    : ""->?""\n**short** from actor1
Alice -> Bob : ""->"" \nfrom actor1 to actor2
@enduml
```

## Anchors and Duration

```plantuml
@startuml
!pragma teoz true

{start} Alice -> Bob : start doing things during duration
Bob -> Max : something
Max -> Bob : something else
{end} Bob -> Alice : finish

{start} <-> {end} : some time

@enduml
```

## Stereotypes and Spots

```plantuml
@startuml

participant "Famous Bob" as Bob << Generated >>
participant Alice << (C,#ADD1B2) Testable >>

Bob->Alice: First message

@enduml
```

By default, the guillemet character is used to display the stereotype. You can change this behavious using the skinparam guillemet:

```plantuml
@startuml

skinparam guillemet false
participant "Famous Bob" as Bob << Generated >>
participant Alice << (C,#ADD1B2) Testable >>

Bob->Alice: First message

@enduml
```

```plantuml
@startuml

participant Bob << (C,#ADD1B2) >>
participant Alice << (C,#ADD1B2) >>

Bob->Alice: First message

@enduml
```

## More information on titles

```plantuml
@startuml

title __Simple__ **communication** example

Alice -> Bob: Authentication Request
Bob -> Alice: Authentication Response

@enduml
```

You can add newline using \n in the title description.
```plantuml
@startuml

title __Simple__ communication example\non several lines

Alice -> Bob: Authentication Request
Bob -> Alice: Authentication Response

@enduml
```

You can also define title on several lines using title and end title keywords.
```plantuml
@startuml

title
 <u>Simple</u> communication example
 on <i>several</i> lines and using <font color=red>html</font>
 This is hosted by <img:/Users/siarhei/idea-wrs/writerside-stardust/test-data-nebula/stardust-sandbox/input/sandbox/images/JB_Writerside_logo.png>
end title

Alice -> Bob: Authentication Request
Bob -> Alice: Authentication Response

@enduml
```

## Participants encompass

You can add an optional title or a optional background color, after the box keyword.
```plantuml
@startuml

box "Internal Service" #LightBlue
participant Bob
participant Alice
end box
participant Other

Bob -> Alice : hello
Alice -> Other : hello

@enduml
```

It is also possible to nest boxes - to draw a box within a box - when using the teoz rendering engine, for example:
```plantuml
@startuml

!pragma teoz true
box "Internal Service" #LightBlue
participant Bob
box "Subteam"
participant Alice
participant John
end box

end box
participant Other

Bob -> Alice : hello
Alice -> John : hello
John -> Other: Hello

@enduml
```

## Removing Foot Boxes

```plantuml
@startuml

hide footbox
title Foot Box removed

Alice -> Bob: Authentication Request
Bob --> Alice: Authentication Response

@enduml
```

## Skinparam

```plantuml
@startuml
skinparam sequenceArrowThickness 2
skinparam roundcorner 20
skinparam maxmessagesize 60
skinparam sequenceParticipant underline

actor User
participant "First Class" as A
participant "Second Class" as B
participant "Last Class" as C

User -> A: DoWork
activate A

A -> B: Create Request
activate B

B -> C: DoWork
activate C
C --> B: WorkDone
destroy C

B --> A: Request Created
deactivate B

A --> User: Done
deactivate A

@enduml
```

```plantuml
@startuml
skinparam backgroundColor #EEEBDC
skinparam handwritten true

skinparam sequence {
ArrowColor DeepSkyBlue
ActorBorderColor DeepSkyBlue
LifeLineBorderColor blue
LifeLineBackgroundColor #A9DCDF

ParticipantBorderColor DeepSkyBlue
ParticipantBackgroundColor DodgerBlue
ParticipantFontName Impact
ParticipantFontSize 17
ParticipantFontColor #A9DCDF

ActorBackgroundColor aqua
ActorFontColor DeepSkyBlue
ActorFontSize 17
ActorFontName Aapex
}

actor User
participant "First Class" as A
participant "Second Class" as B
participant "Last Class" as C

User -> A: DoWork
activate A

A -> B: Create Request
activate B

B -> C: DoWork
activate C
C --> B: WorkDone
destroy C

B --> A: Request Created
deactivate B

A --> User: Done
deactivate A

@enduml
```

## Changing padding

```plantuml
@startuml
skinparam ParticipantPadding 20
skinparam BoxPadding 10

box "Foo1"
participant Alice1
participant Alice2
end box
box "Foo2"
participant Bob1
participant Bob2
end box
Alice1 -> Bob1 : hello
Alice1 -> Out : out
@enduml
```

## Appendix

### Examples of all arrow type

```plantuml
@startuml
participant Alice as a
participant Bob   as b
a ->     b : ""->   ""
a ->>    b : ""->>  ""
a -\     b : ""-\   ""
a -\\    b : ""-\\\\""
a -/     b : ""-/   ""
a -//    b : ""-//  ""
a ->x    b : ""->x  ""
a x->    b : ""x->  ""
a o->    b : ""o->  ""
a ->o    b : ""->o  ""
a o->o   b : ""o->o ""
a <->    b : ""<->  ""
a o<->o  b : ""o<->o""
a x<->x  b : ""x<->x""
a ->>o   b : ""->>o ""
a -\o    b : ""-\o  ""
a -\\o   b : ""-\\\\o""
a -/o    b : ""-/o  ""
a -//o   b : ""-//o ""
a x->o   b : ""x->o ""
@enduml
```

### Itself arrow

```plantuml
@startuml
participant Alice as a
participant Bob   as b
a ->     a : ""->   ""
a ->>    a : ""->>  ""
a -\     a : ""-\   ""
a -\\    a : ""-\\\\""
a -/     a : ""-/   ""
a -//    a : ""-//  ""
a ->x    a : ""->x  ""
a x->    a : ""x->  ""
a o->    a : ""o->  ""
a ->o    a : ""->o  ""
a o->o   a : ""o->o ""
a <->    a : ""<->  ""
a o<->o  a : ""o<->o""
a x<->x  a : ""x<->x""
a ->>o   a : ""->>o ""
a -\o    a : ""-\o  ""
a -\\o   a : ""-\\\\o""
a -/o    a : ""-/o  ""
a -//o   a : ""-//o ""
a x->o   a : ""x->o ""
@enduml
```

### Incoming messages (with '[')

```plantuml
@startuml
participant Alice as a
participant Bob   as b
[->      b : ""[->   ""
[->>     b : ""[->>  ""
[-\      b : ""[-\   ""
[-\\     b : ""[-\\\\""
[-/      b : ""[-/   ""
[-//     b : ""[-//  ""
[->x     b : ""[->x  ""
[x->     b : ""[x->  ""
[o->     b : ""[o->  ""
[->o     b : ""[->o  ""
[o->o    b : ""[o->o ""
[<->     b : ""[<->  ""
[o<->o   b : ""[o<->o""
[x<->x   b : ""[x<->x""
[->>o    b : ""[->>o ""
[-\o     b : ""[-\o  ""
[-\\o    b : ""[-\\\\o""
[-/o     b : ""[-/o  ""
[-//o    b : ""[-//o ""
[x->o    b : ""[x->o ""
@enduml
```

### Outgoing messages (with ']')

```plantuml
@startuml
participant Alice as a
participant Bob   as b
a ->]      : ""->]   ""
a ->>]     : ""->>]  ""
a -\]      : ""-\]   ""
a -\\]     : ""-\\\\]""
a -/]      : ""-/]   ""
a -//]     : ""-//]  ""
a ->x]     : ""->x]  ""
a x->]     : ""x->]  ""
a o->]     : ""o->]  ""
a ->o]     : ""->o]  ""
a o->o]    : ""o->o] ""
a <->]     : ""<->]  ""
a o<->o]   : ""o<->o]""
a x<->x]   : ""x<->x]""
a ->>o]    : ""->>o] ""
a -\o]     : ""-\o]  ""
a -\\o]    : ""-\\\\o]""
a -/o]     : ""-/o]  ""
a -//o]    : ""-//o] ""
a x->o]    : ""x->o] ""
@enduml
```

### Short incoming (with '?')

```plantuml
@startuml
participant Alice as a
participant Bob   as b
a ->     b : //Long long label//
?->      b : ""?->   ""
?->>     b : ""?->>  ""
?-\      b : ""?-\   ""
?-\\     b : ""?-\\\\""
?-/      b : ""?-/   ""
?-//     b : ""?-//  ""
?->x     b : ""?->x  ""
?x->     b : ""?x->  ""
?o->     b : ""?o->  ""
?->o     b : ""?->o  ""
?o->o    b : ""?o->o ""
?<->     b : ""?<->  ""
?o<->o   b : ""?o<->o""
?x<->x   b : ""?x<->x""
?->>o    b : ""?->>o ""
?-\o     b : ""?-\o  ""
?-\\o    b : ""?-\\\\o ""
?-/o     b : ""?-/o  ""
?-//o    b : ""?-//o ""
?x->o    b : ""?x->o ""
@enduml
```

### Short outgoing (with '?')

```plantuml
@startuml
participant Alice as a
participant Bob   as b
a ->     b : //Long long label//
a ->?      : ""->?   ""
a ->>?     : ""->>?  ""
a -\?      : ""-\?   ""
a -\\?     : ""-\\\\?""
a -/?      : ""-/?   ""
a -//?     : ""-//?  ""
a ->x?     : ""->x?  ""
a x->?     : ""x->?  ""
a o->?     : ""o->?  ""
a ->o?     : ""->o?  ""
a o->o?    : ""o->o? ""
a <->?     : ""<->?  ""
a o<->o?   : ""o<->o?""
a x<->x?   : ""x<->x?""
a ->>o?    : ""->>o? ""
a -\o?     : ""-\o?  ""
a -\\o?    : ""-\\\\o?""
a -/o?     : ""-/o?  ""
a -//o?    : ""-//o? ""
a x->o?    : ""x->o? ""
@enduml
```

## Specific SkinParameter

### By default

```plantuml
@startuml
Bob -> Alice : hello
Alice -> Bob : ok
@enduml
```

### LifelineStrategy

#### Nosolid (by default)

```plantuml
@startuml
skinparam lifelineStrategy nosolid
Bob -> Alice : hello
Alice -> Bob : ok
@enduml
```

#### Solid

```plantuml
@startuml
skinparam lifelineStrategy solid
Bob -> Alice : hello
Alice -> Bob : ok
@enduml
```

### Style strictuml

```plantuml
@startuml
skinparam style strictuml
Bob -> Alice : hello
Alice -> Bob : ok
@enduml
```

## Hide unlinked participant

By default, all participants are displayed.

```plantuml
@startuml
participant Alice
participant Bob
participant Carol

Alice -> Bob : hello
@enduml
```

But you can hide unlinked participant.

```plantuml
@startuml
hide unlinked
participant Alice
participant Bob
participant Carol

Alice -> Bob : hello
@enduml
```


## Color a group message

```plantuml
@startuml
Alice -> Bob: Authentication Request
alt#Gold #LightBlue Successful case
    Bob -> Alice: Authentication Accepted
else #Pink Failure
    Bob -> Alice: Authentication Rejected
end
@enduml
```

## Mainframe

```plantuml
@startuml
mainframe This is a **mainframe**
Alice->Bob : Hello
@enduml
```

## Slanted or odd arrows

```plantuml
@startuml
A ->(10) B: text 10
B ->(10) A: text 10

A ->(10) B: text 10
A (10)<- B: text 10
@enduml
```

```plantuml
@startuml
A ->(40) B++: Rq
B -->(20) A--: Rs
@enduml
```

```plantuml
@startuml
!pragma teoz true
A ->(50) C: Starts\nwhen 'B' sends
& B ->(25) C: \nBut B's message\n arrives before A's
@enduml
```

```plantuml
@startuml
!pragma teoz true

S1 ->(30) S2: msg 1\n
& S2 ->(30) S1: msg 2

note left S1: msg\nS2 to S1
& note right S2: msg\nS1 to S2
@enduml
```

## Participants

```plantuml
@startuml

skin rose

title "Participants - Sequence Diagram"

actor User
boundary "Web GUI" as GUI
control "Shopping Cart" as SC
entity Widget
database Widgets

@enduml
```

## Messages

```plantuml
@startuml

skin rose

title "Messages - Sequence Diagram"

actor User
boundary "Web GUI" as GUI
control "Shopping Cart" as SC
entity Widget
database Widgets

User -> GUI : To boundary
GUI -> SC : To control
SC -> Widget : To entity
Widget -> Widgets : To database

@enduml
```

## Comments


```plantuml
@startuml

skin rose

title "Comments - Sequence Diagram"

'This is a single line comment

/'
This is a multi-
line comment
'/

actor User
boundary "Web GUI" as GUI
control "Shopping Cart" as SC
entity Widget
database Widgets

User -> GUI : To boundary
GUI -> SC : To control
SC -> Widget : To entity
Widget -> Widgets : To database

@enduml
```
