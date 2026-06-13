// Solid header on scroll
(function () {
  const header = document.getElementById('header');
  if (!header) return;
  if (header.classList.contains('always-solid')) return;
  const onScroll = () => header.classList.toggle('solid', window.scrollY > 60);
  window.addEventListener('scroll', onScroll);
  onScroll();
})();

// Scroll reveal
(function () {
  const reveals = document.querySelectorAll('.reveal');
  if (!reveals.length) return;
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in'); });
  }, { threshold: 0.15 });
  reveals.forEach(el => io.observe(el));
})();
