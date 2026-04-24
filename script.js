const topbar = document.querySelector(".topbar");

if (topbar) {
  let lastScrollY = window.scrollY;

  const syncTopbar = () => {
    const currentScrollY = window.scrollY;
    const scrollingDown = currentScrollY > lastScrollY;
    const passedThreshold = currentScrollY > 80;

    topbar.classList.toggle("topbar-hidden", scrollingDown && passedThreshold);
    lastScrollY = currentScrollY;
  };

  window.addEventListener("scroll", syncTopbar, { passive: true });
}
