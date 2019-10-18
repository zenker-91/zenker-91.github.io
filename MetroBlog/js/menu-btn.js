const menu_btn = document.querySelector('.menu-btn');
const navigation = document.querySelector('.navigation')
const nav_items = document.getElementsByClassName('.nav_item')


menu_btn.onclick = (e) => {
  e.preventDefault;
  if (navigation.style.opacity == "1") {navigation.style.opacity = "0";
setTimeout(() => {
  navigation.style.zIndex = "-1";
}, 300)}
  else {navigation.style.opacity = "1";
  navigation.style.zIndex = "99";
  }

  menu_btn.classList.toggle("menu-btn_active");
  navigation.classList.toggle("nav_active");
}