document.addEventListener('DOMContentLoaded', () => {
    const footnotes = document.querySelectorAll('sup[id^="fnref:"] a[rel="footnote"]');

    footnotes.forEach(footnote => {
        const footnoteId = footnote.getAttribute('href').slice(1);
        const footnoteContent = document.getElementById(footnoteId).querySelector('p').innerHTML;

        const popup = document.createElement('span');
        popup.className = 'footnote-popup';
        popup.innerHTML = footnoteContent;
        popup.style.cssText = `
            display: none;
            position: absolute;
            background: white;
            border: 1px solid #333;
            padding: 10px;
            max-width: 300px;
            box-shadow: 2px 2px 5px rgba(0,0,0,0.1);
        `;

        footnote.parentNode.appendChild(popup);

        footnote.addEventListener('mouseover', () => {
            popup.style.display = 'block';
        });

        footnote.addEventListener('mouseout', () => {
            popup.style.display = 'none';
        });
    });
});

console.log('hello world');