# cse210-tinyfoot-team9

# Footnote Functionality

## How It Works

### Footnote References (`.footnote-ref`)

- These are the clickable elements in your main content, styled like typical footnote superscripts.
- The `data-footnote` attribute connects the reference to the actual footnote content.

### Footnote Content (`.footnote`)

- The actual content of the footnote is initially hidden (`display: none;`).
- When a footnote reference is clicked, the corresponding content is displayed.

### JavaScript

- The `DOMContentLoaded` event ensures the script runs after the DOM is fully loaded.
- When a footnote reference is clicked, its `data-footnote` value is used to find the corresponding footnote content (e.g., `#footnote-1` for reference 1).
- The clicked footnote is displayed, and any previously open footnote is hidden.
