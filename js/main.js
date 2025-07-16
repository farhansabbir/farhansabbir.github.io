document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('print-cv').addEventListener('click', function() {
      const collapseElements = document.querySelectorAll('.collapse');
      collapseElements.forEach(function(element) {
        new bootstrap.Collapse(element, {
          toggle: false
        }).show();
      });
      
      // Allow time for sections to expand before printing
      setTimeout(function() {
        window.print();
      }, 500);
    });

    window.addEventListener('load', function() {
      const computedStyle = getComputedStyle(document.documentElement);
      const primaryColor = computedStyle.getPropertyValue('--primary-color').trim().substring(1);
      const activityGraph = document.getElementById('github-activity-graph');
      activityGraph.src = `https://github-readme-activity-graph.vercel.app/graph?username=farhansabbir&custom_title=Contributions%20Activity&bg_color=ffffff&color=${primaryColor}&line=${primaryColor}`;
    });

    const cardsToToggle = document.querySelectorAll('#experience .card, #testimonials .card');
    cardsToToggle.forEach(card => {
      const collapseEl = card.querySelector('.collapse');
      if (collapseEl) {
        const bsCollapse = new bootstrap.Collapse(collapseEl, {
          toggle: false
        });
        card.addEventListener('mouseenter', () => {
          bsCollapse.show();
        });
        card.addEventListener('mouseleave', () => {
          bsCollapse.hide();
        });
      }
    });
});
