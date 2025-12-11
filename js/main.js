document.addEventListener("DOMContentLoaded", function () {
    // Mobile Menu Toggle
    const btn = document.querySelector(".main_btn");
    const menu = document.querySelector(".btns"); // Updated selector to .btns (sidebar)

    if (btn) {
        btn.addEventListener("click", () => {
            // Logic for mobile menu if needed. 
            // Currently .btns is always visible on desktop, hidden on mobile?
            // CSS needs to handle mobile visibility.
            menu.classList.toggle("show");
        });
    }

    // Scroll Spy for Navigation Highlighting
    const sections = document.querySelectorAll(".name_pages");
    const navLinks = document.querySelectorAll(".nav-link");

    function highlightNav() {
        let scrollY = window.pageYOffset;

        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 150;
            const sectionId = current.getAttribute("id");

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove("active");
                    if (link.getAttribute("href").includes(sectionId)) {
                        link.classList.add("active");
                    }
                });
            }
        });
    }

    window.addEventListener("scroll", highlightNav);
});
