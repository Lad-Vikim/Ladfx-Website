// Function to toggle between Light and Dark themes
document.getElementById('themeToggleBtn').addEventListener('click', function () {
  const currentTheme = document.body.classList.contains('dark-theme') ? 'dark' : 'light';
  
  // Toggle the theme class on the body element
  if (currentTheme === 'light') {
    document.body.classList.remove('light-theme');
    document.body.classList.add('dark-theme');
  } else {
    document.body.classList.remove('dark-theme');
    document.body.classList.add('light-theme');
  }
});

// Scroll to top functionality
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

// Subscription Modal Logic
const subscribeBtn = document.getElementById("subscribeBtn");
const subscriptionModal = document.getElementById("subscriptionModal");
const closeBtn = subscriptionModal.querySelector(".close");

subscribeBtn.onclick = function () {
  subscriptionModal.style.display = "block";
}

closeBtn.onclick = function () {
  subscriptionModal.style.display = "none";
}

window.onclick = function (event) {
  if (event.target === subscriptionModal) {
    subscriptionModal.style.display = "none";
  }
}
