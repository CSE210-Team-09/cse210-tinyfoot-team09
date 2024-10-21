# Decide on Implementation of TinyFoot#

## Problem

Our tool should be able to display text wrapped in a rectangle on hover of a piece of text.

- Should there be footnotes at the bottom?
- Should the footnotes be on hover or on click?
- How should the hoverable/clickable "footnote” appear?
- Should the user control what is displayed on the clickable button for the footnote?
- How should positioning of the popup be implemented?

## Considered Options

- Rounded rectangle with 3 dots (like bigfoot and littlefoot) that is clickable and displays textbox on click
- Superscript that links to footnotes at bottom of the pages
- Superscript that on hover displays rectangle without footnotes on the bottom of the page
- Implementation of popup through parent relative and child absolute, and using left/top property of CSS
- Generate popup through child of superscript
- Generate popup through moving footnotes div under the footnote button, and footnotes (bottom) are default not visible


## Decision Outcome

We chose to use superscripts with reference tags to the corresponding footnotes, and the popup will be generated on DOM load so that for each superscript, a popup (span) is created that includes the popup content, which is the innerHTML of the attached footnotes. The original bottom footnotes then are removed from display through CSS. On hover of the superscript, it will display the popup, and when not on hover, it will be set to be not displayed through CSS. We chose this implementation because we wanted to have footnotes that are visible in a paragraph, and have customizable superscripts instead of the rectangle with 3 dots. Positioning of the popup is made by setting the paragraph to relative and appending the span popup as an absolute child, using left property to position on the superscript. 


