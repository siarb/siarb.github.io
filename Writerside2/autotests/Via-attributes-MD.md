# Via attributes MD
{label="First,Second" annotations="β,EAP"}

## Expanded chapter with tag
{collapsible="true" default-state="expanded" label="DS"}

This is the chapter in expanded state.

## Collapsed chapter with tag
{collapsible="true" default-state="collapsed" label="Collapsed"}

This is the chapter in collapsed state.

## Expanded chapter with annotations
{collapsible="true" default-state="expanded" annotations="EAP,INT"}
<tldr>Some tldr facts</tldr>

This is the chapter in expanded state.

## Collapsed chapter with annotations
{collapsible="true" default-state="collapsed" annotations="EAP,INT"}
<tldr>Some tldr facts</tldr>

This is the chapter in collapsed state.

## Parent chapter {label="WWW" annotations="EAP"}

This is the parent chapter.

### Child chapter level 2 {label="DS" annotations="EAP,INT"}
<tldr>Tldr facts for child chapter level 2</tldr>

This is the level-2 chapter.

#### Chapter level 3
{annotations="EAP,INT" label="WWW"}

This is the level-3 chapter.

##### Chapter level 4
{label="DS" annotations="INT"}

This is the level-4 chapter.

###### Chapter level 5
{label="WWW" annotations="β"}

This is the level-4 chapter.

## Chapter with excluded filter {label="Excluded tag" annotations="Excluded annotation" instance="s"}

This is the chapter with excluded instance filter.

## Chapter with included filter {label="WWW" annotations="β,INT,EAP" instance="auto"}

This is the chapter with included instance filter.


## Chapter with two tags {label="DS,WWW"}

This is the chapter with two tags.