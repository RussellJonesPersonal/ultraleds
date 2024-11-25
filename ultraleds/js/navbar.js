function scrollHandler(className = "navbar") {
  document.body.classList.toggle(
    className,
    document.scrollingElement.scrollTop > 10,
  );
}

document.addEventListener("scroll", () => scrollHandler());
scrollHandler();