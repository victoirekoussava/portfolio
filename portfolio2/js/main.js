// Custom cursor
  const cursor = document.getElementById('cursor');
  const cursorRing = document.getElementById('cursorRing');
  document.addEventListener('mousemove', e => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    setTimeout(() => {
      cursorRing.style.left = e.clientX + 'px';
      cursorRing.style.top = e.clientY + 'px';
    }, 80);
  });
  document.querySelectorAll('a, button, .skill-cat, .contact-card').forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursor.style.width = '30px'; cursor.style.height = '30px';
      cursor.style.background = 'var(--violet)';
    });
    el.addEventListener('mouseleave', () => {
      cursor.style.width = '16px'; cursor.style.height = '16px';
      cursor.style.background = 'var(--rose)';
    });
  });

  // Scroll reveal
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.reveal, .timeline-item, .formation-card').forEach(el => {
    revealObserver.observe(el);
  });

  // Skill bars animation
  const barObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.querySelectorAll('.bar-fill').forEach(bar => {
          const w = bar.dataset.width;
          setTimeout(() => { bar.style.width = w + '%'; }, 200);
        });
      }
    });
  }, { threshold: 0.3 });
  const softSection = document.querySelector('.soft-skills');
  if (softSection) barObserver.observe(softSection);

  // Stagger timeline items
  document.querySelectorAll('.timeline-item').forEach((item, i) => {
    item.style.transitionDelay = (i * 0.15) + 's';
  });

  // Scroll to top button
  const scrollBtn = document.getElementById('scrollTop');
  window.addEventListener('scroll', () => {
    scrollBtn.classList.toggle('show', window.scrollY > 500);
  });

  // Progress bar animation (appli coiffure)
  const progressObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.querySelectorAll('.progress-fill').forEach(bar => {
          const w = bar.dataset.width;
          setTimeout(() => { bar.style.width = w + '%'; }, 300);
        });
      }
    });
  }, { threshold: 0.3 });
  const wipSection = document.querySelector('.projet-wip');
  if (wipSection) progressObserver.observe(wipSection);

  // Stagger mini cards
  document.querySelectorAll('.mini-card').forEach((card, i) => {
    card.style.transitionDelay = (i * 0.12) + 's';
  });

  // Nav active link
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');
  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(s => {
      if (window.scrollY >= s.offsetTop - 120) current = s.id;
    });
    navLinks.forEach(a => {
      a.style.color = a.getAttribute('href') === '#' + current ? 'var(--violet)' : '';
    });
  });