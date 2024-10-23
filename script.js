var crsr = document.querySelector("#cursor");
var crsr_blr = document.querySelector("#cursor-blur");

document.addEventListener("mousemove", function (dets) {
  crsr.style.left = dets.clientX + 30 + "px"; // Use clientX
  crsr.style.top = dets.clientY - 0.01 + "px"; // Use clientY
  crsr_blr.style.left = dets.clientX - 190 + "px"; // Use clientX
  crsr_blr.style.top = dets.clientY - 190 + "px"; // Use clientY
});

var h4All = document.querySelectorAll("#nav h4, .elem");
h4All.forEach(function (elem) {
  elem.addEventListener("mouseenter", function () {
    crsr.style.transform = "scale(3)"; // Use transform for scaling
    crsr.style.border = "1px solid #fff";
    crsr.style.backgroundColor = "transparent";
  });

  elem.addEventListener("mouseleave", function () {
    crsr.style.transform = "scale(1)"; // Reset scale
    crsr.style.border = "0px solid #95C11E";
    crsr.style.backgroundColor = "#95C11E";
  });
});

gsap.registerPlugin(ScrollTrigger);

gsap.to("#nav", {
  backgroundColor: "black",
  duration: 0.5,
  height: "110px",
  scrollTrigger: {
    trigger: "#nav",
    scroller: "body",
    // markers: true
    start: "top -10%",
    end: "top -11%",
    scrub: 1,
  },
});

gsap.to("#main", {
  backgroundColor: "#000",
  scrollTrigger: {
    trigger: "#main",
    scroller: "body",
    start: "top -25%",
    end: "top -70%",
    scrub: 2,
  },
});

gsap.from("#about-us img, #about-us-in", {
  y: 90,
  opacity: 0,
  duration: 1,
  // stagger: 0.4,
  scrollTrigger: {
    trigger: "#about-us",
    scroller: "body",
    start: "top 70%",
    end: "top 65%",
    scrub: 2,
  },
});

gsap.from("#cards-containers", {
  scale: 0.8,
  opacity: 0,
  duration: 1,
  // stagger: 0.4,
  scrollTrigger: {
    trigger: "#cards-containers",
    scroller: "body",
    start: "top 70%",
    end: "top 65%",
    scrub: 3,
  },
});


gsap.from("#colon-1", {
  y: -70,
  x: -70,
  scrollTrigger: {
    trigger: "#colon-1",
    scroller: "body",
    start: "top 55%",
    end: "top 45%",
    scrub: 4
  }
});

gsap.from("#colon-2", {
  y: 70,
  x: 70,
  scrollTrigger: {
    trigger: "#colon-1",
    scroller: "body",
    start: "top 55%",
    end: "top 45%",
    scrub: 4
  }
});

gsap.from("#page4 h1", {
  y:50,
  scrollTrigger: {
    trigger: "#page4 h1",
    scroller: "body",
    start: "top 75%",
    end: "top 70%",
    scrub: 3
  }
})
