// Obtén una referencia al botón
const closeButton = document.getElementById("notice-close");

// Obtén una referencia al elemento que deseas cambiar
const elementToChange = document.getElementById("elementToChange");

// Agrega un manejador de evento para el clic en el botón
closeButton.addEventListener("click", function(event) {
  // Evita que el enlace "#" navegue a una nueva página
  event.preventDefault();
  
  // Verifica el estilo actual y cambia el estilo en función de su estado actual
  if (elementToChange.style.display === "flex") {
    elementToChange.style.display = "none";
  } else {
    elementToChange.style.display = "flex";
  }
});