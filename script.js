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

// Cookie Basket Functionality
document.getElementById('cookie').addEventListener('click', function() {
    document.querySelector('.cookie-basket').classList.add('active');
});
document.getElementById('closeCookieBasket').addEventListener('click', function() {
    document.querySelector('.cookie-basket').classList.remove('active');
});

// Macaron Basket Functionality
document.getElementById('macaron').addEventListener('click', function() {
    document.querySelector('.macaron-basket').classList.add('active');
});
document.getElementById('closeMacaronBasket').addEventListener('click', function() {
    document.querySelector('.macaron-basket').classList.remove('active');
});

// Cake Basket Functionality
document.getElementById('cake').addEventListener('click', function() {
    document.querySelector('.cake-basket').classList.add('active');
});
document.getElementById('closeCakeBasket').addEventListener('click', function() {
    document.querySelector('.cake-basket').classList.remove('active');
});

// Cookie slider / carousel
(function() {
  const basket = document.querySelector('.cookie-basket');
  if (!basket) return;

  const slides = Array.from(basket.querySelectorAll('.cookie-slider'));
  if (!slides.length) return;

  let current = slides.findIndex(s => s.classList.contains('active'));
  if (current === -1) current = 0;

  function show(i) {
    current = (i + slides.length) % slides.length;
    slides.forEach((s, idx) => s.classList.toggle('active', idx === current));
  }

  const prev = basket.querySelector('.cookie-prev');
  const next = basket.querySelector('.cookie-next');

  if (prev) prev.addEventListener('click', e => { e.stopPropagation(); show(current - 1); });
  if (next) next.addEventListener('click', e => { e.stopPropagation(); show(current + 1); });

  // reset to first slide whenever the basket opens
  const opener = document.getElementById('cookie');
  if (opener) opener.addEventListener('click', () => show(0));

  // init
  show(current);
})();