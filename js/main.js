/* ============================================
   Main JavaScript - Portfolio Functionality
   ============================================ */

// Theme Toggle
function initThemeToggle() {
  const themeToggle = document.querySelector('.theme-toggle');
  const currentTheme = localStorage.getItem('theme') || 'dark';
  
  // Set initial theme
  document.documentElement.setAttribute('data-theme', currentTheme);
  updateThemeIcon(currentTheme);
  
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
      updateThemeIcon(newTheme);
    });
  }
}

function updateThemeIcon(theme) {
  const themeIcon = document.querySelector('.theme-icon');
  if (themeIcon) {
    themeIcon.textContent = theme === 'dark' ? '☀️' : '🌙';
  }
}

// Language Toggle
function initLanguageToggle() {
  const langButtons = document.querySelectorAll('.lang-btn');
  
  langButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.dataset.lang;
      
      // Remove active class from all buttons
      langButtons.forEach(b => b.classList.remove('active'));
      // Add active class to clicked button
      btn.classList.add('active');
      
      // Store preference
      localStorage.setItem('language', lang);
      
      // Update HTML lang attribute
      document.documentElement.setAttribute('lang', lang);
      document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
      
      // Here you would typically load translations
      // For now, we'll just update the direction
    });
  });
  
  // Set initial language
  const savedLang = localStorage.getItem('language') || 'ar';
  const activeBtn = document.querySelector(`.lang-btn[data-lang="${savedLang}"]`);
  if (activeBtn) {
    activeBtn.click();
  }
}

// Mobile Navigation Toggle
function initMobileNav() {
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('.nav-menu');
  
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      navToggle.classList.toggle('active');
      navMenu.classList.toggle('active');
      navToggle.setAttribute('aria-expanded', navMenu.classList.contains('active'));
    });
    
    // Close menu when clicking on a link
    const navLinks = navMenu.querySelectorAll('a');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }
}

// Custom Cursor
function initCustomCursor() {
  const cursor = document.querySelector('.cursor-follower');
  if (!cursor) return;
  
  let mouseX = 0, mouseY = 0;
  let cursorX = 0, cursorY = 0;
  
  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursor.classList.add('active');
  });
  
  document.addEventListener('mouseleave', () => {
    cursor.classList.remove('active');
  });
  
  // Smooth cursor movement
  function animateCursor() {
    cursorX += (mouseX - cursorX) * 0.1;
    cursorY += (mouseY - cursorY) * 0.1;
    
    cursor.style.left = cursorX + 'px';
    cursor.style.top = cursorY + 'px';
    
    requestAnimationFrame(animateCursor);
  }
  
  animateCursor();
  
  // Cursor hover effects
  const hoverElements = document.querySelectorAll('a, button, .project-card, .skill-item');
  hoverElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
      cursor.style.borderColor = 'var(--primary)';
    });
    
    el.addEventListener('mouseleave', () => {
      cursor.style.transform = 'translate(-50%, -50%) scale(1)';
      cursor.style.borderColor = 'var(--primary)';
    });
  });
}

// Contact Form Handling
function initContactForm() {
  const contactForm = document.querySelector('.contact-form');
  
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const formData = new FormData(contactForm);
      const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        message: formData.get('message')
      };
      
      // Here you would typically send the data to a server
      // For now, we'll just show a success message
      showNotification('تم إرسال الرسالة بنجاح! سأتواصل معك قريباً.', 'success');
      contactForm.reset();
    });
  }
}

// Notification System
function showNotification(message, type = 'info') {
  const notification = document.createElement('div');
  notification.className = `notification notification-${type}`;
  notification.textContent = message;
  notification.style.cssText = `
    position: fixed;
    top: 100px;
    right: 20px;
    background: var(--surface);
    color: var(--text);
    padding: 1rem 1.5rem;
    border-radius: 0.5rem;
    box-shadow: var(--shadow-xl);
    z-index: 10000;
    animation: slideInRight 0.3s ease;
    border: 1px solid var(--border);
  `;
  
  document.body.appendChild(notification);
  
  setTimeout(() => {
    notification.style.animation = 'slideOutRight 0.3s ease';
    setTimeout(() => {
      notification.remove();
    }, 300);
  }, 3000);
}

// Add CSS animations for notifications
const style = document.createElement('style');
style.textContent = `
  @keyframes slideInRight {
    from {
      transform: translateX(100%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
  
  @keyframes slideOutRight {
    from {
      transform: translateX(0);
      opacity: 1;
    }
    to {
      transform: translateX(100%);
      opacity: 0;
    }
  }
`;
document.head.appendChild(style);

// Navbar Scroll Effect
function initNavbarScroll() {
  const header = document.querySelector('.header');
  let lastScroll = 0;
  
  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
      header.style.boxShadow = 'var(--shadow-lg)';
    } else {
      header.style.boxShadow = 'none';
    }
    
    // Hide/show navbar on scroll
    if (currentScroll > lastScroll && currentScroll > 200) {
      header.style.transform = 'translateY(-100%)';
    } else {
      header.style.transform = 'translateY(0)';
    }
    
    lastScroll = currentScroll;
  });
}

// Lazy Loading Images
function initLazyLoading() {
  const images = document.querySelectorAll('img[data-src]');
  
  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.removeAttribute('data-src');
        imageObserver.unobserve(img);
      }
    });
  });
  
  images.forEach(img => imageObserver.observe(img));
}

// Performance: Debounce function
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Optimize scroll events
const optimizedScrollHandler = debounce(() => {
  // Scroll-based animations
}, 10);

window.addEventListener('scroll', optimizedScrollHandler);

// Initialize everything when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  initThemeToggle();
  initLanguageToggle();
  initMobileNav();
  initCustomCursor();
  initContactForm();
  initNavbarScroll();
  initLazyLoading();
  
  // Add fade-in class to sections
  const sections = document.querySelectorAll('section');
  sections.forEach((section, index) => {
    section.classList.add('fade-in');
    section.style.transitionDelay = `${index * 0.1}s`;
  });
});

// Service Worker Registration (for PWA)
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then(registration => {
        console.log('SW registered: ', registration);
      })
      .catch(registrationError => {
        console.log('SW registration failed: ', registrationError);
      });
  });
}

// Export for testing
window.portfolioApp = {
  initThemeToggle,
  initLanguageToggle,
  initMobileNav,
  initCustomCursor,
  initContactForm,
  showNotification
};

