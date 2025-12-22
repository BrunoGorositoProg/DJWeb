// Datos de tus eventos
const events = [
  {
    production: "Ice Producciones",
    subtitle: "By Groove & Grounded",
    participants: ["Muter", "Manu Desrets"]
  },
  {
    production: "Flapper Producciones",
    subtitle: "Flapper X Raffa Callelo",
    participants: ["Rafa Calello", "Fanetti", "Mariano As", "Pablo Allasia"]
  },
  {
    production: "Groove Club",
    subtitle: "By Groove X Bizza",
    participants: ["Bizza", "Movedeck","Jonatan Lisa"]
  },
  {
    production: "Flapper Producciones",
    subtitle: "By Flapper X Nacho Scoppa",
    participants: ["Nacho Scoppa", "Agostina Lxpez"]
  },
  {
    production: "Flapper X Memories",
    subtitle: "By Franco Smitch",
    participants: ["Franco Smitch"]
  }
];

// Elementos del DOM
const productionName = document.querySelector(".production-name");
const memberEvent = document.querySelector(".member-event");
const dots = document.querySelectorAll(".dot");

// Función para actualizar la info del flyer
function updateFlyerInfo(index) {
  const event = events[index];
  productionName.innerHTML = `${event.production}<br>${event.subtitle}`;
  memberEvent.innerHTML = event.participants.join("<br>");

  // Actualizar los dots
  dots.forEach(dot => dot.classList.remove("active"));
  dots[index].classList.add("active");
}

// Inicializar con el primer evento
updateFlyerInfo(0);

// Ejemplo: cuando haces click en un dot
dots.forEach(dot => {
  dot.addEventListener("click", () => {
    const index = parseInt(dot.dataset.index);
    updateFlyerInfo(index);
  });
});

// Aquí puedes agregar la lógica de prev/next del carrusel
document.getElementById("prevBtn").addEventListener("click", () => {
  let currentIndex = [...dots].findIndex(dot => dot.classList.contains("active"));
  let newIndex = (currentIndex - 1 + events.length) % events.length;
  updateFlyerInfo(newIndex);
});

document.getElementById("nextBtn").addEventListener("click", () => {
  let currentIndex = [...dots].findIndex(dot => dot.classList.contains("active"));
  let newIndex = (currentIndex + 1) % events.length;
  updateFlyerInfo(newIndex);
});
