document.getElementById('year').textContent = new Date().getFullYear();
document.querySelectorAll('nav a').forEach(a => {
    a.addEventListener('click', () => console.log('Go to', a.getAttribute('href')));
  });