/**
 * script.js
 * Injects a sleek trailing cursor and binds it to your interactions.
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Create the custom cursor elements dynamically
  const cursorDot = document.createElement('div');
  cursorDot.className = 'custom-cursor-dot';
  document.body.appendChild(cursorDot);

  const cursorFollower = document.createElement('div');
  cursorFollower.className = 'custom-cursor-follower';
  document.body.appendChild(cursorFollower);

  // 2. Track mouse position
  let mouseX = 0, mouseY = 0;
  let followerX = 0, followerY = 0;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    // The dot perfectly tracks the mouse without delay
    cursorDot.style.left = `${mouseX}px`;
    cursorDot.style.top = `${mouseY}px`;
  });

  // 3. Animate the follower with a smooth delay (lerp)
  function animateCursor() {
    // Ease factor (lower is slower)
    const ease = 0.15;
    followerX += (mouseX - followerX) * ease;
    followerY += (mouseY - followerY) * ease;

    cursorFollower.style.left = `${followerX}px`;
    cursorFollower.style.top = `${followerY}px`;

    requestAnimationFrame(animateCursor);
  }
  animateCursor();

  // 4. Add sleek hover interaction when mouse touches interactive elements
  const linksAndButtons = document.querySelectorAll('a, button, .highlight, .logo');

  linksAndButtons.forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursorFollower.classList.add('hover-state');
      // Hide the dot for a cleaner look while hovering
      cursorDot.style.opacity = '0';
    });

    el.addEventListener('mouseleave', () => {
      cursorFollower.classList.remove('hover-state');
      cursorDot.style.opacity = '1';
    });
  });
});
