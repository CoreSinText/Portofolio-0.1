// Navbar
// >Open Menu
const icon_navbar = document.querySelector(".icon-navbar");
const list_link = document.querySelector(".list-link");

icon_navbar.addEventListener("click", mobileMenu);

function mobileMenu() {
  icon_navbar.classList.toggle("active");
  list_link.classList.toggle("active");
}
// >Close Menu
const link = document.querySelectorAll(".nav-link");
link.forEach((a) => a.addEventListener("click", closeMenu));
function closeMenu() {
  icon_navbar.classList.toggle("active");
  list_link.classList.toggle("active");
}

// Skills Menu
// Card-Skills 3D
const card = document.querySelectorAll(".card-skills");
for (let i = 0; i < card.length; i++) {
  const card_skill = card[i];
  // >Rotate Card Skills
  card_skill.addEventListener("mousemove", function rotatecard(e) {
    const cardItem = card_skill;
    const halfHeight = cardItem.offsetHeight / 2;

    cardItem.style.transform =
      "rotateX(" +
      (e.offsetY - halfHeight) / 7 +
      "deg) rotateY(" +
      (e.offsetX - halfHeight) / 7 +
      "deg)";
  });

  // >Unrotate Card-Skills
  card_skill.addEventListener("mouseout", function stoprotate() {
    const cardItem = card_skill;
    cardItem.style.transform = "rotate(0)";
  });
}
