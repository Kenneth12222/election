// Set the election date (September 5, 2027)
const electionDate = new Date('September 5, 2027 00:00:00 GMT+3').getTime();

// Update countdown every second
const countdown = setInterval(() => {
  const now = new Date().getTime();
  const distance = electionDate - now;

  // Time calculations
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display with leading zeros
  document.getElementById('days').textContent = days.toString().padStart(2, '0');
  document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
  document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
  document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');

  // If countdown ends
  if (distance < 0) {
    clearInterval(countdown);
    document.querySelector('.countdown-container').innerHTML = `
                    <div class="countdown-box" style="grid-column: 1/-1; padding: 4rem;">
                        <div class="countdown-value" style="font-size: 2.5rem;">
                            The People Have Spoken!
                        </div>
                    </div>
                `;
  }
}, 1000);

// === Ultra-Premium 3D Hover Effects ===
const boxes = document.querySelectorAll('.countdown-box');
boxes.forEach(box => {
  box.addEventListener('mousemove', (e) => {
    const x = e.clientX - box.getBoundingClientRect().left;
    const y = e.clientY - box.getBoundingClientRect().top;

    const centerX = box.offsetWidth / 2;
    const centerY = box.offsetHeight / 2;

    const angleX = (y - centerY) / 15;
    const angleY = (centerX - x) / 15;

    box.style.transform = `translateY(-15px) rotateX(${angleX}deg) rotateY(${angleY}deg)`;
    box.style.boxShadow = `0 40px 80px -20px rgba(212, 175, 55, 0.4)`;
  });

  box.addEventListener('mouseleave', () => {
    box.style.transform = 'translateY(-15px) rotateX(10deg)';
    box.style.boxShadow = '0 30px 60px -15px rgba(212, 175, 55, 0.3)';
  });
});



// Array of motivational political messages
const voterMessages = [
  "The streets have spoken. Let the ballot finish the sentence.",
  "Silence has never changed a nation. Vote in 2027.",
  "From struggle to ballot — let your pain shape the future.",
  "2027 is not just an election. It's a reckoning.",
  "Your vote is your protest — peaceful, powerful, permanent.",
  "We marched. We cried. Now we vote.",
  "Let broken promises fuel your ballot, not your silence.",
  "This time, don’t just hope — show up and decide.",
  "The future won’t wait. Make 2027 the turning point.",
  "Democracy doesn’t beg — it votes. Be there in 2027."
];


// Function to simulate typing effect
function typeWriter(text, element, speed, callback) {
  let i = 0;
  element.textContent = "";

  function typing() {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      setTimeout(typing, speed);
    } else if (callback) {
      setTimeout(callback, 2000); // Pause before deleting
    }
  }

  typing();
}

// Function to simulate deleting text
function deleteText(element, speed, callback) {
  let text = element.textContent;
  let i = text.length;

  function deleting() {
    if (i > 0) {
      element.textContent = text.substring(0, i - 1);
      i--;
      setTimeout(deleting, speed / 2); // Delete faster than typing
    } else if (callback) {
      setTimeout(callback, 500); // Short pause before next message
    }
  }

  deleting();
}

// Function to display messages with typing effect
function displayMessagesWithEffect() {
  const messageContainer = document.createElement('div');
  messageContainer.className = 'voter-message';
  document.querySelector('.luxury-footer').appendChild(messageContainer);

  let currentIndex = 0;
  const typingSpeed = 50; // Milliseconds per character

  function showNextMessage() {
    typeWriter(
      voterMessages[currentIndex],
      messageContainer,
      typingSpeed,
      () => {
        deleteText(messageContainer, typingSpeed, () => {
          currentIndex = (currentIndex + 1) % voterMessages.length;
          showNextMessage();
        });
      }
    );
  }

  // Start the cycle
  showNextMessage();
}

// Call the function when page loads
window.addEventListener('DOMContentLoaded', displayMessagesWithEffect);