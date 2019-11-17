const menu_btn = document.querySelector('.menu-btn');
const navigation_mobile = document.querySelector('.navigation_mobile');
const nav_items = document.getElementsByClassName('.nav_item');


menu_btn.onclick = (e) => {
  e.preventDefault;
  if (navigation_mobile.style.opacity == "1") {navigation_mobile.style.opacity = "0";
setTimeout(() => {
  navigation_mobile.style.zIndex = "-1";
}, 300)}
  else {navigation_mobile.style.opacity = "1";
  navigation_mobile.style.zIndex = "99";
  }

  menu_btn.classList.toggle("menu-btn_active");
  navigation_mobile.classList.toggle("nav_active");
}