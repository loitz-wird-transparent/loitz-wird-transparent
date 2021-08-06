import barba from '@barba/core';
import gsap from 'gsap';


barba.init({
    transitions: [{
      name: 'default-transition',
      once() {
        gsap.from(".content", {delay: 2, duration: 3, opacity: 0, ease: Power1.easeOut});
        gsap.from("#overlay", {delay: 4, duration: .5, opacity: 0.7, ease: Power1.easeOut});
      },
      enter() {
        gsap.from(".content", {duration: .2, opacity: 0, ease: Power1.easeOut});
      }
    }]
  });


const targets = document.querySelectorAll('img');

const lazyLoad = target => {
  const io = new IntersectionObserver((entries, observer) => {
    console.log(entries)
    entries.forEach(entry => {

      if (entry.isIntersecting) {
        const img = entry.target;
        const src = img.getAttribute('data-lazy');

        img.setAttribute('src', src);
        img.classList.add('fade');

        observer.disconnect();
      }
    });
  });

  io.observe(target)
};

targets.forEach(lazyLoad);

barba.hooks.enter(() => {
  window.scrollTo(0, 0);
});

barba.hooks.enter(() => {
    const targets = document.querySelectorAll('img');

const lazyLoad = target => {
  const io = new IntersectionObserver((entries, observer) => {
    console.log(entries)
    entries.forEach(entry => {

      if (entry.isIntersecting) {
        const img = entry.target;
        const src = img.getAttribute('data-lazy');

        img.setAttribute('src', src);
        img.classList.add('fade');

        observer.disconnect();
      }
    });
  });

  io.observe(target)
};

targets.forEach(lazyLoad);
});