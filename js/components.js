/* =============================================
   SHARED COMPONENTS (navbar + footer)
   Injected before DOMContentLoaded fires
   ============================================= */

const NAVBAR_HTML = `
<nav class="navbar">
  <a class="nav-logo" href="index.html">E&nbsp;G&nbsp;A&nbsp;A</a>
  <ul class="nav-links">
    <li><a href="index.html">Home</a></li>
    <li><a href="projects.html">Proyectos</a></li>
    <li><a href="about.html">Nosotros</a></li>
    <li><a href="contact.html">Contacto</a></li>
  </ul>
  <button class="hamburger" id="hamburger" aria-label="Menu">
    <span></span><span></span><span></span>
  </button>
</nav>
<div class="mobile-menu" id="mobileMenu">
  <a href="index.html">Home</a>
  <a href="projects.html">Proyectos</a>
  <a href="about.html">Nosotros</a>
  <a href="contact.html">Contacto</a>
</div>`;

const FOOTER_HTML = `
<footer>
  <div class="footer-logo">Estudio Grosso y Arquitectos Asociados</div>
  <p class="footer-tagline">Seguinos en nuestras redes</p>
  <div class="footer-links">
    <a href="#">Instagram</a>
  </div>
  <div class="footer-bottom">
    <span>&copy; EGAA</span>
    <span>Estudio Grosso Arquitectos Asociados</span>
  </div>
</footer>`;

// Inject before body content
document.write(NAVBAR_HTML);

// Inject footer after DOM ready
document.addEventListener('DOMContentLoaded', () => {
  const footer = document.createElement('div');
  footer.innerHTML = FOOTER_HTML;
  document.body.appendChild(footer.firstElementChild);
});
