
const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");

// MENÚ PARA CELULARES

menuBtn.addEventListener("click", () => {
    menu.classList.toggle("open");

    if (menu.classList.contains("open")) {
        menuBtn.textContent = "×";
    } else {
        menuBtn.textContent = "☰";
    }
});

// CERRAR MENÚ AL SELECCIONAR UNA SECCIÓN

document.querySelectorAll("#menu a").forEach(link => {
    link.addEventListener("click", () => {
        menu.classList.remove("open");
        menuBtn.textContent = "☰";
    });
});

// SISTEMA DE PROGRESO

const checkboxes = document.querySelectorAll(
    '.checklist input[type="checkbox"]'
);

const progress = document.getElementById("progress");
const counter = document.getElementById("counter");

// RECUPERAR EL PROGRESO GUARDADO

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

// ACTUALIZAR BARRA Y CONTADOR

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
