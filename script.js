const sections = document.querySelectorAll('.section');
const navLinks = document.querySelectorAll('.nav-link');
const sidebar = document.getElementById('sidebar');
const menuToggle = document.getElementById('menu-toggle');

// Scroll spy
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 120;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + current) {
      link.classList.add('active');
    }
  });
});

// Mobile menu toggle
menuToggle.addEventListener('click', () => {
  sidebar.classList.toggle('open');
});

// Close menu when clicking a link (mobile)
navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    if (window.innerWidth <= 768) {
      sidebar.classList.remove('open');
    }
  });
});

document.querySelectorAll('.accordion-header').forEach((header) => {
  header.addEventListener('click', () => {
    const item = header.parentElement;
    const content = item.querySelector('.accordion-content');
    const icon = header.querySelector('.accordion-icon');

    if (content.style.maxHeight) {
      content.style.maxHeight = null;
      content.classList.remove('open');
      icon.textContent = '+';
    } else {
      content.style.maxHeight = content.scrollHeight + 'px';
      content.classList.add('open');
      icon.textContent = '−';
    }
  });
});
