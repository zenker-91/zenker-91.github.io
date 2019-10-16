let left_button = document.querySelector('.left_button');
let right_button = document.querySelector('.right_button');
let slider = document.querySelector('.slider');
let slider_size = document.getElementsByClassName('slider_item').length - 1 ;
let pos = 0;

left_button.onclick = slider_right;
right_button.onclick = slider_left;


function slider_left() {
  if (pos > -680*slider_size) {
    pos -= 680;
    slider.style.left = pos + 'px';
  } 
}

function slider_right() {
  if (pos < 0) {
  pos += 680;
  slider.style.left = pos + 'px';
  }
}
