// Basic interaction scripts for the portfolio

document.addEventListener('DOMContentLoaded', function(){

  // Contact form handler (demo)
  var form = document.getElementById('contactForm');
  if(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      var msg = document.getElementById('formMsg');
      if(msg) msg.textContent = 'Thanks for your message.';
      form.reset();
    });
  }

  // Smooth scroll for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(function(anchor){
    anchor.addEventListener('click', function(e){
      var target = document.querySelector(this.getAttribute('href'));
      if(target){
        e.preventDefault();
        target.scrollIntoView({behavior:'smooth', block:'start'});
      }
    });
  });

});

// Animate skill bars when they become visible
(function(){
  var skillsSection = document.getElementById('skills-progress');
  if(!skillsSection) return;

  var observer = new IntersectionObserver(function(entries, obs){
    entries.forEach(function(entry){
      if(entry.isIntersecting){
        var fills = skillsSection.querySelectorAll('.progress-fill');
        fills.forEach(function(el){
          var p = parseInt(el.getAttribute('data-percent') || 0, 10);
          // set width (will animate via CSS transition)
          el.style.width = p + '%';
          // optionally update visible percent text inside label (if you want)
          var label = el.closest('.skill-row')?.querySelector('.skill-percent');
          if(label) label.textContent = p + '%';
        });
        obs.unobserve(skillsSection);
      }
    });
  }, {threshold: 0.25});

  observer.observe(skillsSection);
})();
