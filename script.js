document.addEventListener('DOMContentLoaded', function() {
    const footnoteRefs = document.querySelectorAll('.footnote-ref');
  
    footnoteRefs.forEach(function(ref) {
      ref.addEventListener('click', function() {
        const footnoteId = 'footnote-' + ref.getAttribute('data-footnote');
        const footnote = document.getElementById(footnoteId);
        
        // Toggle the active state of the footnote
        if (footnote.classList.contains('active')) {
          footnote.classList.remove('active');
        } else {
          // Hide all other footnotes first
          document.querySelectorAll('.footnote').forEach(function(el) {
            el.classList.remove('active');
          });
  
          // Show the clicked footnote
          footnote.classList.add('active');
        }
      });
    });
  });
  