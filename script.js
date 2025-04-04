console.log("Portfolio Loaded");

document.addEventListener("DOMContentLoaded", function () {
  // Dropdown functionality
  const dropdownBtn = document.querySelector(".dropdown-btn");
  const dropdown = document.querySelector(".dropdown");

  dropdownBtn.addEventListener("click", function () {
    dropdown.classList.toggle("active");
  });

  // Typing effect
  const roles = ["Vue js and ASP.NET Core", "Application Security Engineer", "Full Stack Developer with"];
  const typingTexts = document.querySelectorAll(".typing-text");
  let roleIndex = 0;
  let charIndex = 0;

  function typeRole() {
    typingTexts.forEach(el => el.textContent = roles[roleIndex].substring(0, charIndex) + "|");
    if (charIndex < roles[roleIndex].length) {
      charIndex++;
      setTimeout(typeRole, 150);
    } else {
      setTimeout(eraseRole, 1500);
    }
  }

  function eraseRole() {
    if (charIndex > 0) {
      charIndex--;
      typingTexts.forEach(el => el.textContent = roles[roleIndex].substring(0, charIndex));
      setTimeout(eraseRole, 50);
    } else {
      roleIndex = (roleIndex + 1) % roles.length;
      setTimeout(typeRole, 500);
    }
  }

  typeRole();
});

function toggleDropdown() {
    const list = document.querySelector('.experience-list');
    const dropdown = document.querySelector('.dropdown');

    list.classList.toggle('hidden');
    dropdown.textContent = list.classList.contains('hidden') ? '↓' : '↑';
}

// Theme toggle
document.getElementById("theme-toggle").addEventListener("click", function () {
  document.body.classList.toggle("light-mode");
  this.textContent = document.body.classList.contains("light-mode") ? "🌞" : "🌙";
});

// Scroll to top
const topBtn = document.getElementById("topBtn");

window.onscroll = () => {
  topBtn.style.display = window.scrollY > 300 ? "block" : "none";
};

topBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
