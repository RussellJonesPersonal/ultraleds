// Set the max height of .tabulator
function updateTabulatorHeight() {

  const filterBar = document.querySelector('#filterBar');
  const filterBarRect = filterBar.getBoundingClientRect();
  const viewingSpace = filterBarRect.bottom;

  const viewportHeight = window.innerHeight;

  const tabulator = document.querySelector('.tabulator');
  tabulator.style.maxHeight = `${viewportHeight - viewingSpace}px`;
}

window.addEventListener('load', updateTabulatorHeight);
window.addEventListener('scroll', updateTabulatorHeight);
window.addEventListener('resize', updateTabulatorHeight);

const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
  link.addEventListener('click', updateTabulatorHeight);
});



// Function to toggle .full-width on #toggle_container and toggle the SVG inside #toggle_width
function toggleFullWidth() {
  const toggleContainer = document.querySelector('#toggle_container');
  const toggleWidthButton = document.querySelector('#toggle_width');
  const svgElements = toggleWidthButton.querySelectorAll('svg'); // Assuming there are multiple SVGs inside

  // Toggle the .full-width class on #toggle_container
  toggleContainer.classList.toggle('full-width');
  
  // Toggle visibility between SVGs (assuming two SVGs, one for expanded, one for collapsed)
  svgElements.forEach(svg => {
      svg.style.display = svg.style.display === 'none' ? 'inline-block' : 'none';
  });
}

// Add event listener for the click event on #toggle_width
const toggleWidthButton = document.querySelector('#toggle_width');
if (toggleWidthButton) {
  toggleWidthButton.addEventListener('click', toggleFullWidth);
}
