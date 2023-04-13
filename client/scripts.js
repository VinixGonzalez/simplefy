$(document).ready(() => {
  // Function to scroll up smoothly when click in the icon on footer
  $("#icon-go-up, #icon-go-up-desktop").on("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Function to change color from button when hover
  $("#contact-us-btn").on("mouseenter", () => {
    $("#contact-us-btn-arrow-icon").attr(
      "src",
      "./assets/arrow_right_orange.svg"
    );
  });

  $("#contact-us-btn").on("mouseleave", () => {
    $("#contact-us-btn-arrow-icon").attr(
      "src",
      "./assets/arrow_right_black.svg"
    );
  });

  // Function to change color from button when hover
  $("#contact-us-btn-2, #enviar-form").on("mouseenter", () => {
    $("#contact-us-btn-2-arrow-icon, #enviar-form-arrow-icon").attr(
      "src",
      "./assets/arrow_right_orange.svg"
    );
  });
  $("#contact-us-btn-2, #enviar-form").on("mouseleave", () => {
    $("#contact-us-btn-2-arrow-icon, #enviar-form-arrow-icon").attr(
      "src",
      "./assets/arrow_right_black.svg"
    );
  });

  // Form validation
  $("#enviar-form").on("click", (e) => {
    e.preventDefault();

    let hasErrors = false;

    // validação do nome
    const nome = $("#nome");
    const nomeError = nome.next("span");
    if (nome.val().trim() === "") {
      nomeError.removeClass("d-none").text("Nome é obrigatório.");
      hasErrors = true;
    } else {
      nomeError.addClass("d-none").text("");
    }

    // validação do email
    const email = $("#email");
    const emailError = email.next("span");
    const emailRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    if (email.val().trim() === "") {
      emailError.removeClass("d-none").text("Email é obrigatório.");
      hasErrors = true;
    } else if (!emailRegex.test(email.val().trim())) {
      emailError.removeClass("d-none").text("Email inválido.");
      hasErrors = true;
    } else {
      emailError.addClass("d-none").text("");
    }

    // validação da checkbox de política de privacidade
    const checkbox = $("#check-privacy-policy");
    if (!checkbox.is(":checked")) {
      hasErrors = true;
      alert("Por favor, aceite a política de privacidade.");
      return;
    }

    if (hasErrors) {
      return;
    }
  });

  // Function to change the section 1 image on resize/device width
  function updateImage() {
    const screenWidth = $(window).width();
    const img = $("#img-section-1");

    if (screenWidth >= 768 && screenWidth <= 1024) {
      img.attr("src", "assets/section-1-tablet.png");
    } else {
      img.attr("src", "assets/section-1.png");
    }

    if (screenWidth > 1024) {
      img.attr("src", "assets/section-1-desktop.png");
    }
  }

  $(window).on("resize", updateImage);

  // Function Button "Fale Conosco"
  $("#contact-us-btn").on("click", () => {
    document.querySelector("#section-5").scrollIntoView({ behavior: "smooth" });
  });
});
