(() => {
  //************************ navigation waypoint
  const navbar = new Waypoint({
    element: document.getElementById("navbar"),
    handler: function(direction) {
      if (direction === "down") {
        document.querySelector(".nav").classList.remove("nav--land");
        document.querySelector(".nav__left--title").style.visibility =
          "visible";
        document.querySelector(".underline").style.visibility = "visible";
        document.querySelector(".nav-home").classList.add("active");
      } else if (direction === "up") {
        document.querySelector(".nav").classList.add("nav--land");
        document.querySelector(".underline").style.visibility = "hidden";
        document.querySelector(".nav__left--title").style.visibility = "hidden";
        document.querySelector(".nav-home").classList.remove("active");
      }
    }
  });
  //************************ about waypoint
  const section_about = new Waypoint({
    element: document.getElementById("section-about"),
    handler: function(direction) {
      if (direction == "down") {
        document.querySelector(".about__heading").classList.add("fadeIn");
        document.querySelector(".about__spacer").classList.add("fadeIn");
        document.querySelector(".card1").classList.add("fadeInLeft");
        document.querySelector(".card3").classList.add("fadeInRight");
        document.querySelector(".card2").classList.add("fadeInUp");
      }
    },
    offset: "35%"
  });
  //************************ contact waypoint
  const section_contact = new Waypoint({
    element: document.getElementById("contact-section"),
    handler: function(direction) {
      if (direction == "down") {
        console.log("fired");
        document.querySelector(".contact__left").classList.add("fadeInLeft");
        document.querySelector(".contact__right").classList.add("fadeIn");
      }
    },
    offset: "75%"
  });

  //******************** current year
  const year = new Date().getFullYear();
  document.getElementById("year").textContent = year;
})();
