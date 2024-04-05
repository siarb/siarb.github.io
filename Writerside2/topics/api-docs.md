# API Overview

![Test](light.png){width="296"}

<video src="goLand.mp4"/>

<img src="duck.gif" alt="Duck"/>

### IntelliJ Platform 2019.3

`com.intellij.codeInsight.TailType.getLocalCodeStyleSettings(Editor, int)` method removed
: Use `com.intellij.psi.codeStyle.CommonCodeStyleSettings.getLocalCodeStyleSettings(Editor, int)` instead.


<deflist>
    <def>
        <title><code>com.intellij.codeInsight.TailType.getLocalCodeStyleSettings(Editor, int)</code> method removed
        </title>
        <p>Use <code>com.intellij.psi.codeStyle.CommonCodeStyleSettings.getLocalCodeStyleSettings(Editor,
            int)</code> instead.</p>
    </def>
</deflist>

<!-- This document provides an introduction into your API. -->

## Introduction

Provide a brief introduction to the API, explaining its purpose and scope.

## What you can do using `<API name>`

Provide some simple usage examples to help users get started quickly.

## Authentication

Explain the authentication methods and requirements for accessing the API.

## Base URL

Specify the base URL for making API requests.

If you have more than one environment (production and sandbox) explain the difference and provide links to both.

## Rate Limiting

Explain any rate limiting policies, if applicable.

## Error Handling

Describe the API's error response format and provide common error codes and their meanings.

## Versioning

Explain how the API versioning works and how to specify the desired API version in requests.

<seealso>

<!--List any additional resources, such as tutorials or guides, that can help users understand and use the API effectively.-->

</seealso>
