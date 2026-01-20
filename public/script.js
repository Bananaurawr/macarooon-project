const navToggle = document.getElementById('navToggle');
const miniNav = document.getElementById('miniNav');

// Places where the icon should appear
const visibleSections = [
  document.getElementById('main-menu'),
  document.getElementById('about-us'),
  document.getElementById('contact-info')
];

function checkSectionVisibility() {
  let shouldShow = false;

  // Check if any of the target sections are visible in the viewport
  for (const section of visibleSections) {
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      shouldShow = true;
      break;
    }
  }

  if (shouldShow) {
    navToggle.classList.remove('hidden');
  } else {
    navToggle.classList.add('hidden');
    miniNav.classList.add('hidden');
  }
}

// Check on load and on scroll
checkSectionVisibility();
window.addEventListener('scroll', checkSectionVisibility);

// Toggle mini navbar visibility
navToggle.addEventListener('click', () => {
  miniNav.classList.toggle('show');
});

document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.getElementById('navToggle');
    const miniNav = document.getElementById('miniNav');
    navToggle.addEventListener('click', function() {
        miniNav.classList.toggle('hidden');
    });
});