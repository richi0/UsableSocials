setInterval(() => {
  // Youtube Section
  const preview = document.querySelectorAll(
    '[is-reel-item-style-avatar-circle =""]'
  );
  preview.forEach((el) => {
    el.style.display = "none";
  });

  const shortCloseButtons = document.querySelectorAll(
    '[aria-label="Not interested"]'
  );
  Array.from(shortCloseButtons).forEach((el) => {
    el.click();
  });

  // Linkedin Section
  const posts = document.getElementsByClassName("update-components-header");
  Array.from(posts).forEach((el) => {
    const links = el.getElementsByTagName("a");
    if (links.length == 0) {
      el.parentElement.parentElement.style.display = "none";
    }
  });

  // Blick Section
  document.body.className = "";
  const modals = document.querySelectorAll(".tp-modal");
  const backdrops = document.querySelectorAll(".tp-backdrop");
  Array.from(modals).forEach((el) => {
    el.style.display = "none";
  });
  Array.from(backdrops).forEach((el) => {
    el.style.display = "none";
  });
}, 1000);
