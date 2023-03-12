function animate() {
  gsap.to('.circle', 10, {
    x: gsap.utils.random(-100, 100),
    y: gsap.utils.random(-100, 100),
    onComplete: animate,
    ease: "none"
  })
}

animate()
