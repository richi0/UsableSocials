setInterval(() => {
  const preview = document.querySelectorAll(
    '[is-reel-item-style-avatar-circle =""]'
  );
  preview.forEach((el) => {
    el.style.display = "none";
  });

  const elements = document.getElementsByTagName("span");
  const suggested = Array.from(elements).filter(
    (el) => el.innerHTML === "Suggested"
  );
  suggested.forEach((el) => {
    let parent = el.parentElement;
    while (!parent.className.includes("relative")) {
      parent = parent.parentElement;
    }
    if (parent) {
      parent.style.display = "none";
    }
  });
}, 1000);
