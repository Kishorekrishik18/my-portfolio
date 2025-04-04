    // You can add interactivity later here
    console.log("Portfolio Loaded");

    document.addEventListener("DOMContentLoaded", function () {
            const dropdownBtn = document.querySelector(".dropdown-btn");
            const dropdown = document.querySelector(".dropdown");

            dropdownBtn.addEventListener("click", function () {
            dropdown.classList.toggle("active");
        });
    });

    const roles = ["ASP.NET Developer", "Application Security Engineer", "Full Stack Developer"];
    let roleIndex = 0;
    let charIndex = 0;
    const typingText = document.getElementById("typing-text");

    function typeRole() {
    if (charIndex < roles[roleIndex].length) {
        typingText.textContent += roles[roleIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeRole, 100);
    } else {
        setTimeout(eraseRole, 1500);
    }
    }

    function eraseRole() {
        if (charIndex > 0) {
        typingText.textContent = roles[roleIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseRole, 50);
        } else {
        roleIndex = (roleIndex + 1) % roles.length;
        setTimeout(typeRole, 500);
        }
    }

    document.addEventListener("DOMContentLoaded", () => {
        typeRole();
    });

    document.getElementById("theme-toggle").addEventListener("click", function () {
        document.body.classList.toggle("light-mode");
        this.textContent = document.body.classList.contains("light-mode") ? "🌞" : "🌙";
    });

    const topBtn = document.getElementById("topBtn");

    window.onscroll = () => {
        topBtn.style.display = window.scrollY > 300 ? "block" : "none";
    };

    topBtn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    document.getElementById("topBtn").addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
    

    

