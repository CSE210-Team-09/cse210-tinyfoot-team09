document.addEventListener('DOMContentLoaded', init);

function getFootnotes() {
    return document.querySelectorAll('sup[id^="fnref:"] a[rel="footnote"]');
}

function getFootnoteContent(footnoteId) {
    return document.getElementById(footnoteId).querySelector('p').innerHTML;
}

function createPopup(content) {
    const popup = document.createElement('span');
    popup.className = 'footnote-popup';
    popup.innerHTML = content;
    popup.style.display = 'none';
    return popup;
}

function positionPopup(footnote, popup) {
    const footnoteRect = footnote.getBoundingClientRect();
    const popupRect = popup.getBoundingClientRect();
    popup.style.left = `${(footnoteRect.width / 2) - (popupRect.width / 2)}px`;
}

function addEventListeners(footnote, popup) {
    footnote.addEventListener('mouseover', () => {
        popup.style.display = 'block';
        positionPopup(footnote, popup);
    });

    footnote.addEventListener('mouseout', () => {
        popup.style.display = 'none';
    });
}

function setupFootnote(footnote) {
    const footnoteId = footnote.getAttribute('href').slice(1);
    const footnoteContent = getFootnoteContent(footnoteId);
    const popup = createPopup(footnoteContent);

    footnote.parentNode.appendChild(popup);
    addEventListeners(footnote, popup);
}

function init() {
    const footnotes = getFootnotes();
    footnotes.forEach(setupFootnote);
}