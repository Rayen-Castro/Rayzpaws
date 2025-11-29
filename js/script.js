const html = document.documentElement;
const themeToggle = document.getElementById("toggle-theme");

if (localStorage.getItem("theme")) {
    const savedTheme = localStorage.getItem("theme");
    html.setAttribute("data-theme", savedTheme);

    themeToggle.textContent = savedTheme === "light" ? "🌙" : "☀️";
}

themeToggle.addEventListener("click", () => {
    const current = html.getAttribute("data-theme");
    const next = current === "light" ? "dark" : "light";

    html.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);

    themeToggle.textContent = next === "light" ? "🌙" : "☀️";
});
