//Navbar click funktionalität
document.querySelector(".nav-left").addEventListener("click", () => {
  window.location.href = "index.html";
});
document.querySelectorAll(".menu-item").forEach((item) => {
  item.addEventListener("click", () => {
    // Link zur index.html mit dem ID-Parameter der Sektion
    const sectionId = item.id; // Menü-ID muss mit dem Section-Namen übereinstimmen
    if (item.id === "biography") {
    } else {
      setTimeout(() => {
        window.location.href = `index.html?section=${sectionId}`;
      }, 250);
    }
  });
});

//Funktion für ausklappen des hamburgerMenu's
function toggleMenu() {
  const navRight = document.querySelector(".nav-right");
  const hamburger = document.getElementById("hamburger");

  // Toggle die Klasse "show" für das Menü und "active" für den Hamburger
  navRight.classList.toggle("show");
  hamburger.classList.toggle("active");

  // Scrollen verhindern, wenn das Menü offen ist
  if (navRight.classList.contains("show")) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
}
document.getElementById("hamburger").addEventListener("click", toggleMenu);

//Language dropdown
document.querySelector(".lang-btn").addEventListener("click", function (event) {
  event.stopPropagation();
  const langList = document.querySelector(".lang-list");
  if (langList.classList.contains("active")) {
    langList.classList.remove("active");
  } else {
    langList.classList.add("active");
  }
});
document.querySelectorAll(".lang-row").forEach((item) => {
  const itemLang = item.id;
  item.addEventListener("click", () => {
    //displays selected language text
    document.querySelectorAll(".bio-txt").forEach((item) => {
      item.classList.remove("active");
    });
    document.querySelector(`.${itemLang}-txt`).classList.add("active");
    //changes button inhalt
    document.querySelectorAll(".btn-inhalt").forEach((item) => {
      item.classList.remove("active");
    });
    document.querySelector(`.btn-${itemLang}`).classList.add("active");
    //changes Header to chosen language
    document.querySelectorAll(".sec-heading").forEach((item) => {
      item.classList.remove("active");
    });
    document.querySelector(`.bio-${itemLang}`).classList.add("active");
    //closes pop-up
    document.querySelector(".lang-list").classList.remove("active");
  });
});
window.onclick = function (event) {
  if (!event.target.matches(".lang-list")) {
    document.querySelector(".lang-list").classList.remove("active");
  }
};
