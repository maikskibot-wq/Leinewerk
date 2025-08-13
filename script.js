// Header Scroll-Logik: transparent → solid
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 8) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// Aktiver Nav-Link beim Scrollen
const navLinks = document.querySelectorAll('.nav-link');
const sections = ['hero', 'leistungen', 'beispiele', 'ueber-mich', 'kontakt'];
function updateActiveNav() {
  let fromTop = window.scrollY + header.offsetHeight + 6;
  let activeSection = sections[0];
  for (let id of sections) {
    const sec = document.getElementById(id);
    if (sec && sec.offsetTop <= fromTop) activeSection = id;
  }
  navLinks.forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === '#' + activeSection);
  });
}
window.addEventListener('scroll', updateActiveNav);
window.addEventListener('load', updateActiveNav);

// Sanftes Scrollen zu Anchors (wenn nötig für ältere Browser)
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

// Kontakt-Form: Formspree Fetch mit Status-Meldungen
const kontaktForm = document.querySelector('.kontakt-form');
if (kontaktForm) {
  kontaktForm.addEventListener('submit', async function(e) {
    e.preventDefault();
    const status = kontaktForm.querySelector('.form-status');
    status.textContent = 'Sende Anfrage …';
    const data = new FormData(kontaktForm);
    try {
      const res = await fetch(kontaktForm.action, {
        method: 'POST',
        body: data,
        headers: { 'Accept': 'application/json' }
      });
      if (res.ok) {
        status.textContent = 'Danke! Deine Nachricht wurde gesendet.';
        kontaktForm.reset();
      } else {
        status.textContent = 'Fehler beim Senden. Bitte versuche es später erneut.';
      }
    } catch (err) {
      status.textContent = 'Netzwerkfehler – bitte prüfe deine Verbindung.';
    }
  });
}

// Automatisches Copyright-Jahr im Footer
const jahr = document.getElementById('jahr');
if (jahr) jahr.textContent = new Date().getFullYear();