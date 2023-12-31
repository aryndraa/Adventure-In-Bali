// switch title
function switchTitle(sectionId, sectionId2, sectionId3) {
  var title = document.getElementById(sectionId);
  var title2 = document.getElementById(sectionId2);
  var title3 = document.getElementById(sectionId3);

  if (title.classList.contains("active")) {
    title.classList.remove("active");
  } else {
    title.classList.add("active");
    if (
      title2.classList.contains("active") ||
      title3.classList.contains("active")
    ) {
      title2.classList.remove("active");
      title3.classList.remove("active");
    }
  }
}

function changeBackgroundImage(imageURL) {
  var home = document.getElementById("home");
  home.style.backgroundImage = "url(" + imageURL + ")";
  home.style.backgroundSize = "cover";
}

// header aktif
document.addEventListener("DOMContentLoaded", function () {
  var header = document.querySelector(".header");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      header.classList.add("active");
    } else {
      header.classList.remove("active");
    }
  });
});

// about hover
function hoverImage(imageURL) {
  var about = document.getElementById("about");
  about.style.backgroundImage = "url(" + imageURL + ")";
  about.style.backgroundSize = "cover";
}

function resetBackground() {
  var about = document.getElementById("about");
  about.style.backgroundImage = "";
}

// destination
function destiActive(a, b, c, d, e, f, g) {
  if (
    b.classList.contains("active") ||
    c.classList.contains("active") ||
    d.classList.contains("active") ||
    e.classList.contains("active") ||
    f.classList.contains("active") ||
    g.classList.contains("active")
  ) {
    b.classList.remove("active");
    c.classList.remove("active");
    d.classList.remove("active");
    e.classList.remove("active");
    f.classList.remove("active");
    g.classList.remove("active");
    a.classList.add("active");
  }
}

// side
function sideActive() {
  var side = document.getElementById("side");
  if (side.classList.contains("active")) {
    side.classList.remove("active");
  } else {
    side.classList.add("active");
  }
}
