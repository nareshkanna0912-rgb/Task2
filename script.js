
/* TASK 2 - THEME SWITCHING */

const themeButton = document.getElementById("theme-toggle");

const savedTheme = localStorage.getItem("portfolio-theme");

const systemDark = window.matchMedia(
    "(prefers-color-scheme: dark)"
).matches;

let currentTheme = savedTheme || (systemDark ? "dark" : "light");

function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);

    if (themeButton) {
        const isDark = theme === "dark";

        themeButton.textContent = isDark ? "☀️" : "🌙";

        themeButton.setAttribute(
            "aria-label",
            isDark ? "Switch to light mode" : "Switch to dark mode"
        );

        themeButton.setAttribute(
            "aria-pressed",
            String(isDark)
        );
    }
}

applyTheme(currentTheme);

if (themeButton) {
    themeButton.addEventListener("click", function () {

        currentTheme = currentTheme === "light"
            ? "dark"
            : "light";

        applyTheme(currentTheme);

        localStorage.setItem("portfolio-theme", currentTheme);
    });
}

/* CONTACT FORM */

const contactForm = document.getElementById("contact-form");

if (contactForm) {
    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        const subject = encodeURIComponent(
            "Portfolio Contact from " + name
        );

        const body = encodeURIComponent(
            "Name: " + name +
            "\nEmail: " + email +
            "\n\nMessage:\n" + message
        );

        window.location.href =
            "mailto:nareshkanna0912@gmail.com" +
            "?subject=" + subject +
            "&body=" + body;
    });
}
