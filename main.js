/**
 * Sukhwinder Singh — Portfolio Interactive Engine
 * Fibonacci 3D Canvas, Custom Cursor, Live Clock, Scroll Reveals, Audio & Effects
 */

document.addEventListener('DOMContentLoaded', () => {
  initPreloader();
  initISTClock();
  initCustomCursor();
  initFibonacciSphere();
  initScrollEffects();
  initTextScramble();
  initCopyEmail();
  initMobileMenu();
  initSpotlight();
});

/* --------------------------------------------------------------------------
   01. Preloader Animation
   -------------------------------------------------------------------------- */
function initPreloader() {
  const preloader = document.getElementById('preloader');
  const bar = document.getElementById('preloader-bar-fill');
  const pct = document.getElementById('preloader-pct-text');
  if (!preloader || !bar || !pct) return;

  let progress = 0;
  const startTime = performance.now();
  const duration = 1200; // 1.2s preloader

  function step(now) {
    const elapsed = now - startTime;
    progress = Math.min(100, Math.floor((elapsed / duration) * 100));
    bar.style.width = progress + '%';
    pct.textContent = String(progress).padStart(2, '0') + '%';

    if (progress < 100) {
      requestAnimationFrame(step);
    } else {
      setTimeout(() => {
        preloader.classList.add('is-done');
        document.body.classList.add('page-ready');
      }, 200);
    }
  }

  requestAnimationFrame(step);
}

/* --------------------------------------------------------------------------
   02. Live IST Clock
   -------------------------------------------------------------------------- */
function initISTClock() {
  const clocks = document.querySelectorAll('.header-clock, .contact-clock');
  
  function update() {
    const options = {
      timeZone: 'Asia/Kolkata',
      hour12: false,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    };
    const timeString = new Intl.DateTimeFormat('en-GB', options).format(new Date());
    clocks.forEach(el => {
      el.innerHTML = `${timeString} <span>IST</span>`;
    });
  }

  update();
  setInterval(update, 1000);
}

/* --------------------------------------------------------------------------
   03. Custom Cursor with Lerp
   -------------------------------------------------------------------------- */
function initCustomCursor() {
  const dot = document.querySelector('.cursor-dot');
  const ring = document.querySelector('.cursor-ring');
  if (!dot || !ring) return;

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let ringX = mouseX;
  let ringY = mouseY;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    dot.style.left = mouseX + 'px';
    dot.style.top = mouseY + 'px';
  });

  function renderRing() {
    ringX += (mouseX - ringX) * 0.16;
    ringY += (mouseY - ringY) * 0.16;
    ring.style.left = ringX + 'px';
    ring.style.top = ringY + 'px';
    requestAnimationFrame(renderRing);
  }
  requestAnimationFrame(renderRing);

  // Interactive hover targets
  const hoverables = document.querySelectorAll('a, button, [data-cursor="true"], .project-card, .exp-row, .recog-feature');
  hoverables.forEach(el => {
    el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
    el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
  });
}

/* --------------------------------------------------------------------------
   04. Interactive 3D Fibonacci Sphere (Canvas)
   -------------------------------------------------------------------------- */
function initFibonacciSphere() {
  const canvas = document.getElementById('canvas-scene');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let width, height;
  function resize() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    width = canvas.parentElement.clientWidth;
    height = canvas.parentElement.clientHeight;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.scale(dpr, dpr);
  }
  window.addEventListener('resize', resize);
  resize();

  // Generate mathematical Fibonacci Sphere points
  const N = 380;
  const points = [];
  const phi = Math.PI * (3 - Math.sqrt(5)); // Golden angle in radians

  for (let i = 0; i < N; i++) {
    const y = 1 - (i / (N - 1)) * 2; // y goes from 1 to -1
    const radiusAtY = Math.sqrt(1 - y * y);
    const theta = phi * i;
    const x = Math.cos(theta) * radiusAtY;
    const z = Math.sin(theta) * radiusAtY;
    points.push({ x, y, z, originalX: x, originalY: y, originalZ: z });
  }

  let rotX = 0.2;
  let rotY = 0.4;
  let targetRotX = 0.2;
  let targetRotY = 0.4;
  let mouseVelX = 0;
  let mouseVelY = 0;
  let lastMouseX = null;
  let lastMouseY = null;

  window.addEventListener('mousemove', (e) => {
    const normX = (e.clientX / window.innerWidth) * 2 - 1;
    const normY = (e.clientY / window.innerHeight) * 2 - 1;
    targetRotY = normX * 0.8;
    targetRotX = -normY * 0.6;

    if (lastMouseX !== null) {
      mouseVelX = (e.clientX - lastMouseX) * 0.0003;
      mouseVelY = (e.clientY - lastMouseY) * 0.0003;
    }
    lastMouseX = e.clientX;
    lastMouseY = e.clientY;
  });

  let baseSphereRadius = 260;

  function render() {
    ctx.clearRect(0, 0, width, height);

    // Responsive Sphere Radius based on container size
    baseSphereRadius = Math.min(width, height) * 0.38;
    if (baseSphereRadius < 140) baseSphereRadius = 140;

    // Smooth rotational damping
    rotX += (targetRotX - rotX) * 0.05 + 0.0012 + mouseVelY;
    rotY += (targetRotY - rotY) * 0.05 + 0.0025 + mouseVelX;
    mouseVelX *= 0.94;
    mouseVelY *= 0.94;

    const cosX = Math.cos(rotX);
    const sinX = Math.sin(rotX);
    const cosY = Math.cos(rotY);
    const sinY = Math.sin(rotY);

    // Center in right half on desktop or middle on mobile
    const isDesktop = width >= 900;
    const centerX = isDesktop ? width * 0.72 : width * 0.5;
    const centerY = height * 0.48;

    const projectedPoints = [];

    for (let i = 0; i < N; i++) {
      const p = points[i];

      // Rotate Y
      const x1 = p.originalX * cosY - p.originalZ * sinY;
      const z1 = p.originalZ * cosY + p.originalX * sinY;

      // Rotate X
      const y2 = p.originalY * cosX - z1 * sinX;
      const z2 = z1 * cosX + p.originalY * sinX;

      // Perspective projection
      const cameraDistance = 3.5;
      const fov = cameraDistance / (cameraDistance + z2);
      const projX = centerX + x1 * baseSphereRadius * fov;
      const projY = centerY + y2 * baseSphereRadius * fov;

      projectedPoints.push({
        x: projX,
        y: projY,
        z: z2,
        scale: fov,
        index: i
      });
    }

    // Sort by depth for correct z-rendering
    projectedPoints.sort((a, b) => a.z - b.z);

    // Draw connecting dynamic geometric lattice
    ctx.lineWidth = 0.6;
    for (let i = 0; i < projectedPoints.length; i += 3) {
      const p1 = projectedPoints[i];
      // Connect to neighbor in Fibonacci spiral
      if (i + 1 < projectedPoints.length) {
        const p2 = projectedPoints[i + 1];
        const dist = Math.hypot(p1.x - p2.x, p1.y - p2.y);
        if (dist < baseSphereRadius * 0.45) {
          const depthAlpha = Math.max(0.04, (p1.z + 1) * 0.1);
          ctx.strokeStyle = `rgba(22, 21, 15, ${depthAlpha})`;
          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.stroke();
        }
      }
    }

    // Draw individual nodes
    for (let i = 0; i < projectedPoints.length; i++) {
      const p = projectedPoints[i];
      const normalizedZ = (p.z + 1) / 2; // 0 to 1
      const size = Math.max(0.8, (0.8 + normalizedZ * 2.2) * p.scale);

      const isSignalNode = p.index % 17 === 0;

      ctx.beginPath();
      ctx.arc(p.x, p.y, size, 0, Math.PI * 2);

      if (isSignalNode) {
        ctx.fillStyle = `rgba(255, 77, 0, ${Math.max(0.3, normalizedZ * 0.95)})`;
        ctx.shadowColor = '#ff4d00';
        ctx.shadowBlur = 6;
      } else {
        ctx.fillStyle = `rgba(22, 21, 15, ${Math.max(0.12, normalizedZ * 0.75)})`;
        ctx.shadowBlur = 0;
      }
      ctx.fill();
    }
    ctx.shadowBlur = 0;

    requestAnimationFrame(render);
  }

  requestAnimationFrame(render);
}

/* --------------------------------------------------------------------------
   05. Scroll Effects (Progress Bar, Scrub Copy & Reveals)
   -------------------------------------------------------------------------- */
function initScrollEffects() {
  const progressBar = document.getElementById('header-progress-fill');
  const scrubWords = document.querySelectorAll('.scrub-copy .w');
  const revealElements = document.querySelectorAll('[data-reveal="true"]');
  const navLinks = document.querySelectorAll('.header-nav a');

  function onScroll() {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollFraction = docHeight > 0 ? scrollTop / docHeight : 0;

    // Header progress bar
    if (progressBar) {
      progressBar.style.transform = `scaleX(${scrollFraction})`;
    }

    // Scrub text highlight in About section
    if (scrubWords.length > 0) {
      const scrubContainer = document.querySelector('.scrub-copy');
      if (scrubContainer) {
        const rect = scrubContainer.getBoundingClientRect();
        const startOffset = window.innerHeight * 0.85;
        const endOffset = window.innerHeight * 0.15;
        const progress = (startOffset - rect.top) / (startOffset - endOffset + rect.height);
        const clampedProgress = Math.min(1, Math.max(0, progress));

        const wordsToLight = Math.floor(clampedProgress * scrubWords.length);
        scrubWords.forEach((word, index) => {
          if (index <= wordsToLight) {
            word.classList.add('on');
          } else {
            word.classList.remove('on');
          }
        });
      }
    }

    // Active Navigation Highlight
    const sections = document.querySelectorAll('section[id]');
    let currentSectionId = '';
    sections.forEach(sec => {
      const top = sec.offsetTop - 120;
      const height = sec.offsetHeight;
      if (scrollTop >= top && scrollTop < top + height) {
        currentSectionId = sec.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('is-active');
      if (link.getAttribute('href') === `#${currentSectionId}`) {
        link.classList.add('is-active');
      }
    });
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Scroll Reveal with IntersectionObserver
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-in');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -40px 0px'
  });

  revealElements.forEach(el => revealObserver.observe(el));
}

/* --------------------------------------------------------------------------
   06. Text Scramble Animation
   -------------------------------------------------------------------------- */
function initTextScramble() {
  const scrambleElements = document.querySelectorAll('[data-scramble="true"]');
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789§#%&*!<>_';

  const scrambleObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const finalContent = el.dataset.text || el.textContent;
        el.dataset.text = finalContent;

        let frame = 0;
        const totalFrames = 20;

        function update() {
          let output = '';
          for (let i = 0; i < finalContent.length; i++) {
            if (i < (frame / totalFrames) * finalContent.length) {
              output += finalContent[i];
            } else if (finalContent[i] === ' ') {
              output += ' ';
            } else {
              output += chars[Math.floor(Math.random() * chars.length)];
            }
          }
          el.textContent = output;
          frame++;
          if (frame <= totalFrames) {
            requestAnimationFrame(update);
          } else {
            el.textContent = finalContent;
          }
        }
        update();
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.2 });

  scrambleElements.forEach(el => scrambleObserver.observe(el));
}

/* --------------------------------------------------------------------------
   07. Interactive Copy Email with Feedback
   -------------------------------------------------------------------------- */
function initCopyEmail() {
  const copyBtn = document.querySelector('.copy-email');
  if (!copyBtn) return;

  const emailText = 'sukhwindersingh102316014@gmail.com';
  const label = copyBtn.querySelector('span');

  copyBtn.addEventListener('click', async () => {
    let copied = false;
    if (navigator.clipboard && window.isSecureContext) {
      try {
        await navigator.clipboard.writeText(emailText);
        copied = true;
      } catch (err) {
        // Fallback to execCommand
      }
    }
    if (!copied) {
      try {
        const textArea = document.createElement('textarea');
        textArea.value = emailText;
        textArea.style.position = 'fixed';
        textArea.style.left = '-9999px';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        copied = document.execCommand('copy');
        document.body.removeChild(textArea);
      } catch (e) {
        copied = false;
      }
    }

    const original = label.textContent;
    label.textContent = 'COPIED!';
    copyBtn.style.borderColor = 'var(--signal)';
    copyBtn.style.color = 'var(--signal-ink)';

    setTimeout(() => {
      label.textContent = original;
      copyBtn.style.borderColor = '';
      copyBtn.style.color = '';
    }, 2200);
  });
}

/* --------------------------------------------------------------------------
   08. Mobile Menu Drawer
   -------------------------------------------------------------------------- */
function initMobileMenu() {
  const toggle = document.querySelector('.menu-toggle');
  const menu = document.getElementById('mobile-menu');
  if (!toggle || !menu) return;

  function toggleMenu() {
    const isExpanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', !isExpanded);
    if (isExpanded) {
      menu.setAttribute('hidden', '');
    } else {
      menu.removeAttribute('hidden');
    }
  }

  toggle.addEventListener('click', toggleMenu);

  // Auto-close on link click
  const menuLinks = menu.querySelectorAll('a');
  menuLinks.forEach(link => {
    link.addEventListener('click', () => {
      toggle.setAttribute('aria-expanded', 'false');
      menu.setAttribute('hidden', '');
    });
  });
}

/* --------------------------------------------------------------------------
   09. Interactive Spotlight Coordinate Tracking
   -------------------------------------------------------------------------- */
function initSpotlight() {
  const spots = document.querySelectorAll('.spot');
  spots.forEach(spot => {
    spot.addEventListener('mousemove', (e) => {
      const rect = spot.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      spot.style.setProperty('--mx', `${x}px`);
      spot.style.setProperty('--my', `${y}px`);
    });
  });
}
