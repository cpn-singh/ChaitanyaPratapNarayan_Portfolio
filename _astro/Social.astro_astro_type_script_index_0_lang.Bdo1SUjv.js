import { g as p } from "./index.D-nlVayj.js";

function initSocialSlider() {
  const container = document.querySelector("#content-social-dk");
  const slides = document.querySelectorAll(".images-container .slide");
  const navDots = document.querySelectorAll(".navigation-social-item");
  const navButtons = document.querySelectorAll(".navigation-social-button");
  const imagesContainer = document.querySelector(".images-container");

  if (!container && slides.length === 0) return;

  const contentItems = Array.from(container?.querySelectorAll(".content-social-item") || []);
  if (slides.length === 0) return;

  let activeIndex = 0;
  let prevIndex = 0;
  let isAnimating = false;
  let timeline = null;

  const wrap = (idx) => {
    const len = slides.length;
    return idx >= 0 ? idx % len : len - 1 + ((idx + 1) % len);
  };

  const getScale = (el, targetH = 392) => {
    const h = el.clientHeight || 392;
    return targetH / h;
  };

  const updateSlide3D = (tl, slideEl, dur, dir, targetH = 294, offsetA = 280, isBack = false) => {
    const scale = getScale(slideEl, targetH);
    const xPos = (slideEl.clientWidth * scale / 2 + offsetA) * dir;
    tl.to(slideEl, {
      duration: dur,
      x: xPos,
      scale: scale,
      ease: "power2.inOut",
      zIndex: isBack ? 1 : 2
    }, "<");
  };

  const render3Slides = (tl, nextActive, dur) => {
    const isLarge = window.innerWidth >= 1680;
    const offsetA = isLarge ? 280 : 160;
    const targetH = isLarge ? 294 : 172;

    tl.set(slides, { zIndex: 0 });
    tl.set(slides[wrap(nextActive - 1)], { zIndex: 2 });
    tl.set(slides[wrap(nextActive + 1)], { zIndex: 1 });
    tl.set(slides[nextActive], { zIndex: 4 });

    tl.to(slides[nextActive], { duration: dur, x: 0, scale: 1, ease: "power2.inOut" }, "<");
    updateSlide3D(tl, slides[wrap(nextActive + 1)], dur, 1, targetH, offsetA);
    updateSlide3D(tl, slides[wrap(nextActive - 1)], dur, -1, targetH, offsetA);
  };

  const goToSlide = (newIndex, immediate = false) => {
    if (newIndex === activeIndex && !immediate) return;
    if (isAnimating && !immediate) return;

    isAnimating = true;
    prevIndex = activeIndex;
    activeIndex = newIndex;

    // 1. Text description synchronization (No overwriting!)
    contentItems.forEach((item, idx) => {
      if (idx === newIndex) {
        item.classList.add("active");
        item.style.setProperty("display", "block", "important");
        item.style.setProperty("opacity", "1", "important");
        item.style.setProperty("visibility", "visible", "important");
        item.style.setProperty("pointer-events", "auto", "important");
      } else {
        item.classList.remove("active");
        item.style.setProperty("display", "none", "important");
        item.style.setProperty("opacity", "0", "important");
        item.style.setProperty("visibility", "hidden", "important");
        item.style.setProperty("pointer-events", "none", "important");
      }
    });

    // 2. Navigation dots synchronization
    navDots.forEach((dot, idx) => {
      if (idx === newIndex) {
        dot.classList.add("active");
      } else {
        dot.classList.remove("active");
      }
    });

    if (window.innerWidth < 1024) {
      isAnimating = false;
      return;
    }

    timeline?.kill();

    if (immediate) {
      const isLarge = window.innerWidth >= 1680;
      const offsetA = isLarge ? 280 : 160;
      const targetH = isLarge ? 294 : 172;

      p.set(slides, { zIndex: 0 });
      p.set(slides[activeIndex], { x: 0, scale: 1, zIndex: 4, opacity: 1 });

      const nextSlide = slides[wrap(activeIndex + 1)];
      const prevSlide = slides[wrap(activeIndex - 1)];

      if (nextSlide) {
        const nextScale = getScale(nextSlide, targetH);
        const nextX = (nextSlide.clientWidth * nextScale / 2 + offsetA);
        p.set(nextSlide, { x: nextX, scale: nextScale, zIndex: 2, opacity: 1 });
      }

      if (prevSlide) {
        const prevScale = getScale(prevSlide, targetH);
        const prevX = -(prevSlide.clientWidth * prevScale / 2 + offsetA);
        p.set(prevSlide, { x: prevX, scale: prevScale, zIndex: 1, opacity: 1 });
      }

      isAnimating = false;
      return;
    }

    timeline = p.timeline({
      onComplete: () => { isAnimating = false; }
    });

    const dur = 0.8;
    render3Slides(timeline, activeIndex, dur);
  };

  const setup = () => {
    if (window.innerWidth < 1024) {
      p.set(slides, { clearProps: "all" });
      if (container) p.set(container, { clearProps: "height" });
      if (imagesContainer) p.set(imagesContainer, { clearProps: "height" });
      return;
    }

    goToSlide(activeIndex, true);
  };

  // Attach click listeners to slides and navigation dots
  slides.forEach((slide, idx) => {
    slide.onclick = () => goToSlide(idx);
  });

  navButtons.forEach((btn, idx) => {
    btn.onclick = () => goToSlide(idx);
  });

  window.addEventListener("resize", setup);
  setup();
}

if (typeof document !== "undefined") {
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initSocialSlider);
  } else {
    initSocialSlider();
  }
  document.addEventListener("astro:page-load", initSocialSlider);
}
