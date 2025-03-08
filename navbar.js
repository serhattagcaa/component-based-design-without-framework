// navbar.js
document.addEventListener('DOMContentLoaded', function() {
  // Create navbar element
  function createNavbar() {
    const navbar = document.createElement('ul');
    navbar.className = 'nav-links';

    // Navbar items with their respective classes and links
    const navItems = [
      { text: 'ANA SAYFA', href: 'index.html', class: '' },
      { text: 'HAKKINDA', href: 'hakkinda.html', class: 'center' },
      { text: 'İLETİŞİM', href: 'iletisim.html', class: 'upward' },
    ];

    // Create nav items
    navItems.forEach(item => {
      const li = document.createElement('li');
      if (item.class) {
        li.className = item.class;
      }

      const a = document.createElement('a');
      a.href = item.href;
      a.textContent = item.text;

      li.appendChild(a);
      navbar.appendChild(li);
    });

    return navbar;
  }

  // Get the current header navigation element to replace
  const headerNav = document.querySelector('header nav');
  if (headerNav) {
    // Clear existing navigation
    headerNav.innerHTML = '';
    // Append the new navbar
    headerNav.appendChild(createNavbar());
  }
});
