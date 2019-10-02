var slideIndex = 1;
const reset_number = 9999; // reset_number > max slides.legth
let classes_array = [];


function showSlides(n, className) {
  var slides = document.getElementsByClassName(className);
  if (n>slides.length) {slideIndex = 1}
  if (n<1) {slideIndex = slides.length}
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  slides[slideIndex - 1].style.display = 'flex';
}

function plusSlide(n, className) {
  showSlides(slideIndex += n, className);
}

function currentSlide(n, className) {
  showSlides(slideIndex = n, className);
}

function resetSliders(classes_array) {
classes_array.forEach(element => {
  showSlides(reset_number, element);
});
}


// For second slider
var counter_index;
var arr_size;
counter_index = 1;
var block_size = 224;
var position = 0;
var counter;


function initialize_counter(id) {
counter = document.getElementById(id);
arr_size = (document.getElementsByClassName('feedback_slider_item')).length;
counter.textContent = (counter_index)  + '/' + arr_size;
}

function increase_counter () {
counter_index++;
if (counter_index > arr_size) { counter_index = arr_size;}
counter.textContent = counter_index + '/' + arr_size;
}

function decrease_counter () {
counter_index--;
if (counter_index < 1) { counter_index = 1;}
counter.textContent = counter_index + '/' + arr_size;
}

function move_slider_left () {
  var feedback_slider = document.getElementById('feedback_slider');
  position = position-block_size;
  final_position = (-(arr_size-1)*block_size);
  if ( position < final_position ) {
    position = final_position;}
  feedback_slider.style.left = position + 'px';
}

function move_slider_right () {
  var feedback_slider = document.getElementById('feedback_slider');
  position = position+block_size;
  if ( position > 0 ) {
    position = 0;} 
  feedback_slider.style.left = position + 'px';
}

// For third slider

var services_block_size = 333;
var position_services = 0;



function move_services_left () {
  var services_inner = document.getElementById('services_inner');
  position_services = position_services-services_block_size;
  services_arr_size = document.getElementsByClassName('services_item').length;
  final_position = (-(services_arr_size-3)*services_block_size);
  if ( position_services < final_position ) {
    position_services = final_position;}
  services_inner.style.left = position_services + 'px';
}

function move_services_right () {
  var services_inner = document.getElementById('services_inner');
  position_services = position_services+services_block_size;
  services_arr_size = document.getElementsByClassName('services_item').length;
  if ( position_services > 0 ) {
    position_services = 0;}
  services_inner.style.left = position_services + 'px';
}
