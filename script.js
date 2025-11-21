const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

const aboutSection = document.querySelector('.about');
const skillsSection = document.querySelector('.skills');

if (aboutSection) {
  observer.observe(aboutSection);
}

if (skillsSection) {
  observer.observe(skillsSection);
}
