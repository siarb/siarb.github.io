# Nested TLDR MD

Start typing here...

<tldr id="tldr-bottom">
Topic-wide tldr.

Does not matter where you put it, it should go to the top (and no more than 1 block).

Is not possible to put topic-level TLDR after chapter, so I put it after the text.
</tldr>

<procedure id="procedure" title="Procedure">
<tldr>Some procedure facts.</tldr>
<step>This is the first step.</step>
</procedure>

## Non-collapsible chapter

This is the default chapter. This text must be displayed after tldr.

<tldr id="tldr-nin-collapsible-chapter">
Non-collapsible tldr.
</tldr>

## Collapsible expanded chapter {collapsible="true" default-state="expanded"}

<tldr>
Tldr in expanded chapter.
</tldr>

This is the chapter in expanded state.

## Collapsible collapsed chapter {collapsible="true" default-state="collapsed"}

<tldr>
Tldr in collapsed chapter.
</tldr>

This is the chapter in collapsed state.


## One more chapter

<tldr>
Tldr in one more chapter.
</tldr>

This is one more chapter.Just to check that every chapter has own corresponding tldr.

## Parent chapter NO own tldr {id="parent-chapter"}

This is a parent chapter. It must have NO tldr.

### Child chapter level 2 {id="child-chapter-2"}

Some useful info before tldr.

<tldr>
Child chapter-2 tldr.
</tldr>

Some useful info after tldr.

#### Child chapter level 3-1 {id="child-chapter-3-1"}

More facts chapter level 3-1.

<tldr>Child chapter-3-1 tldr.</tldr>

Info-3-1 chapter.


#### One more chapter level 3-2 {id="child-chapter-3-2"}
<tldr>Child chapter-3-2 tldr.</tldr>

Info-3-2 chapter.

More facts chapter level 3-2.

##### Nested chapter level 4 {id="child-chapter-4"}

<tldr>Child chapter-4 tldr.</tldr>

Info-4 chapter.

More facts chapter level 4.

###### Nested chapter level 5 {id="child-chapter-5"}
<tldr>Child chapter-5 tldr.</tldr>

Info-5 chapter.

More facts chapter level 5.

## Collapsed chapter with nested level-3 {id="parent-chapter-with-collapsed" collapsible="true" default-state="collapsed"}

Some useful level-1 info no tldr.

### Child collapsed chapter level-2 with no tldr {id="child-under-collapsed-no-tldr" collapsible="true" default-state="collapsed"}

Some useful level-2 info no tldr.

#### Child expanded chapter level 3-1 with tldr {id="child-under-collapsed-level-3-1"}

Some useful expanded level-3-1 chapter with tldr.

<tldr>Own tldr for expanded level-3-1 child chapter.</tldr>

#### Child collapsed chapter level 3-2 with tldr {id="child-under-collapsed-level-3-2" collapsible="true" default-state="collapsed"}
<tldr>Own tldr for collapsed level-3-2 child chapter.</tldr>

Some useful collapsed level-3-2 chapter with tldr.