// use a script tag or an external JS file
document.addEventListener("DOMContentLoaded", (event) => {
    const namaHero = new SplitType("#namaSaya");
    console.log(namaHero.chars)
    const textAbout = new SplitType("#aboutText");
  gsap.registerPlugin(TextPlugin, ScrollTrigger);
  let tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });
  // gsap code here!

  tl.to("#namaSaya .char", {
    y: 0,
    duration: 2,
    stagger: 0.05,
    ease: "power4.out",
  });

  tl.to("#namaSaya", {
    delay: 2,
    duration: 2,
    text: "Web Developer",
    ease: "power4.out",
    opacity: 1,
    onStart: () => {
      document.getElementById("namaSaya").classList.remove("textClipped");
    },
  });

  tl.to("#namaSaya", {
    delay: 2,
    duration: 2,
    text: "Elijah Prasetya",
    ease: "power4.out",
  });

  gsap.from("#aboutImg", {
    scrollTrigger: {
      trigger: "#aboutImg",
      toggleActions: "restart reverse none none",
      scrub: true,
      start: "top center",
    },
    y: 170,
    duration: 3,
    ease: "power4.out",
  });

  gsap.to("#aboutHeader", {
    scrollTrigger: {
      trigger: "#aboutHeader",
      toggleActions: "restart reverse none none",
      start: "top center",
      scrub: true,
    },
    x: 60,
    duration: 2,
    ease: "power4.out",
  });

  gsap.from("#aboutText .char", {
    scrollTrigger: {
      trigger: "#aboutHeader",
      toggleActions: "restart none none none",
      start: "top 70%",
      scrub: true,
    },
    opacity: 0.2,
    duration: 4,
    ease: "power4.out",
    stagger: 2,
  });

  gsap.to("body", {
    scrollTrigger: {
      trigger: "#exploration",
      toggleActions: "restart none none none",
      markers: false,
      scrub: true,
      start: "top center",
      end: "top 5%",
    },
    backgroundColor: "#1c1917",
  });

  gsap.to("#projectHeader", {
    scrollTrigger: {
      trigger: "#exploration",
      toggleActions: "restart none none none",
      markers: false,
      scrub: true,
      start: "top center",
      end: "top 5%",
    },
    color: "#fff7ed",
  });

  // gsap.utils.toArray(".card").forEach((card, i) => {
  //     ScrollTrigger.create({
  //         trigger: card,
  //         start: "top 90px",
  //         pin: true,
  //         pinSpacing: false
  //     })
  // })
});

// Initialize Lenis
const lenis = new Lenis({
  autoRaf: true,
});

// Listen for the scroll event and log the event data
lenis.on("scroll", (e) => {
  console.log(e);
});