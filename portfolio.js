// Get references to the navigation links and sections
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section');

// Function to handle navigation clicks
function handleNavigationClick(event) {
  event.preventDefault();

  // Remove the "active" class from all navigation links
  navLinks.forEach(link => link.classList.remove('active'));

  // Add the "active" class to the clicked link
  this.classList.add('active');

  // Get the target section's ID from the link's href
  const targetId = this.getAttribute('href').substring(1);

  // Hide all sections
  sections.forEach(section => {
    section.style.display = 'none';
  });

  // Show the target section
  const targetSection = document.getElementById(targetId);
  if (targetSection) {
    targetSection.style.display = 'block';
  }
}

// Attach the click event handler to the navigation links
navLinks.forEach(link => {
  link.addEventListener('click', handleNavigationClick);
});

// Show the "About Me" section by default
document.getElementById('about').style.display = 'block';
