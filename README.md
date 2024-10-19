# Tiny Footnote


## Usage

To use the Tiny Note Popup feature, follow the steps below:

1. **HTML Structure**:
   - Each clickable "tiny" element should have an ID that starts with `tiny` followed by a number.
   - Each corresponding footnote element should have an ID that starts with `foot` followed by the same number as the "tiny" element.
   
   For example, if the clickable element has the ID `tiny1`, the corresponding footnote should have the ID `foot1`.

2. **How It Works**:
   - When a "tiny" element is clicked, the script will display the matching footnote based on the number in the ID.
   - The footnote will appear directly below the "tiny" element.
   - **Important**: No matter what content is inside the element with an ID that starts with `tiny`, it will automatically be replaced by three dots (•••) for display purposes.
   
   Here's an example structure:
   
    ```html
   <span>Tiny Footnotes Example </span> <div id="tiny1"></div>
   <span>Tiny Footnotes Example2 </span><div id="tiny2"></div>

   <div>Tiny Footnotes Example3</div>
   <div id="tiny3"></div>

   <div id="foot1">This is footnote 1.</div>
   <div id="foot2">This is footnote 2.</div>
   <div id="foot3">This is footnote 3.</div>