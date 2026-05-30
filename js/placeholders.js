/* 
  Converts .img-placeholder divs into <img> tags using inline SVG data URIs
  so the lightbox can work with src attributes.
  This is ONLY needed because we have no real photos yet.
  Once you replace divs with real <img src="..."> tags, delete this file.
*/
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.gallery-item .img-placeholder').forEach(div => {
    const label = div.getAttribute('data-label') || 'Image';
    const bg = div.style.background || 'linear-gradient(135deg,#1a1510,#2a2010)';
    // Create a colored SVG as a data URI
    const colors = bg.match(/#[0-9a-fA-F]{6}/g) || ['#1a1510','#2a2010'];
    const c1 = colors[0], c2 = colors[1] || colors[0];
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600">
      <defs><linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="${c1}"/>
        <stop offset="100%" stop-color="${c2}"/>
      </linearGradient></defs>
      <rect width="800" height="600" fill="url(#g)"/>
      <text x="400" y="310" font-family="serif" font-size="18" fill="rgba(200,169,110,0.5)"
        text-anchor="middle" letter-spacing="3">${label.toUpperCase()}</text>
    </svg>`;
    const dataUri = 'data:image/svg+xml;base64,' + btoa(svg);
    const img = document.createElement('img');
    img.src = dataUri;
    img.alt = label;
    img.style.cssText = 'width:100%;height:100%;object-fit:cover;';
    div.replaceWith(img);
  });
});
