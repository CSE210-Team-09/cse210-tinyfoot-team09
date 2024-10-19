document.addEventListener('DOMContentLoaded', () => {
    const footnotes = document.querySelectorAll('sup[id^="fnref:"] a[rel="footnote"]'); // select all the anchor tags that have a rel attribute with a value of footnote and an ID that starts with fnref:

    footnotes.forEach(footnote => {
        const footnoteId = footnote.getAttribute('href').slice(1); // removes # from the beginning of the string (ID)
        const footnoteContent = document.getElementById(footnoteId).querySelector('p').innerHTML; // gets the content of the footnote, which is stored in the paragraph tag's innerHTML

        const popup = document.createElement('span');
        popup.className = 'footnote-popup';
        popup.innerHTML = footnoteContent;

        // Add popup to the sup tag
        footnote.parentNode.appendChild(popup);


        footnote.addEventListener('mouseover', () => {
            popup.style.display = 'block';
            // Adjust vertical position to be below the footnote
            const footnoteRect = footnote.getBoundingClientRect();
            const popupRect = popup.getBoundingClientRect();
            popup.style.left = `${(footnoteRect.width / 2) - (popupRect.width / 2)}px`;
        });

        footnote.addEventListener('mouseout', () => {
            popup.style.display = 'none';
        });
    });
});