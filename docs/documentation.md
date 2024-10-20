# Footnote Extension Documentation

## Overview

This JavaScript code provides an easy way to add interactive footnotes to your web pages. It detects footnote references in your HTML and creates hover-activated popups for each footnote, improving readability and user experience.

## Installation

1. Include the JavaScript file in your HTML:
   ```html
   <script src="./source/js/footnotes.js"></script>
   ```

2. Include the CSS file in your HTML:
   ```html
   <link rel="stylesheet" href="./source/style/view.css">
   ```

## Usage

### HTML Structure

Your HTML should follow this structure for footnotes:
## HTML Structure for Footnotes

### 1. Footnote References in the Main Text

```html
<sup id="fnref:1" class="tiny"><a href="#fn:1" rel="footnote">1</a></sup>
```

The Footnote References are determined by a `sup` tag with an `id` that begins with `fnref:` followed by a number, and a class name `tiny`. Inside the `sup` tag, there must be an `a` tag with `rel="footnote"` to denote which Footnote Content to link to. The `a` tag should link to another element in the DOM using a fragment identifier.

Breakdown of elements and attributes, all of which are required:

- `<sup>`: Superscript element. It renders text slightly above the normal line and in a smaller font.
- `id="fnref:1"`: A unique identifier for the footnote reference. The format is "fnref:" followed by a number.
- `class="tiny"`: A CSS class for styling the footnote reference.
- `<a>`: Anchor tag that creates the link to the footnote content.
  - `href="#fn:1"`: Links to the footnote content using a fragment identifier. The value should match the `id` of the corresponding footnote content (without the "#").
  - `rel="footnote"`: Indicates that the link is a footnote reference, which is used by the script to identify footnotes.

### 2. Footnote Content at the Bottom of the Page

```html
<div class="footnotes">
    <ol>
        <li id="fn:1">
            <p>Footnote content here. <a href="#fnref:1" rev="footnote"></a></p>
        </li>
    </ol>
</div>
```

The Footnote Content determines what the Footnote Reference should display on hover. Each Footnote Reference should link to one Footnote Content by ID. Each Footnote Content should have a paragraph, of which its `innerHTML` is used to determine the body of the popup displayed by the Footnote Reference.


There is no other required constraints on the Footnote content, but we have outlined an example above where footnotes are lists within a `div` with class name `footnotes`. Default behavior of the CSS is that any element with class name `footnotes` will be hidden, so only the popup will display the footnote content for a cleaner display.


Breakdown of elements and attributes:

- `<div class="footnotes">`: Container for all footnotes, allowing for easy styling and scripting.
- `<ol>`: Ordered list element. Creates a numbered list for the footnotes.
- `<li id="fn:1">`: List item for each footnote. The `id` should match the `href` in the corresponding Footnote Reference (without the "#"). (required)
- `<p>`: Paragraph containing the actual footnote content. (REQUIRED)
- `<a href="#fnref:1" rev="footnote"></a>`:
  - Creates a link back to the footnote reference in the main text.
  - `href="#fnref:1"`: Links back to the footnote reference using a fragment identifier.
  - `rev="footnote"`: Indicates that this is a reverse link for a footnote.

Required parts are marked with (REQUIRED)




## Customization

### Styling

You can customize the appearance of footnote popups by modifying the `.footnote-popup` CSS class. For example:

```css
.footnote-popup {
    width: 15vw;  /* Adjust popup width */
    background: #f0f0f0;  /* Change background color */
    font-size: 0.9em;  /* Adjust font size */
}
```

### Behavior Modification

To modify the behavior of the footnote extension, you can edit the `footnotes.js` file:

1. **Change popup trigger**:
   In the `setup_footnote` function, replace `'mouseover'` with your preferred event (e.g., `'click'`):

   ```javascript
   footnote.addEventListener('click', () => {
       popup.style.display = 'block';
       position_popup(footnote, popup);
   });
   ```

2. **Adjust popup positioning**:
   Modify the `position_popup` function to change how popups are positioned:

   ```javascript
   function position_popup(footnote, popup) {
       const footnote_rect = footnote.getBoundingClientRect();
       const popup_rect = popup.getBoundingClientRect();
       popup.style.left = `${footnote_rect.left}px`;
       popup.style.top = `${footnote_rect.bottom + 5}px`;
   }
   ```

3. **Change Footnote Reference selector**:
   If your HTML structure differs, update the `get_footnotes` function:

   ```javascript
   function get_footnotes() {
       return document.querySelectorAll('.your-custom-footnote-class');
   }
   ```

### Custom Popup Content

To customize the content of footnote popups, modify the `get_footnote_content` function:

```javascript
function get_footnote_content(footnote_id) {
    const footnoteElement = document.getElementById(footnote_id);
    const content = footnoteElement.querySelector('p').innerHTML;
    return `<h4>Footnote</h4>${content}`;  // Add a header to each popup
}
```
