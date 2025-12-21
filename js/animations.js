/* ============================================
   Scroll Animations & Interactions
   ============================================ */

// Intersection Observer for scroll animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, observerOptions);

// Observe all animated elements
document.addEventListener('DOMContentLoaded', () => {
  const animatedElements = document.querySelectorAll(
    '.fade-in, .slide-in-left, .slide-in-right, .scale-in, .stagger-item'
  );
  
  animatedElements.forEach(el => observer.observe(el));
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    
    if (target) {
      const headerOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  });
});

// Scroll Progress Indicator
let scrollProgress = null;

function createScrollProgress() {
  scrollProgress = document.createElement('div');
  scrollProgress.className = 'scroll-progress';
  document.body.appendChild(scrollProgress);
}

function updateScrollProgress() {
  if (!scrollProgress) return;
  
  const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrolled = (window.scrollY / windowHeight) * 100;
  scrollProgress.style.width = scrolled + '%';
}

// Parallax Effect
function initParallax() {
  const parallaxElements = document.querySelectorAll('.parallax');
  
  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    
    parallaxElements.forEach(element => {
      const speed = element.dataset.speed || 0.5;
      const yPos = -(scrolled * speed);
      element.style.transform = `translateY(${yPos}px)`;
    });
  });
}

// Skill Progress Animation
function animateSkills() {
  const skillBars = document.querySelectorAll('.skill-progress');
  
  const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const progressBar = entry.target;
        const targetWidth = progressBar.style.width;
        progressBar.style.width = '0%';
        
        setTimeout(() => {
          progressBar.style.width = targetWidth;
        }, 100);
        
        skillObserver.unobserve(progressBar);
      }
    });
  }, { threshold: 0.5 });
  
  skillBars.forEach(bar => skillObserver.observe(bar));
}

// Counter Animation
function animateCounters() {
  const counters = document.querySelectorAll('.stat-number');
  
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const counter = entry.target;
        const target = counter.textContent;
        const isPercentage = target.includes('%');
        const isPlus = target.includes('+');
        const numericValue = parseFloat(target.replace(/[^0-9.]/g, ''));
        
        let current = 0;
        const increment = numericValue / 50;
        const duration = 2000;
        const stepTime = duration / 50;
        
        const timer = setInterval(() => {
          current += increment;
          if (current >= numericValue) {
            counter.textContent = target;
            clearInterval(timer);
          } else {
            let displayValue = Math.floor(current);
            if (isPercentage) displayValue += '%';
            if (isPlus) displayValue += '+';
            counter.textContent = displayValue;
          }
        }, stepTime);
        
        counterObserver.unobserve(counter);
      }
    });
  }, { threshold: 0.5 });
  
  counters.forEach(counter => counterObserver.observe(counter));
}

// Initialize on load
document.addEventListener('DOMContentLoaded', () => {
  createScrollProgress();
  window.addEventListener('scroll', updateScrollProgress);
  initParallax();
  animateSkills();
  animateCounters();
});

// Page Transition
function handlePageTransition() {
  const loader = document.getElementById('loader');
  
  function hideLoader() {
    if (loader) {
      loader.classList.add('hidden');
      setTimeout(() => {
        loader.style.display = 'none';
      }, 500);
    }
  }
  
  // Hide loader when page is loaded
  if (document.readyState === 'complete') {
    setTimeout(hideLoader, 500);
  } else {
    window.addEventListener('load', () => {
      setTimeout(hideLoader, 500);
    });
  }
  
  // Fallback: hide loader after max 3 seconds
  setTimeout(hideLoader, 3000);
}

handlePageTransition();

// Typing Effect (if needed)
function typeWriter(element, text, speed = 100) {
  let i = 0;
  element.textContent = '';
  
  function type() {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }
  
  type();
}

// Export for use in other files
window.scrollAnimations = {
  observer,
  animateSkills,
  animateCounters,
  typeWriter
};

