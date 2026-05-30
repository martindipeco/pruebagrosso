/* =============================================
   SHARED COMPONENTS (navbar + footer)
   Injected before DOMContentLoaded fires
   ============================================= */

const NAVBAR_HTML = `
<nav class="navbar">
  <a class="nav-logo" href="index.html">Studio&nbsp;Arc</a>
  <ul class="nav-links">
    <li><a href="index.html">Home</a></li>
    <li><a href="projects.html">Projects</a></li>
    <li><a href="about.html">About</a></li>
    <li><a href="contact.html">Contact</a></li>
  </ul>
  <button class="hamburger" id="hamburger" aria-label="Menu">
    <span></span><span></span><span></span>
  </button>
</nav>
<div class="mobile-menu" id="mobileMenu">
  <a href="index.html">Home</a>
  <a href="projects.html">Projects</a>
  <a href="about.html">About Us</a>
  <a href="contact.html">Contact</a>
</div>`;

const FOOTER_HTML = `
<footer>
  <div class="footer-logo">Studio Arc</div>
  <p class="footer-tagline">Architecture &amp; Design Excellence Since 2008</p>
  <div class="footer-links">
    <a href="index.html">Home</a>
    <a href="projects.html">Projects</a>
    <a href="about.html">About Us</a>
    <a href="contact.html">Contact</a>
    <a href="#">Instagram</a>
    <a href="#">LinkedIn</a>
    <a href="#">Behance</a>
    <a href="#">Pinterest</a>
  </div>
  <div class="footer-bottom">
    <span>&copy; 2025 Studio Arc. All rights reserved.</span>
    <span>Crafted with care.</span>
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
