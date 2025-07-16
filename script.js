const toggleBtn = document.getElementById('navToggle');
const navMenu = document.querySelector('nav');
toggleBtn.addEventListener('click', () => {
  toggleBtn.classList.toggle('active');
  navMenu.classList.toggle('show');
});
