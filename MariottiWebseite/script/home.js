// Funktion, die die navFarben verändert sobald man scrolled.
window.addEventListener("scroll", function () {
  requestAnimationFrame(function () {
    var nav = document.querySelector(".nav-container");

    if (window.scrollY > 20) {
      nav.style.backgroundColor = "#100D09";
      if (document.documentElement.clientWidth >= 425) {
        nav.style.borderBottom = "solid #252525 2px";
      } else {
        nav.style.borderBottom = "solid #252525 1px";
      }
      // Hintergrundfarbe ändern
    } else {
      nav.style.backgroundColor = "transparent";
      nav.style.color = "#EAEAEA";
      nav.style.borderBottom = "solid transparent 2px";
      // Zurücksetzen, wenn nach oben gescrollt
    }
  });
});

//Funktion für automatisches scrollen bei navbar drücken
document.querySelector(".nav-left").addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
  setTimeout(() => {
    document.querySelector(".nav-right").classList.remove("show");
    document.getElementById("hamburger").classList.remove("active");
    document.body.style.overflow = "auto";
  }, 1000);
});

document.querySelectorAll(".menu-item").forEach((item) => {
  item.addEventListener("click", () => {
    const targetElement = document.getElementById(item.id + "-section");

    if (item.id === "biography") {
      setTimeout(() => {
        window.location.href = "bio.html";
      }, 250);
    } else {
      if (targetElement) {
        const elementTop =
          targetElement.getBoundingClientRect().top + window.scrollY;

        setTimeout(() => {
          window.scrollTo({
            top: elementTop,
            behavior: "smooth",
          });
        }, 100);
      }
    }
    if (document.documentElement.clientWidth <= 1360) {
      setTimeout(() => {
        document.querySelector(".nav-right").classList.remove("show");
        document.getElementById("hamburger").classList.remove("active");
        document.body.style.overflow = "auto";
      }, 1000);
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

//Funktion das bei mobile navclick ein underline entsteht
const menuItems = document.querySelectorAll(".menu-item");

menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    if (window.innerWidth < 769) {
      menuItems.forEach((el) => el.classList.remove("active"));
      console.log("mobile nav");
      item.classList.add("active");
      setTimeout(() => {
        item.classList.remove("active");
      }, 500);
    }
  });
});

//Mobile btn click animation
/*
const btns = document.querySelectorAll("btnstyle2");
btns.forEach((item) => {
  btns.addEventListener("click", () => {
    if (window.innerWidth < 769) {
      console.log("clicked");
      btns.forEach((el) => el.classList.remove("acitve"));
      item.classList.add("active");
      setTimeout(() => {
        item.classList.remove("active");
      }, 1000);
    }
  });
});
*/

//wenn man von der bio kommt wird man hiermit gleich zur richtigen section gescrolled
window.addEventListener("load", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const sectionId = urlParams.get("section");

  if (sectionId) {
    const targetElement = document.getElementById(sectionId + "-section");
    if (targetElement) {
      const elementTop =
        targetElement.getBoundingClientRect().top + window.scrollY;

      window.scrollTo({
        top: elementTop,
        behavior: "smooth",
      });
    }
  }
});

//Go to Bio
function goToBio() {
  window.location.href = "bio.html";
}

//Cookie Handling
/*
// Funktion zum Setzen eines Cookies
function setCookie(name, value, days) {
  const date = new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000); // Ablaufzeit berechnen
  const expires = "expires=" + date.toUTCString();
  document.cookie = `${name}=${value}; ${expires}; path=/`; // Cookie setzen
}

// Funktion, die beim Akzeptieren des Cookies ausgeführt wird
function acceptCookies() {
  // Cookie für 1 Monat speichern
  setCookie("youtubeConsent", "accepted", 30);

  // "active"-Klasse von der Cookie-Banner-Container entfernen
  const cookieContainer = document.querySelector(".cookie-container");
  if (cookieContainer) {
    cookieContainer.classList.remove("active");
  }

  // Eventlistener von den iFrames entfernen und Cursor zurücksetzen
  const iFrames = document.querySelectorAll("iframe");
  iFrames.forEach((iframe) => {
    iframe.style.pointerEvents = "all"; // Cursor-Event wieder aktivieren
    iframe.removeEventListener("click", showCookieBanner); // Eventlistener entfernen
  });
}

const iFrames = document.querySelectorAll(".iframe-container");

function showCookieBanner() {
  document.querySelector(".cookie-container").classList.add("active");
}

iFrames.forEach((item) => {
  item.addEventListener("click", showCookieBanner);
});

// Eventlistener für den "Akzeptieren"-Button
const acceptButton = document.querySelector(".accept-btn");
if (acceptButton) {
  acceptButton.addEventListener("click", acceptCookies);
}
*/
