const gallery = document.getElementById("gallery");
const input = document.getElementById("image-url");
const addBtn = document.getElementById("add-btn");
const deleteBtn = document.getElementById("delete-btn");

// Rutas locales de las imágenes que guardaste en assets/img/
const imagenesLocales = [
  "assets/img/perrito.jpg",
  "assets/img/animal.jpg",
  "assets/img/cascada.jpg"
];

// Cargar imágenes locales al iniciar
imagenesLocales.forEach(url => addImage(url));

// Función para agregar una imagen a la galería
function addImage(url) {
  const img = document.createElement("img");
  img.src = url;

  img.addEventListener("click", () => {
    document.querySelectorAll(".gallery img").forEach(el => el.classList.remove("selected"));
    img.classList.add("selected");
  });

  gallery.appendChild(img);
}

// Botón: agregar imagen desde el input
addBtn.addEventListener("click", () => {
  const url = input.value.trim();
  if (url) {
    addImage(url);
    input.value = "";
  }
});

// Botón: eliminar imagen seleccionada
deleteBtn.addEventListener("click", () => {
  const selected = document.querySelector(".gallery img.selected");
  if (selected) {
    gallery.removeChild(selected);
  }
});

// Presionar Enter también agrega imagen
input.addEventListener("keydown", e => {
  if (e.key === "Enter") {
    addBtn.click();
  }
});
