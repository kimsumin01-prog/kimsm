// Track mouse movement to create an interactive background glow
document.addEventListener('mousemove', (e) => {
  const x = (e.clientX / window.innerWidth) * 100;
  const y = (e.clientY / window.innerHeight) * 100;

  // Set CSS variables on the root element
  document.documentElement.style.setProperty('--mouse-x', `${x}%`);
  document.documentElement.style.setProperty('--mouse-y', `${y}%`);
});

// Add a fun typing effect on load for the highlight
document.addEventListener('DOMContentLoaded', () => {
    const highlightElement = document.querySelector('.highlight');
    if (highlightElement) {
        const text = highlightElement.textContent;
        highlightElement.textContent = '';
        let i = 0;

        function typeWriter() {
            if (i < text.length) {
                highlightElement.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        }

        // Start typing effect after a short delay
        setTimeout(typeWriter, 400);
    }
});
