document.addEventListener('DOMContentLoaded', () => {
  let slideIndex = 0;
  showSlides();

  function showSlides() {
      let i;
      let slides = document.getElementsByClassName("mySlides");
      let dots = document.getElementsByClassName("dot");
      for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";  
      }
      slideIndex++;
      if (slideIndex > slides.length) {slideIndex = 1}    
      for (i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[slideIndex-1].style.display = "block";  
      dots[slideIndex-1].className += " active";
      setTimeout(showSlides, 3000); // Change image every 3 seconds
  }

  // Smooth scrolling for navigation links
  const links = document.querySelectorAll('.nav-link');
  links.forEach(link => {
      link.addEventListener('click', (e) => {
          e.preventDefault();
          document.querySelector(link.getAttribute('href')).scrollIntoView({
              behavior: 'smooth'
          });
      });
  });

  // Smooth scrolling for Get Started button
  const getStartedBtn = document.querySelector('.get-started-btn');
  getStartedBtn.addEventListener('click', (e) => {
      e.preventDefault();
      document.querySelector(getStartedBtn.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

document.addEventListener('DOMContentLoaded', () => {
  let slideIndex = 0;
  showSlides();

  function showSlides() {
      let i;
      let slides = document.getElementsByClassName("mySlides");
      let dots = document.getElementsByClassName("dot");
      for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";  
      }
      slideIndex++;
      if (slideIndex > slides.length) {slideIndex = 1}    
      for (i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[slideIndex-1].style.display = "block";  
      dots[slideIndex-1].className += " active";
      setTimeout(showSlides, 3000); // Change image every 3 seconds
  }

  // Smooth scrolling for navigation links
  const links = document.querySelectorAll('.nav-link');
  links.forEach(link => {
      link.addEventListener('click', (e) => {
          e.preventDefault();
          document.querySelector(link.getAttribute('href')).scrollIntoView({
              behavior: 'smooth'
          });
      });
  });

  // Smooth scrolling for Get Started button
  const getStartedBtn = document.querySelector('.get-started-btn');
  getStartedBtn.addEventListener('click', (e) => {
      e.preventDefault();
      document.querySelector('#about-section').scrollIntoView({
          behavior: 'smooth'
      });
  });

  // Card scrolling functionality
  const scrollLeftBtn = document.getElementById('scroll-left');
  const scrollRightBtn = document.getElementById('scroll-right');
  const coursesCards = document.querySelector('.courses-cards');
  let scrollPosition = 0;

  scrollLeftBtn.addEventListener('click', () => {
      scrollPosition -= 1000; // Adjust this value based on your card width and margin
      if (scrollPosition < 0) {
          scrollPosition = 0;
      }
      coursesCards.style.transform = `translateX(-${scrollPosition}px)`;
  });

  scrollRightBtn.addEventListener('click', () => {
      const maxScroll = coursesCards.scrollWidth - coursesCards.clientWidth;
      scrollPosition += 1000; // Adjust this value based on your card width and margin
      if (scrollPosition > maxScroll) {
          scrollPosition = maxScroll;
      }
      coursesCards.style.transform = `translateX(-${scrollPosition}px)`;
  });

  // Scroll Up Button functionality
  const scrollUpBtn = document.getElementById('scroll-up-btn');
  window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
          scrollUpBtn.style.display = 'block';
      } else {
          scrollUpBtn.style.display = 'none';
      }
  });

  scrollUpBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// scripts.js
document.addEventListener('DOMContentLoaded', () => {
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const navbarNav = document.getElementById('navbar-nav');

    hamburgerMenu.addEventListener('click', () => {
        navbarNav.classList.toggle('active');
    });
});
});

