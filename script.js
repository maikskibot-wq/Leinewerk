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

// 3D-Canvas Animation im Hero
const canvas = document.getElementById('heroCanvas');
if (canvas) {
  let ctx = canvas.getContext('2d');
  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = document.querySelector('.hero').offsetHeight;
  }
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);

  // stylized 3D laser swirl animation
  function drawLaser(t) {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    let cx = canvas.width/2, cy = canvas.height/2, r = Math.min(canvas.width,canvas.height)/3;
    ctx.save();
    ctx.translate(cx,cy);
    ctx.rotate(Math.sin(t/900)*0.08);
    for(let i=0;i<8;i++){
      ctx.save();
      ctx.rotate(i*Math.PI/4 + Math.sin(t/800+i)*0.06);
      ctx.strokeStyle = "#0e402e";
      ctx.lineWidth = 3 + Math.sin(t/400+i)*2;
      ctx.beginPath();
      ctx.arc(0,0,r,0,Math.PI*0.7,false);
      ctx.stroke();
      ctx.restore();
    }
    ctx.restore();

    // Laser sparkle
    ctx.save();
    for(let i=0;i<30;i++){
      ctx.globalAlpha = 0.18+Math.sin(t/500+i)*0.09;
      ctx.fillStyle = "#0e402e";
      let a = Math.random()*Math.PI*2, rr = r*0.9+Math.random()*r*0.2;
      ctx.beginPath();
      ctx.arc(
        cx + Math.cos(a)*rr,
        cy + Math.sin(a)*rr,
        2.5+Math.random()*2.5,0,Math.PI*2);
      ctx.fill();
    }
    ctx.restore();
  }
  let t=0;
  function animateHero() {
    t+=16;
    drawLaser(t);
    requestAnimationFrame(animateHero);
  }
  animateHero();
}