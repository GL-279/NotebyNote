const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(open));
});

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
  });
});

document.getElementById('year').textContent = new Date().getFullYear();

function demoSubmit(formId, messageSelector, message) {
  const form = document.getElementById(formId);
  form.addEventListener('submit', event => {
    event.preventDefault();
    const target = form.querySelector(messageSelector);
    target.textContent = message;
    form.reset();
  });
}

demoSubmit(
  'donationForm',
  '.form-message',
  'Thanks! This demo form works visually. Connect it to a form service before publishing.'
);

demoSubmit(
  'requestForm',
  '.request-message',
  'Request received in demo mode. Connect this form to your preferred form service before launch.'
);
