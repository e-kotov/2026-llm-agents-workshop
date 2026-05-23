document.addEventListener('DOMContentLoaded', () => {
  // Target the book title on the index/introduction page
  const titleEl = document.querySelector('#title-block-header h1.title');
  
  if (titleEl && titleEl.textContent.trim() === 'Beyond the Chatbox') {
    // Create the chatbox element structure
    const chatbox = document.createElement('div');
    chatbox.className = 'chatbox-container';
    chatbox.innerHTML = `
      <div class="chatbox-header">
        <div class="chatbox-dots">
          <span class="dot red"></span>
          <span class="dot yellow"></span>
          <span class="dot green"></span>
        </div>
        <div class="chatbox-title">
          <span class="status-indicator"></span> coding-agent@workshop-2026: ~
        </div>
        <div class="chatbox-actions"></div>
      </div>
      <div class="chatbox-body">
        <div class="chatbox-message user">
          <div class="avatar user-avatar">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
            </svg>
          </div>
          <div class="message-content">
            <span class="message-sender">User</span>
            <p class="message-text">What is the title of the June 3 workshop in Bologna?</p>
          </div>
        </div>
        <div class="chatbox-message assistant">
          <div class="avatar assistant-avatar">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M5 0a.5.5 0 0 1 .5.5V2h1V.5a.5.5 0 0 1 1 0V2h1V.5a.5.5 0 0 1 1 0V2h1V.5a.5.5 0 0 1 .5-.5h.5a.5.5 0 0 1 .5.5v1h1.5a.5.5 0 0 1 .5.5V4h1.5a.5.5 0 0 1 0 1H14v1h1.5a.5.5 0 0 1 0 1H14v1h1.5a.5.5 0 0 1 0 1H14v1h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-.5.5H13v1.5a.5.5 0 0 1-.5.5h-.5a.5.5 0 0 1-.5-.5V14h-1v1.5a.5.5 0 0 1-1 0V14h-1v1.5a.5.5 0 0 1-1 0V14h-1v1.5a.5.5 0 0 1-1 0V14H5v1.5a.5.5 0 0 1-.5-.5h-.5a.5.5 0 0 1-.5-.5V13H2v-1.5a.5.5 0 0 1-.5-.5h-.5a.5.5 0 0 1 0-1H2v-1H.5a.5.5 0 0 1 0-1H2v-1H.5a.5.5 0 0 1 0-1H2v-1H.5a.5.5 0 0 1 0-1H2V5H.5a.5.5 0 0 1-.5-.5V4h1.5A.5.5 0 0 1 2 3.5V2H.5a.5.5 0 0 1-.5-.5V1A.5.5 0 0 1 .5.5h1.5a.5.5 0 0 1 .5.5z"/>
            </svg>
          </div>
          <div class="message-content">
            <span class="message-sender">Assistant</span>
            <h1 class="message-text title"><span id="typed-title"></span></h1>
          </div>
        </div>
      </div>
    `;
    
    // Replace the original h1 title with our chatbox container
    titleEl.parentNode.replaceChild(chatbox, titleEl);
    
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
        chatbox.classList.add('typed-complete');
      }
    });
  }
});
