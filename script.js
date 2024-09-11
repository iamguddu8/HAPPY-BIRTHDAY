const slider = document.querySelector('.slider');
const readMoreButtons = document.querySelectorAll('.item .content button');

// Function to change slides
function activate(e) {
  const items = document.querySelectorAll('.item');
  
  if (e.target.matches('.next')) {
    slider.append(items[0]);  // Move the first item to the end
  } else if (e.target.matches('.prev')) {
    slider.prepend(items[items.length - 1]);  // Move the last item to the start
  }
}

// Function for 'Read More' button
function readMore(e) {
  e.stopPropagation();  // Prevents the button click from triggering the slide navigation
  
  const content = e.target.closest('.content');
  const description = content.querySelector('.description');

  // Toggle a class to expand or collapse the description
  description.classList.toggle('expanded');

  if (description.classList.contains('expanded')) {
    e.target.textContent = 'Read Less';
  } else {
    e.target.textContent = 'Read More';
  }
}

// Add event listeners
document.addEventListener('click', activate, false);
readMoreButtons.forEach(button => button.addEventListener('click', readMore));
