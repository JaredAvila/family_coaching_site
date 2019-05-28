{
  //************************ about waypoint
  const section_about = new Waypoint({
    element: document.getElementById("section-about"),
    handler: direction => {
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
    handler: direction => {
      if (direction == "down") {
        document.querySelector(".contact__left").classList.add("fadeInLeft");
        document.querySelector(".contact__right").classList.add("fadeIn");
      }
    },
    offset: "75%"
  });

  //******************** current year
  const year = new Date().getFullYear();
  document.getElementById("year").textContent = year;
}
