// Header Scroll-Logik: transparent → solid
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 8) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// Hamburger-Menü für mobile
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.getElementById('nav-links');
navToggle.addEventListener('click', function() {
  const expanded = navLinks.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', expanded);
});
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    navToggle.setAttribute('aria-expanded', false);
  });
});

// Aktiver Nav-Link beim Scrollen
const navLinksEls = document.querySelectorAll('.nav-link');
const sections = ['hero', 'leistungen', 'beispiele', 'ueber-mich', 'kontakt'];
function updateActiveNav() {
  let fromTop = window.scrollY + header.offsetHeight + 6;
  let activeSection = sections[0];
  for (let id of sections) {
    const sec = document.getElementById(id);
    if (sec && sec.offsetTop <= fromTop) activeSection = id;
  }
  navLinksEls.forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === '#' + activeSection);
  });
}
window.addEventListener('scroll', updateActiveNav);
window.addEventListener('load', updateActiveNav);

// Hero-Logo-Animation: Text erst nach Logo einblenden
window.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    document.querySelector('.hero-content').classList.add('visible');
  }, 1350); // Wartezeit passend zur Logo-Animation
});

// Copyright-Jahr im Footer automatisch
const jahr = document.getElementById('jahr');
if (jahr) jahr.textContent = new Date().getFullYear();

// Fade/Slide Animation beim Scrollen
function revealSections() {
  document.querySelectorAll('.section-fade,.section-slide').forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight - 80) {
      section.classList.add('visible');
    }
  });
}
window.addEventListener('scroll', revealSections);
window.addEventListener('load', revealSections);

// Sanftes Scrollen zu Anchors
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function(e) {
    const targetId = this.getAttribute('href').slice(1);
    const target = document.getElementById(targetId);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      target.setAttribute('tabindex', '-1');
      target.focus();
      setTimeout(() => target.removeAttribute('tabindex'), 2000);
    }
  });
});