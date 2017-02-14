# Twofold ![status: Prototype](https://img.shields.io/badge/status-prototype-orange.svg)

Twofold is a component made up of two parts: a heading and details. A Twofold is expandable and collapsible. Initially, a Twofold shows summary information and can be subsequently expanded to show more detailed information.

A Twofold is the inner element in an Accordion.


## Example

```javascript
<Accordion variant="multi">
  <Twofold heading="some short summary" subheading="more short summary">details here</Twofold>
  <Twofold heading="pithy title" subheading="I have more info" active>details here</Twofold>
  <Twofold heading="pick me" subheading="the skinny" active>details here</Twofold>
</Accordion>
```

## Try it
_an embedded Codepen here_

## Properties

| Name | Type | Description |
| --- | --- | --- | --- |
| `active` | `boolean` | If present, Twofold is open.
| `heading` | `string` | The contents of the heading. Text only(?).
| `subheading` | `string` | The contents of the subheading. Text only(?).
| `mod` | `string|Array<string>` | Apply custom mods from the theme on the Twofold.

##Theme

| Name | Description |
| ---  | ----------- |
| `twofold` | Required. Used to style the root element. |
| `detail` | Required. Used to hide the details.|
| `active` | Required. Used to style the details upon expansion.|
| `header` | Used to style the header area. |
| `heading` | Used to style the main summary/header. |
| `subheading` | Used to style subheadings within the summary/header area.|
| `closedIcon` | Used to style the closed icon.|
| `openIcon` | Used to style the open icon.|