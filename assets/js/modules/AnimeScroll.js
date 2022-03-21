export default function animeScroll() {
  const boxes = document.querySelectorAll(".box");

  window.addEventListener("scroll", checkBoxes);

  function debounce(func, wait) {
    let timer = null;
    return function () {
      clearTimeout(timer);
      timer = setTimeout(func, wait);
    };
  }

  window.addEventListener(
    "scroll",
    debounce(function () {
      checkBoxes();
    }, 500)
  );

  function checkBoxes() {
    const triggerTop = window.innerHeight - 100;
    boxes.forEach((box, idx) => {
      const boxTop = box.getBoundingClientRect().top;

      if (boxTop < triggerTop) {
        box.classList.add("show");
      } else {
        box.classList.remove("show");
      }
    });
  }
}
