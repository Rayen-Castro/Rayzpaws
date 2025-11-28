const html = document.documentElement;
const themeToggle = document.getElementById("toggle-theme");

if (localStorage.getItem("theme")) {
    html.setAttribute("data-theme", localStorage.getItem("theme"));
}

themeToggle.addEventListener("click", () => {
    const current = html.getAttribute("data-theme");
    const next = current === "light" ? "dark" : "light";

    html.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
});
