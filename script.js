document.addEventListener('DOMContentLoaded', () => {
  // Select all elements with an id starting with 'tiny'
  const tinies = document.querySelectorAll('[id^="tiny"]');

  tinies.forEach(tiny => {
    tiny.addEventListener('click', (event) => {
      // Hide all footnote popups that are currently visible
      document.querySelectorAll('[id^="foot"]').forEach(foot => {
        foot.style.display = 'none';
      });

      // Replace 'tiny' with 'foot' in the ID to find the matching footnote
      const noteId = tiny.id.replace('tiny', 'foot'); // e.g. tiny1 -> foot1
      const note = document.getElementById(noteId);

      // Display the matching footnote below the tiny button
      note.style.display = 'block';
      note.style.position = 'absolute';
      note.style.top = event.target.getBoundingClientRect().bottom + 'px'; //the top of the popup is the bottom of the button
      note.style.left = event.target.getBoundingClientRect().left + 'px'; //the left of the popup is stil the left of the button
    });
  });

  // Hide footnotes if clicking outside of a tiny button
  document.addEventListener('click', (event) => {
    if (!event.target.id.startsWith('tiny')) {
      document.querySelectorAll('[id^="foot"]').forEach(note => {
        note.style.display = 'none';
      });
    }
  });
});
