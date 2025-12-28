/**
 * Crypto33 Masters - Main JavaScript
 * Handles mobile menu, navigation, and global interactions
 */

console.log('Crypto33 Masters - Main JS loaded');

// ============================================
// MOBILE MENU TOGGLE
// ============================================
document.addEventListener('DOMContentLoaded', function() {
  const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
  const navigation = document.querySelector('.navigation');
  const body = document.body;

  if (mobileMenuToggle && navigation) {
    // Toggle mobile menu
    mobileMenuToggle.addEventListener('click', function(e) {
      e.stopPropagation();
      this.classList.toggle('active');
      navigation.classList.toggle('active');
      body.classList.toggle('menu-open');
    });

    // Close menu when clicking on a nav link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.addEventListener('click', function() {
        mobileMenuToggle.classList.remove('active');
        navigation.classList.remove('active');
        body.classList.remove('menu-open');
      });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
      if (!navigation.contains(e.target) && !mobileMenuToggle.contains(e.target)) {
        if (navigation.classList.contains('active')) {
          mobileMenuToggle.classList.remove('active');
          navigation.classList.remove('active');
          body.classList.remove('menu-open');
        }
      }
    });

    // Close menu on window resize if it's open
    window.addEventListener('resize', function() {
      if (window.innerWidth > 968) {
        mobileMenuToggle.classList.remove('active');
        navigation.classList.remove('active');
        body.classList.remove('menu-open');
      }
    });
  }
});

// ============================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const targetId = this.getAttribute('href');
    if (targetId !== '#' && targetId !== '#!') {
      e.preventDefault();
      const target = document.querySelector(targetId);
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  });
});

// ============================================
// PREVENT BODY SCROLL WHEN MENU IS OPEN
// ============================================
const style = document.createElement('style');
style.textContent = `
  body.menu-open {
    overflow: hidden;
  }
`;
document.head.appendChild(style);

