const $menu = document.getElementById("menu");
const $nav = document.querySelector("nav");

document.addEventListener("click", (e) =>{

  if(e.target.matches(".menu") || e.target.matches(".menu *") ){
    e.preventDefault();
    $menu.classList.toggle("active");
    $nav.classList.toggle("active");
  }

  if(e.target.matches("nav.active a[data-nav]")){
    e.preventDefault();
    $menu.classList.remove("active");
    $nav.classList.remove("active");
  }

})
