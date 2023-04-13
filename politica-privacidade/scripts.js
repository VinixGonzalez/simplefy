$(document).ready(() => {
  // Function to scroll up smoothly when click in the icon on footer
  $("#icon-go-up, #icon-go-up-desktop").on("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});
