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



    window.addEventListener("scroll", highlightNav);
});

function openPopup(popup) {
    /* Open popup and make accessible screen readers */
    $(popup).show().attr("aria-hidden", "false");
    /* Focus on element to guide screen readers to popup */
    $("#closePopup").focus();
}

function closePopup(popup) {
    /* Close popup and hide from screen readers */
    $(popup).hide().attr("aria-hidden", "true");
    /* Focus screen readers back to button */
    $("#openMyPopup").focus();
}



$(".modal-wide").on("show.bs.modal", function () {
    var height = $(window).height() - 200;
    $(this).find(".modal-body").css("max-height", height);
});