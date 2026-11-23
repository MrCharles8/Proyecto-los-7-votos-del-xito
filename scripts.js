
const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");

// Menú para celulares
menuBtn.addEventListener("click", () => {
    menu.classList.toggle("open");

    if (menu.classList.contains("open")) {
        menuBtn.textContent = "×";
    } else {
        menuBtn.textContent = "☰";
    }
});

// Cerrar menú al seleccionar una sección
document.querySelectorAll("#menu a").forEach(link => {
    link.addEventListener("click", () => {
        menu.classList.remove("open");
        menuBtn.textContent = "☰";
    });
});

// Sistema de progreso
const checkboxes = document.querySelectorAll(
    '.checklist input[type="checkbox"]'
);

const progress = document.getElementById("progress");
const counter = document.getElementById("counter");

// Recuperar el progreso guardado
checkboxes.forEach((checkbox, index) => {
    checkbox.checked =
        localStorage.getItem("voto" + index) === "true";

    checkbox.addEventListener("change", () => {
        localStorage.setItem(
            "voto" + index,
            checkbox.checked
        );

        updateProgress();
    });
});

// Actualizar barra y contador
function updateProgress() {
    let completed = 0;

    checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
            completed++;
        }
    });

    let percentage = (completed / 7) * 100;

    progress.style.width = percentage + "%";

    counter.textContent =
        completed + " de 7 meses completados";
}

updateProgress();
