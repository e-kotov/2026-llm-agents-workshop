document.addEventListener('DOMContentLoaded', () => {
  // Target the book title on the index/introduction page
  const titleEl = document.querySelector('#title-block-header h1.title');
  
  if (titleEl && titleEl.textContent.trim() === 'Beyond the Chatbox') {
    // Clear and set up the typing target element
    titleEl.innerHTML = '<span id="typed-title"></span>';
    
    new Typed('#typed-title', {
      strings: [
        'Beyond Chatting...',
        'Beyond the Chatbox'
      ],
      typeSpeed: 45,       // Snappy, energetic typing speed
      backSpeed: 25,       // Swift backspacing
      backDelay: 1000,     // Short, crisp pause on "Beyond Chatting..."
      startDelay: 300,     // Quick start delay after page load
      loop: false,         // Only type it once
      showCursor: true,
      cursorChar: '▋',     // Modern terminal-style block cursor
      autoInsertCss: false, // Prevent typed.js from injecting its default fast-blinking style
      onComplete: (self) => {
        // Trigger subtle aesthetic changes (like shadow/glow pulse) on completion
        titleEl.classList.add('typed-complete');
      }
    });
  }
});
