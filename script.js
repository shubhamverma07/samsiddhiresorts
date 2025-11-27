let currentIndex = 0;
const sliderItems = document.querySelectorAll('.slider-item');
const dots = document.querySelectorAll('.dot');

// Function to show the current slide
function showSlide(index) {
  sliderItems.forEach((item, idx) => {
    item.classList.toggle('active', idx === index);
  });
  dots.forEach((dot, idx) => {
    dot.classList.toggle('active', idx === index);
  });
}

// Function to go to the next slide
function nextSlide() {
  currentIndex = (currentIndex + 1) % sliderItems.length;
  showSlide(currentIndex);
}

// Set an interval for auto-sliding
let sliderInterval = setInterval(nextSlide, 5000);

// Add click event to dots
dots.forEach((dot, idx) => {
  dot.addEventListener('click', () => {
    clearInterval(sliderInterval); // Stop auto-slide
    currentIndex = idx;
    showSlide(currentIndex);
    sliderInterval = setInterval(nextSlide, 5000); // Restart auto-slide
  });
});

// Initial display
showSlide(currentIndex);


document.querySelector('form').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Form submitted successfully!');
  this.reset(); // Reset the form fields
});
