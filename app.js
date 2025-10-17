// Sidebar toggle for smaller screens
// const menuBtn = document.getElementById("menuBtn");
// const sidebar = document.getElementById("sidebar");

// menuBtn.addEventListener("click", () => {
//   sidebar.classList.toggle("-translate-x-full");
// });

//   function toggleSearch() {
//     const input = document.getElementById("mobileSearch");
//     input.classList.toggle("hidden");
//     if (!input.classList.contains("hidden")) {
//       input.focus();
//     }

const menuBtn = document.getElementById("menuBtn");
const menuStuff = document.getElementById("menuStuff");

menuBtn.addEventListener("click", () => {
  menuStuff.classList.toggle("hidden");
});
