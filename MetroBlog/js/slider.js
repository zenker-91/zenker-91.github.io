const left_button = document.querySelector('.left_button');
const right_button = document.querySelector('.right_button');
const slider = document.querySelector('.slider');
const slider_size = document.getElementsByClassName('slider_item').length - 1 ;
const slider_item = document.querySelector('.slider_item');

let slider_frame_width = slider_item.clientWidth;
let pos = 0;
let current_slide = 0;

window.addEventListener('resize', resize);
left_button.addEventListener('click', slider_right);
right_button.addEventListener('click', slider_left);

function current_slide_change() {
  current_slide = (pos-slider_frame_width)/-slider_frame_width;
}

function resize() {
  let old_slider_frame_width = slider_frame_width;
  slider_frame_width = document.querySelector('.slider_item').clientWidth;
  if (old_slider_frame_width != slider_frame_width) {
    pos = (1-current_slide)*slider_frame_width;
    slider_left();
    slider_right();
  }
}

function slider_left() {
  if (pos > -slider_frame_width*slider_size) {
    pos -= slider_frame_width;
    slider.style.left = pos + 'px';
  }
  current_slide_change();
}

function slider_right() {
  if (pos < 0) {
  pos += slider_frame_width;
  slider.style.left = pos + 'px';
  }
  current_slide_change();
}
