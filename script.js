console.log("Portfolio Loaded");

document.addEventListener("DOMContentLoaded", function () {
  // Dropdown functionality
  const dropdownBtn = document.querySelector(".role-dropdown");
  const dropdown = document.querySelector(".dropdown");

  dropdownBtn.addEventListener("click", function () {
    dropdown.classList.toggle("active");
  });

  const isMobile = window.innerWidth <= 767;
  const note = document.getElementById("mobile-note");

  if (isMobile && note) {
    note.style.display = "block";
  }

  // Apply staggered animation to each skill item
  const skills = document.querySelectorAll('.skill-item');
  skills.forEach((item, index) => {
    item.style.animationDelay = `${index * 0.1}s`;
  });

  // Theme toggle
  document.getElementById("theme-toggle").addEventListener("click", function () {
    document.body.classList.toggle("light-mode");
    this.textContent = document.body.classList.contains("light-mode") ? "🌞" : "🌙";
  });

  // Typing effect
  const roles = ["Vue js and ASP.NET Core", "Application Security Engineer", "Full Stack Developer"];
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

function toggleMainDropdown() {
  const roleDropdown = document.querySelector(".role-dropdown");
  const icon = document.querySelector(".job-title .dropdown");
  roleDropdown.classList.toggle("hidden");
  icon.textContent = roleDropdown.classList.contains("hidden") ? "↓" : "↑";
}

function toggleRole(id) {
  const list = document.getElementById(id);
  const icon = list.previousElementSibling.querySelector(".dropdown");
  list.classList.toggle("hidden");
  icon.textContent = list.classList.contains("hidden") ? "↓" : "↑";
}

// Scroll to top
const topBtn = document.getElementById("topBtn");

window.onscroll = () => {
  topBtn.style.display = window.scrollY > 300 ? "block" : "none";
};

topBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Extra scroll-reveal effect using Intersection Observer
const fadeInObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show-up');
    }
  });
});

document.querySelectorAll('section, .experience-container, .skill-item').forEach(el => {
  el.classList.add('hidden-reveal');
  fadeInObserver.observe(el);
});

