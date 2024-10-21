// Add an event listener to the document to run the init function once the DOM is fully loaded
document.addEventListener('DOMContentLoaded', init);



// Initialization function to set up all footnotes
function init() {
    // Get all footnotes in the document
    const footnotes = get_footnotes();
    // Set up each footnote with a popup
    footnotes.forEach(setup_footnote);
}

// Function to set up a footnote with a popup
function setup_footnote(footnote) {
    // Get the id of the footnote from its href attribute (excluding the leading '#')
    const footnote_id = footnote.getAttribute('href').slice(1);
    // Get the content of the footnote
    const footnote_content = get_footnote_content(footnote_id);
    // Create a popup with the footnote content
    const popup = create_popup(footnote_content);

    // Append the popup to the footnote's parent element
    footnote.parentNode.appendChild(popup);

    // Show the popup when the footnote is hovered over
    footnote.addEventListener('mouseover', () => {
        popup.style.display = 'block';
        position_popup(footnote, popup);
    });

    // Hide the popup when the mouse leaves the footnote
    footnote.addEventListener('mouseout', () => {
        popup.style.display = 'none';
    });
}

// Function to get all footnotes in the document
function get_footnotes() {
    // Select all <sup> elements with an id starting with "fnref:" and containing a <a> with rel="footnote"
    return document.querySelectorAll('sup[id^="fnref:"] a[rel="footnote"]');
}

// Function to get the content of a footnote by its id
function get_footnote_content(footnote_id) {
    // Find the element with the given id and get the inner HTML of its first <p> child
    return document.getElementById(footnote_id).querySelector('p').innerHTML;
}

// Function to create a popup element with the given content
function create_popup(content) {
    // Create a new <span> element
    const popup = document.createElement('span');
    // Set the class name for styling
    popup.className = 'footnote-popup';
    // Set the inner HTML to the provided content
    popup.innerHTML = content;
    // Initially hide the popup
    popup.style.display = 'none';
    return popup;
}

// Function to position the popup relative to the footnote
function position_popup(footnote, popup) {
    // Get the bounding rectangles of the footnote and popup elements
    const footnote_rect = footnote.getBoundingClientRect();
    const popup_rect = popup.getBoundingClientRect();
    // Center the popup horizontally relative to the footnote
    popup.style.left = `${(footnote_rect.width / 2) - (popup_rect.width / 2)}px`;
}