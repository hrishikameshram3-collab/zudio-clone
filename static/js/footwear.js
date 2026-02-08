document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(
    ".Mens-sub-Banners, .Womens-sub-Banners, .Kids-sub-Banners"
  ).forEach(section => {
    section.style.display = "none";
  });
});

function showFootwearCategory(category) {
  const sections = {
    Mens: document.getElementById("Mens-Banners"),
    Womens: document.getElementById("Womens-Banners"),
    Kids: document.getElementById("Kids-Banners")
  };

  Object.values(sections).forEach(sec => sec.style.display = "none");

    sections[category].style.display = "flex";
  }

  if (sections[category]) {
    sections[category].style.display = "flex";
    sections[category].scrollIntoView({ behavior: "smooth" });
  }

