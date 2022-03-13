export default function mobileMenu() {
  const btn = document.querySelector(".btn_mobile");
  const menu = document.querySelector(".menu_mobile");

  btn.addEventListener("click", () => {
    btn.classList.toggle("ativo");
    menu.classList.toggle("ativo");
  });
}
