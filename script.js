particlesJS("particles-js", {
  particles: {
    number: { value: 120, density: { enable: true, value_area: 1200 } },
    color: { value: "#00f7ff" },
    shape: {
      type: "polygon",
      stroke: { width: 0, color: "#00f7ff" },
      polygon: { nb_sides: 6 },
    },
    opacity: {
      value: 0.7,
      random: true,
      anim: { enable: true, speed: 0.5, opacity_min: 0.3 },
    },
    size: {
      value: 5,
      random: true,
      anim: { enable: true, speed: 1, size_min: 2 },
    },
    line_linked: {
      enable: true,
      distance: 100,
      color: "#00f7ff",
      opacity: 0.3,
      width: 0.5,
    },
    move: {
      enable: true,
      speed: 1,
      direction: "top",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: { enable: true, rotateX: 800, rotateY: 800 },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "grab" },
      onclick: { enable: true, mode: "bubble" },
      resize: true,
    },
    modes: {
      grab: { distance: 150, line_linked: { opacity: 0.5 } },
      bubble: { distance: 200, size: 8, duration: 2, opacity: 0.8 },
    },
  },
  retina_detect: true,
});

document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.animation = "slideIn 1s ease-out forwards";
          entry.target.querySelectorAll(".card").forEach((card, index) => {
            card.style.animation = `fadeInUp 1s ease-out ${index * 0.2}s forwards`;
          });
        }
      });
    },
    { threshold: 0.1 }
  );

  sections.forEach((section) => observer.observe(section));
});