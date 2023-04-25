import Swiper, { EffectFade, Autoplay, Pagination, Navigation, Mousewheel, Scrollbar } from "swiper";
import anime from "animejs/lib/anime.es";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

Swiper.use([Navigation, Pagination, Autoplay, EffectFade, Mousewheel, Scrollbar]);

const video = document.getElementById('video');

const progressBar = document.querySelector(".progress");
const heroSlider = new Swiper(".js-hero-slider", {
  effect: "fade",
  duration: 500,
  loop: true,
  autoplay: {
    delay: 10000,
    pauseOnMouseEnter: true,
  },
  delayBetweenSlides: 700,
  pagination: {
    el: ".hero-swiper-pagination",
    clickable: true,
  },
  on: {
    init: function (e) {
      // first slide gallery
      anime({
        targets: ".gall-el-anime",
        scale: [
          { value: 0, easing: "easeInOutQuad", duration: 0 },
          { value: 1, easing: "easeInOutQuad", duration: 1000 },
        ],
        opacity: [0, 1],
        delay: anime.stagger(200, { grid: [14, 5], from: "center" }),
      });
    },
    slideChangeTransitionStart: function(e) {
      if (e.activeIndex === 1 || e.activeIndex === 5) {
        heroSlide1Anime();
      }

      if (e.activeIndex === 2) {
        heroSlide2Anime();
      }

      if (e.activeIndex === 3) {
        heroSlide3Anime();
        video.play();
      } else {
        setTimeout(() => {
          video.pause();
          video.currentTime = 0;
        }, 1000)
      }

      if(e.activeIndex === 4) {
        heroSlide4Anime();
      }
    },
  },
});


try {
  progressBar.addEventListener("animationend", myEndFunction);
} catch(e) {
  console.log(e);
}

function myEndFunction() {
  heroSlider.slideNext();
  progressBar.style.animation = "none";
  void progressBar.offsetWidth;
  progressBar.style.animation = null;
}

heroSlider.on("slideChange", function () {
  progressBar.style.animation = "none";
  void progressBar.offsetWidth; 
  progressBar.style.animation = null;
  progressBar.style.animationPlayState = "paused"; 
});


try {
  document.querySelector('.js-hero-slider').addEventListener('mouseenter', () => {
    heroSlider.autoplay.stop();
    progressBar.style.animationPlayState = "paused";
  })
  
  document.querySelector('.js-hero-slider').addEventListener('mouseleave', () => {
    heroSlider.autoplay.start();
    progressBar.style.animationPlayState = "running";
  })
} catch(e) {
  console.log(e);
}

AOS.init({
   disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
   startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
   initClassName: 'aos-init', // class applied after initialization
   animatedClassName: 'aos-animate', // class applied on animation
   useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
   disableMutationObserver: false, // disables automatic mutations' detections (advanced)
   debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
   throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
   
 
   // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
   offset: 0, // offset (in px) from the original trigger point
   delay: 0, // values from 0 to 3000, with step 50ms
   duration: 400, // values from 0 to 3000, with step 50ms
   easing: 'ease', // default easing for AOS animations
   once: true, // whether animation should happen only once - while scrolling down
   mirror: false, // whether elements should animate out while scrolling past them
   anchorPlacement: 'bottom-bottom', // defines which position of the element regarding to window should trigger the animation
 
});

const waySlider = new Swiper(".js-way-slider", {
  duration: 500,
  slidesPerView: 1,
  allowTouchMove: false,
  autoHeight: true,
  on: {
    slideChangeTransitionStart: function(e) {
      if (e.activeIndex === 0) {
        wslide1Anime();
      }

      if (e.activeIndex === 1) {
        wslide2Anime();
      }

      if (e.activeIndex === 2) {
        wslide3Anime();
      }

      if (e.activeIndex === 3) {
        wslide4Anime();
      }
    },
  }
});

function wslide1Anime() {
  anime({
    targets: '.wslide-1-content-anime > *',
    opacity: [0, 1],
    translateY: [50, 0],
    delay: anime.stagger(100, {start: 500}),
    duration: 800,
    easing: "easeInOutQuad",
  });

  anime({
    targets: '.wslide-1-img-anime',
    opacity: [0, 1],
    scale: [
      { value: 0.25, easing: "easeInOutQuad", duration: 0 },
      { value: 1, easing: "easeInOutQuad", duration: 1000 },
    ],
    duration: 1200,
    easing: "easeInOutQuad",
  })

  anime({
    targets: '.wslide-1-white-anime',
    opacity: [0, 1],
    rotate: ['-45deg', '15deg'],
    translateX: ['-50%', '0'],
    duration: 1500,
    easing: "easeInOutQuad",
  });
  
  anime({
    targets: '.wslide-1-yellow-anime',
    opacity: [0, 1],
    delay: 1000,
    translateX: ['100%', '0'],
    duration: 1500,
  })
  
  anime({
    targets: '.wslide-1-red-anime',
    opacity: [0, 1],
    delay: 800,
    translateY: ['100%', 0],
    duration: 1500,
  })
   
  anime({
    targets: '.wslide-1-orange-anime',
    opacity: [0, 1],
    delay: 1200,
    translateY: ['-100%', 0],
    duration: 1500,
  })

  anime({
    targets: '.wslide-1-rcube-anime',
    opacity: [0, 1],
    delay: 300,
    translateX: ['100%', 0],
    duration: 1500,
  })

}

function wslide2Anime() {
  anime({
    targets: '.wslide-2-content-anime > *',
    opacity: [0, 1],
    translateY: [50, 0],
    delay: anime.stagger(100, {start: 500}),
    duration: 800,
    easing: "easeInOutQuad",
  });

  anime({
    targets: '.wslide-2-img-anime',
    opacity: [0, 1],
    translateY: ['50%', 0],
    duration: 800,
    scale: [
      { value: 0.25, easing: "easeInOutQuad", duration: 0 },
      { value: 1, easing: "easeInOutQuad", duration: 1000 },
    ],
    easing: "easeInOutQuad",
  });

  anime({
    targets: '.wslide-2-red-anime',
    opacity: [0, 1],
    delay: 600,
    translateX: ['100%', '0'],
    duration: 1500,
  });

  anime({
    targets: '.wslide-2-white-anime',
    opacity: [0, 1],
    delay: 800,
    rotate: ['15deg', 0],
    translateX: ['100%', '0'],
    duration: 1500,
  })


  anime({
    targets: '.wslide-2-orange-anime',
    opacity: [0, 1],
    delay: 1000,
    translateX: ['-100%', '0'],
    duration: 1500,
  });

  anime({
    targets: '.wslide-2-blue-anime',
    opacity: [0, 1],
    delay: 1000,
    translateY: ['100%', '0'],
    duration: 1500,
  });

  anime({
    targets: '.wslide-2-bordered-anime',
    opacity: [0, 1],
    delay: 1000,
    rotate: ['-35deg', 0],
    translateY: ['-100%', '0'],
    duration: 1800,
  })

  anime({
    targets: ".wslide-2-bcube-anime ",
    opacity: [0, 1],
    delay: 1000,
    translateY: ['-100%', '0'],
    duration: 1500,
  });

}

function wslide3Anime() {
  anime({
    targets: '.wslide-3-content-anime > *',
    opacity: [0, 1],
    translateY: [50, 0],
    delay: anime.stagger(100, {start: 500}),
    duration: 800,
    easing: "easeInOutQuad",
  });

  anime({
    targets: '.wslide-3-img-anime',
    opacity: [0, 1],
    duration: 800,
    scale: [
      { value: 0.25, easing: "easeInOutQuad", duration: 0 },
      { value: 1, easing: "easeInOutQuad", duration: 1000 },
    ],
    easing: "easeInOutQuad",
  });

  anime({
    targets: '.wslide-3-bordered-anime img',
    opacity: [0, 1],
    delay: 600,
    translateX: ['100%', '0'],
    rotate: ['15deg', 0],
    duration: 1500,
  });

  anime({
    targets: '.wslide-3-red-anime',
    opacity: [0, 1],
    delay: 800,
    translateX: ['-100%', '0'],
    duration: 1500,
  });

  anime({
    targets: '.wslide-3-orange-anime',
    opacity: [0, 1],
    delay: 1000,
    translateY: ['-100%', '0'],
    duration: 1500,
  });

  anime({
    targets: '.wslide-3-ocube-anime',
    opacity: [0, 1],
    delay: 1200,
    translateY: ['100%', '0'],
    duration: 1500,
  });
}

function wslide4Anime() {
  anime({
    targets: '.wslide-4-content-anime > *',
    opacity: [0, 1],
    translateY: [50, 0],
    delay: anime.stagger(100, {start: 500}),
    duration: 800,
    easing: "easeInOutQuad",
  });

  anime({
    targets: '.wslide-4-img-anime',
    opacity: [0, 1],
    duration: 800,
    scale: [
      { value: 0.25, easing: "easeInOutQuad", duration: 0 },
      { value: 1, easing: "easeInOutQuad", duration: 1000 },
    ],
    easing: "easeInOutQuad",
  });

  anime({
    targets: '.wslide-4-white-anime',
    opacity: [0, 1],
    duration: 1000,
    delay: 500,
    translateX: ['100%', 0],
  });

  anime({
    targets: '.wslide-4-orange-anime',
    opacity: [0, 1],
    duration: 1200,
    delay: 500,
    translateX: ['-100%', 0],
  });

  anime({
    targets: '.wslide-4-yellow-anime',
    opacity: [0, 1],
    duration: 1000,
    delay: 700,
    translateY: ['100%', 0],
  });

  anime({
    targets: '.wslide-4-green-anime',
    opacity: [0, 1],
    duration: 1000,
    delay: 1000,
    translateY: ['-100%', 0],
  });

  anime({
    targets: '.wslide-4-gcube-anime',
    opacity: [0, 1],
    delay: 1200,
    translateY: ['100%', '0'],
    duration: 1500,
  });

}

anime({
  targets: ".wslide-1-rcube-anime img",
  duration: 1500,
  translateY: 15,
  direction: 'alternate',
  loop: true,
  easing: "easeInOutQuad",
});

anime({
  targets: ".wslide-2-bcube-anime img",
  duration: 1500,
  translateY: 15,
  direction: 'alternate',
  loop: true,
  easing: "easeInOutQuad",
});

anime({
  targets: '.wslide-3-ocube-anime img',
  duration: 1500,
  translateY: 15,
  direction: 'alternate',
  loop: true,
  easing: "easeInOutQuad",
});

anime({
  targets: '.review-ocube-anime img',
  duration: 1500,
  translateY: 15,
  direction: 'alternate',
  loop: true,
  easing: "easeInOutQuad",
});

anime({
  targets: '.review-ycube-anime img',
  duration: 2000,
  translateY: -15,
  direction: 'alternate',
  loop: true,
  easing: "easeInOutQuad",
});

anime({
  targets: '.blog-bcube-anime img',
  duration: 2000,
  translateY: 15,
  direction: 'alternate',
  loop: true,
  easing: "easeInOutQuad",
});

anime({
  targets: '.wslide-4-gcube-anime img',
  duration: 2000,
  translateY: 15,
  direction: 'alternate',
  loop: true,
  easing: "easeInOutQuad",
});

try {
  const heroNextBtn = document.getElementById("hero-next");
  heroNextBtn.addEventListener("click", function (e) {
    e.preventDefault();
    swiperNextSlide(heroSlider);
  });
} catch (e) {
  console.log(e)
}

const eduSlider = new Swiper(".js-edu-slider", {
  slidesPerView: 3,
  spaceBetween: 30,
  mousewheel: {
    forceToAxis: true
  },
  keyboard: true,
  loop: false,
  centeredSlides:false,
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    480: {
      slidesPerView: 1,
    },

    640: {
      slidesPerView: 2,
    },
    1025: {
      slidesPerView: 3,
    },
  },
  scrollbar: {
    el: ".js-edu-slider-scrollbar",
    hide: false,
    draggable: true,
  },
});

try {
  const locomotivesSwiper = new Swiper('.locomotives-swiper', {
    slidesPerView: 4,
    spaceBetween: 32,
    mousewheel: {
      forceToAxis: true
    },
    keyboard: true,
    scrollbar: {
      el: ".js-edu-slider-scrollbar ",
      hide: false,
      draggable: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 8,
      },
      480: {
        slidesPerView: 1,
        spaceBetween: 8,
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 32,
      },
      1025: {
        slidesPerView: 4,
        spaceBetween: 32,
      },
    },
  })
} catch(e) {
  console.log(e);
}

const reviewSlider = new Swiper('.js-review-swiper', {
  slidesPerView: 1,
  effect: "fade",
  duration: 500,
  allowTouchMove: false,
  spaceBetween: 80,
  pagination: {
    el: ".js-review-slider-pagination",
  },
  breakpoints: {
    320: {
      allowTouchMove: true,
    },
    1025: {
      allowTouchMove: false,

    },
  },
})

const reviewBtns = document.querySelectorAll('.js-review-btn');

reviewBtns.forEach((button, index) => {
  button.addEventListener('click', function(e) {
    e.preventDefault();

    for (let i = 0; i < reviewBtns.length; i++) {
      reviewBtns[i].classList.remove("active");
    }

    const currentIndex = parseInt(this.getAttribute('data-index'));
    reviewSlider.slideTo(currentIndex, 500)
    this.classList.add("active");
  })
})

function swiperNextSlide(slider) {
  slider.slideNext();
}

function swiperPrevSlide(slider) {
  slider.slidePrev();
}

const wayBtns = document.querySelectorAll(".way-tab");

wayBtns.forEach((tab, index) => {
  tab.addEventListener("click", function (e) {
    e.preventDefault();

    for (let i = 0; i < wayBtns.length; i++) {
      wayBtns[i].classList.remove("active");
    }

    waySlider.slideTo(index, 500);
    this.classList.add("active");
  });
});

const mobileMenu = document.getElementById("mobile-menu");
const humBtn = document.getElementById("humBtn");
const closeMenuBtn = document.getElementById("closeMenu");

humBtn.addEventListener("click", function (e) {
  e.preventDefault();
  mobileMenu.classList.add("active");
});

closeMenuBtn.addEventListener("click", function (e) {
  e.preventDefault();
  mobileMenu.classList.remove("active");
});


function heroSlide1Anime() {
  anime({
    targets: ".gall-el-anime",
    scale: [
      { value: 0, easing: "easeInOutQuad", duration: 0 },
      { value: 1, easing: "easeInOutQuad", duration: 1000 },
    ],
    opacity: [0, 1],
    delay: anime.stagger(200, { grid: [14, 5], from: "center" }),
  });

  anime({
    targets: ".slide-1-anime .slide-1__info > *",
    translateY: [50, 0],
    opacity: [0, 1],
    delay: function (el, i, l) {
      return (i + 1) * 200;
    },
    duration: 600,
    easing: "easeInOutQuad",
  });
}

function heroSlide2Anime() {
  anime({
    targets: ".slide-2-anime .slide-1__info > *",
    translateY: [50, 0],
    opacity: [0, 1],
    delay: function (el, i, l) {
      return (i + 1) * 200;
    },
    duration: 600,
    easing: "easeInOutQuad",
  }); 

  anime({
    targets: '.slide-2-img-anime',
    opacity: [0, 1],
    scale: [
      { value: 0.25, easing: "easeInOutQuad", duration: 0 },
      { value: 1, easing: "easeInOutQuad", duration: 1000 },
    ],
    rotate: ['-0.1turn', '0turn'],
    duration: 1000,
    easing: "easeInOutQuad",
  });

  anime({
    targets: '.slide-2-bordered-anime',
    opacity: [0, 1],
    delay: 500,
    duration: 1000,
    easing: "easeInOutQuad",
  });

  anime({
    targets: '.slide-2-red-anime',
    opacity: [0, 1],
    delay: 600,
    duration: 1000,
    scale: [
      { value: 0.5, easing: "easeInOutQuad", duration: 0 },
      { value: 1, easing: "easeInOutQuad", duration: 1000 },
    ],
    translateX: ['-50%', 0],
  });

  anime({
    targets: '.slide-2-orange-anime',
    opacity: [0, 1],
    delay: 600,
    translateY: ['-100%', 0],
    duration: 1000,
  });

  anime({
    targets: '.slide-2-yellow-anime',
    opacity: [0, 1],
    delay: 800,
    translateX: ['100%', 0],
    duration: 1500,
  })

  anime({
    targets: '.slide-2-green-anime',
    opacity: [0, 1],
    delay: 1000,
    translateY: ['100%', 0],
    duration: 1500,
  })

  anime({
    targets: '.slide-2-bcube-anime',
    opacity: [0, 1],
    delay: 1000,
    translateY: ['-100%', 0],
    duration: 1500,
  })

  anime({
    targets: '.slide-2-bcube-anime img',
    duration: 1800,
    translateY: 15,
    direction: 'alternate',
    loop: true,
    easing: "easeInOutQuad",
  })
}

function heroSlide3Anime() {
  anime({
    targets: '.slide-3-anime',
    opacity: [0, 1],
    easing: "easeInOutQuad",
    duration: 1000,
  })

  anime({
    targets: '.slide-3-anime > img',
    // width: ['0%', '100%'],
    easing: "easeInOutQuad",
    delay: 100,
    duration: 1000,
  })

  anime({
    targets: ".slide-3-anime > div > *",
    translateY: [50, 0],
    opacity: [0, 1],
    delay: anime.stagger(100, {start: 500}),
    duration: 600,
    easing: "easeInOutQuad",
  });

  anime({
    targets: '.slide-3-rcube-anime',
    opacity: [0, 1],
    delay: 1000,
    translateY: ['100%', 0],
    duration: 1500,
  })

  anime({
    targets: ".slide-3-rcube-anime img",
    duration: 1500,
    translateY: 15,
    direction: "alternate",
    loop: true,
    easing: "easeInOutQuad",
  });
  

  anime({
    targets: '.slide-3-orange-anime',
    opacity: [0, 1],
    delay: 1200,
    translateX: ['100%', 0],
    duration: 1500,
  })

  anime({
    targets: '.slide-3-yellow-anime',
    opacity: [0, 1],
    delay: 1000,
    translateX: ['-100%', 0],
    duration: 1500,
  })

  anime({
    targets: '.slide-3-green-anime',
    opacity: [0, 1],
    delay: 800,
    translateY: ['100%', 0],
    duration: 1500,
  })
}

function heroSlide4Anime() {
  anime({
    targets: ".slide-4-content-anime > *",
    translateY: [50, 0],
    opacity: [0, 1],
    delay: anime.stagger(100, {start: 100}),
    duration: 600,
    easing: "easeInOutQuad",
  });

  anime({
    targets: ".slide-4-bordered-anime",
    opacity: [0, 1],
    rotate: ['45deg', '0deg'],
    scale: [
      { value: 0.25, easing: "easeInOutQuad", duration: 0 },
      { value: 1, easing: "easeInOutQuad", duration: 1000 },
    ],
    delay: 500,
    duration: 1000,
    easing: "easeInOutQuad",
  });

  anime({
    targets: '.slide-4-img-anime',
    opacity: [0, 1],
    scale: [
      { value: 0.25, easing: "easeInOutQuad", duration: 0 },
      { value: 1, easing: "easeInOutQuad", duration: 1000 },
    ],
    duration: 1000,
    easing: "easeInOutQuad",
  });

  anime({
    targets: '.slide-4-orange-anime',
    opacity: [0, 1],
    delay: 1200,
    translateX: ['100%', 0],
    duration: 1500,
  })

  anime({
    targets: '.slide-4-green-anime',
    opacity: [0, 1],
    delay: 1200,
    translateY: ['-100%', 0],
    duration: 1500,
  })

  anime({
    targets: '.slide-4-yellow-anime',
    opacity: [0, 1],
    delay: 1000,
    translateX: ['-100%', 0],
    duration: 1500,
  })

  anime({
    targets: '.slide-4-red-anime',
    opacity: [0, 1],
    delay: 900,
    translateY: ['100%', 0],
    duration: 1500,
  })

  anime({
    targets: '.slide-4-ycube-anime',
    opacity: [0, 1],
    delay: 1500,
    translateY: ['100%', 0],
    duration: 1500,
  })

  anime({
    targets: ".slide-4-ycube-anime img",
    duration: 2000,
    translateY: 15,
    direction: "alternate",
    loop: true,
    easing: "easeInOutQuad",
  });
}


// header animation start
anime({
  targets: ".logo-anime",
  opacity: [0, 1],
  delay: 100,
  duration: 5000,
});

anime({
  targets: "header nav li",
  opacity: [0, 1],
  translateY: [50, 0],
  delay: function (el, i, l) {
    return i * 100;
  },
  duration: 800,
  easing: "easeInOutQuad",
});

anime({
  targets: ".lang-anime",
  opacity: [0, 1],
  translateY: [50, 0],
  delay: 400,
  duration: 800,
  easing: "easeInOutQuad",
});

anime({
  targets: "#humBtn",
  opacity: [0, 1],
  translateY: [50, 0],
  delay: 400,
  duration: 800,
  easing: "easeInOutQuad",
});

anime({
  targets: ".h-controls-anime a",
  opacity: [0, 1],
  translateY: [50, 0],
  delay: function (el, i, l) {
    return (i + 1) * 400;
  },
  duration: 600,
  easing: "easeInOutQuad",
});

// header animation end

// hero screen animation start
anime({
  targets: ".hero-pattern-anime",
  duration: 1000,
  opacity: [0, 1],
  easing: "easeInOutQuad",
});

anime({
  targets: ".hero-ocube-anime ",
  duration: 1500,
  translateX: ['-100%', 0],
});

anime({
  targets: ".hero-ocube-anime img",
  duration: 1500,
  translateY: 15,
  direction: 'alternate',
  loop: true,
  easing: "easeInOutQuad",
});

anime({
  targets: ".hero-blurcube-anime",
  duration: 1500,
  translateY: 10,
  opacity: [0.5, 1],
  direction: 'alternate',
  loop: true,
  easing: "easeInOutQuad",
});

anime({
  targets: ".contacts-gcube-anime",
  duration: 1500,
  translateY: -10,
  direction: 'alternate',
  loop: true,
  easing: "easeInOutQuad",
})

anime({
  targets: ".hero-slogan-anime",
  duration: 1500,
  opacity: [0, 1],
  translateX: ['-100%', 0],
  easing: "easeInOutQuad",
});

anime({
  targets: '.hero-slogancube-anime',
  duration: 1000,
  easing: "easeInOutQuad",
  scale: [
    { value: 0.25, easing: "easeInOutQuad", duration: 0 },
    { value: 1, easing: "easeInOutQuad", duration: 1000 },
  ],
})
// hero screen animation end

anime({
  targets: ".about-gcube-anime img",
  duration: 1500,
  translateY: 15,
  direction: 'alternate',
  loop: true,
  easing: "easeInOutQuad",
});

anime({
  targets: ".about-ycube-anime img",
  duration: 2000,
  translateY: 12,
  direction: 'alternate',
  loop: true,
  easing: "easeInOutQuad",
});

anime({
  targets: ".way-bcube-anime img",
  duration: 2000,
  translateY: 12,
  direction: 'alternate',
  loop: true,
  easing: "easeInOutQuad",
});

anime({
  targets: ".way-gcube-anime img",
  duration: 2500,
  translateY: 12,
  direction: 'alternate',
  loop: true,
  easing: "easeInOutQuad",
});

anime({
  targets: ".way-ocube-anime img",
  duration: 1500,
  translateY: -15,
  direction: 'alternate',
  loop: true,
  easing: "easeInOutQuad",
});

const LANGUAGES = {
  'Русский': 'RU',
  'English': 'EN',
  'Қазақ': 'KZ'
}

window.addEventListener("resize", (event) => {
  try {
    if (window.innerWidth <= 768) {
      $('.js-c-dark').removeClass('c-dark')
    } else {
      $('.js-c-dark').addClass('c-dark')
    }
  } catch(e) {
    console.log(e);
  }
});

window.addEventListener('load', function(e) {
  try {
    if (window.innerWidth <= 768) {
      $('.js-c-dark').removeClass('c-dark')
    } else {
      $('.js-c-dark').addClass('c-dark')
    }
  } catch(e) {
    console.log(e);
  }
})



$("select.dropdown").each(function () {
  let isRegular = $(this).hasClass('regular');
  var dropdown = $("<div />").addClass("dropdown selectDropdown");
  if (isRegular) {
    dropdown.addClass('regular')
  }

  $(this).wrap(dropdown);

  var label = $("<span />")
    .text($(this).attr("placeholder"))
    .insertAfter($(this));
  var list = $("<ul />");

  $(this)
    .find("option")
    .each(function () {
      list.append($("<li />").append($("<a />").text($(this).text())));
    });

  list.insertAfter($(this));

  if ($(this).find("option:selected").length) {
    if (!isRegular) {
      label.text(LANGUAGES[$(this).find("option:selected").text()]);
    } else {
      label.text($(this).find("option:selected").text())
    }
    list
      .find("li:contains(" + $(this).find("option:selected").text() + ")")
      .addClass("active");
    $(this).parent().addClass("filled");
  }
});

$(document).on("click touch", ".selectDropdown ul li a", function (e) {
  e.preventDefault();
  var dropdown = $(this).parent().parent().parent();
  let isRegular = dropdown.hasClass('regular')
  var active = $(this).parent().hasClass("active");
  var label = active
    ? dropdown.find("select").attr("placeholder")
    : $(this).text();

  dropdown.find("option").prop("selected", false);
  dropdown.find("ul li").removeClass("active");

  dropdown.toggleClass("filled", !active);
  if (!isRegular) {
    dropdown.children("span").text(LANGUAGES[label]);
  } else {
    dropdown.children("span").text(label);
  }

  if (!active) {
    dropdown
      .find("option:contains(" + $(this).text() + ")")
      .prop("selected", true);
    $(this).parent().addClass("active");
  }

  dropdown.removeClass("open");
});

$(".dropdown > span").on("click touch", function (e) {
  var self = $(this).parent();
  self.toggleClass("open");
});

$(document).on("click touch", function (e) {
  var dropdown = $(".dropdown");
  if (dropdown !== e.target && !dropdown.has(e.target).length) {
    dropdown.removeClass("open");
  }
});


try {
  const newsTabs = document.querySelectorAll('.js-news-tabs .news-tab__link');

  newsTabs.forEach(tab => {
    tab.addEventListener('click', function(e) {
      e.preventDefault();

      newsTabs.forEach(item => {
        item.classList.remove('active');
      })

      tab.classList.add('active');
    })
  })
} catch(e) {
  console.log(e);
}

try {
  const courseVideo = document.getElementById('course-video');
  const courseVideoPlay = document.getElementById('course-video-play');

  courseVideoPlay.addEventListener('click', function(e) {
    e.preventDefault();
    courseVideoPlay.classList.add('opacity-0');
    courseVideoPlay.classList.add('pointer-events-none');
    courseVideo.setAttribute('controls', true)
    courseVideo.play()
  })

} catch(e) {
  console.log(e);
}

try {
  const modalPlayBtns = $('.js-modal-video-play');

  modalPlayBtns.each(function () {
    $(this).click(function(e) {
      e.preventDefault()
      $(this).addClass('hide')
      const video = $(this).prev();
      video.attr('controls',true);
      video.trigger('play', true)
    })
  })
} catch(e) {
  console.error(e)
}

try {
  $(".js-rating").starRating({
    starSize: 32,
    useFullStars: true,
    emptyColor: 'white',
    hoverColor: '#FFA336',
    activeColor: '#FFA336',
    ratedColor: '#FFA336',
    ratedColors: ['#FFA336', '#FFA336', '#FFA336', '#FFA336', '#FFA336'],
    disableAfterRate: false,
    strokeWidth: 15,
    strokeColor: '#FFA336',
    callback: function(currentRating, $el){
        // make a server call here
    }
});
} catch (e) {
  console.log(e);
}

let speakerInnerSwiper
try {
  speakerInnerSwiper = new Swiper(".speaker-inner-swiper", {
    pagination: {
      el: ".speaker-inner-pagination",
    },
    navigation: {
      nextEl: ".speaker-inner-next",
      prevEl: ".speaker-inner-prev",
    },
    on: {
      slideChange: function() {
        const modalPlayBtns = $('.js-modal-video-play');

        modalPlayBtns.each(function () {
            $(this).removeClass('hide')
            const video = $(this).prev();
            video.attr('controls',false);
            video.trigger('pause', true)
          })
      }
    }
  });
} catch (e) {
  console.log(e);
}

try {
  const speakerInfoSwiper = new Swiper(".speaker-info-swiper", {
    autoHeight: false,
    allowTouchMove: false,
  });

  const speakerTabs = document.querySelectorAll(".js-speaker-info-tab");

  speakerTabs.forEach((tab, index) => {
    tab.addEventListener("click", function (e) {
      e.preventDefault();

      for (let i = 0; i < speakerTabs.length; i++) {
        speakerTabs[i].classList.remove("active");
      }

      speakerInfoSwiper.slideTo(index, 500);
      this.classList.add("active");
    });
  });
} catch (e) {
  console.log(e);
}

try {
  const speakerBtns = document.querySelectorAll('.speaker-open');
  const speakerPlayBtns = document.querySelectorAll('.speaker-play');
  const speakerModal = document.querySelector('.js-speakers-dialog');
  const speakerModalBackdrop = document.querySelector('.modal-backdrop');
  const closeSpeakerModalBtn = speakerModal.querySelector('.modal-dialog-close')
  speakerBtns.forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.preventDefault()
      speakerModal.classList.add('active');
      speakerModalBackdrop.classList.add('active');
    })
  })

  speakerPlayBtns.forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.preventDefault()
      const modalSlides = speakerModal.querySelectorAll('.speaker-inner-swiper .swiper-slide')
      console.log(modalSlides);
      let shouldSkip = false;
      modalSlides.forEach((slide, index) => {
        if (shouldSkip) {
          return;
        }

        if (slide.querySelector('video')) {
          speakerInnerSwiper.slideTo(index);
          shouldSkip = true;
          return
        }
      })
      speakerModal.classList.add('active');
      speakerModalBackdrop.classList.add('active');
    })
  })

  closeSpeakerModalBtn.addEventListener('click', function(e) {
    e.preventDefault()
    speakerModal.classList.remove('active')
    speakerModalBackdrop.classList.remove('active')
    speakerInnerSwiper.slideTo(0)
  })

  speakerModalBackdrop.addEventListener('click', function(e) {
    e.preventDefault()
    speakerModal.classList.remove('active')
    speakerModalBackdrop.classList.remove('active')
    speakerInnerSwiper.slideTo(0)
  })
  
} catch (e) {
  console.log(e);
}


try {
  new Accordion('.accordion-container');
} catch(e) {
  console.log(e);
}

try {
  const reviewMockSwiper = new Swiper('.reviewMockSwiper', {
    slidesPerView: 1,
    allowTouchMove: false,
  });

  const reviewsSwiper = new Swiper('.reviews-swiper', {
    direction: 'vertical',
    slidesPerView: 3,
    spaceBetween: 16,
    centeredSlides: true,
    loop: true,
    navigation: {
      nextEl: ".review-swiper-next",
      prevEl: ".review-swiper-prev",
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      320: {
        direction: 'horizontal',
        slidesPerView: 1,
        centeredSlides: false,
        initialSlide: 0,
        spaceBetween: 0,
      },
      576: {
        direction: 'horizontal',
        slidesPerView: 1,
        centeredSlides: false,
        initialSlide: 0,
        spaceBetween: 0,

      },
      769: {
        direction: 'vertical',
        slidesPerView: 3,
        centeredSlides: true,
        initialSlide: 0,
        spaceBetween: 16,
      },
      1024: {
        direction: 'vertical',

      }
    },
    on: {
      slideChange: function (e) {
        reviewMockSwiper.slideTo(e.activeIndex, 500)
      }
    }
  });

  
} catch (e) {
  console.log(e);
}


try {
  const fields = document.querySelectorAll('.js-char-limit');

  fields.forEach(field => {
    const max = field.querySelector('.js-input-max');
    const current = field.querySelector('.js-input-current');
    current.innerHTML = 0;
    max.innerHTML = field.querySelector('[maxlength]').getAttribute('maxlength')

    field.addEventListener('keyup', function(e) {
      current.innerHTML = e.target.value.length
    })
  })
} catch(e) {
  console.error(e);
}

try {
  const reviewOpenModalBtns = document.querySelectorAll('.js-open-review');
  const reviewModal = document.querySelector('.js-leave-review-modal');
  const reviewBackdrop = document.querySelector('.modal-backdrop')
  const reviewCloseModalBtn = reviewModal.querySelector('.modal-dialog-close');

  reviewOpenModalBtns.forEach(button => {
    button.addEventListener('click', function(e) {
      e.preventDefault();
      reviewModal.classList.add('active');
      reviewBackdrop.classList.add('active')
    })
  })

  reviewCloseModalBtn.addEventListener('click', function(e) {
    e.preventDefault();
    reviewModal.classList.remove('active');
    reviewBackdrop.classList.remove('active')
  })

  reviewBackdrop.addEventListener('click', function(e) {
    e.preventDefault();
    reviewModal.classList.remove('active');
    reviewBackdrop.classList.remove('active')
  })
} catch (e) {
  console.log(e);
}

try {
  const consultationOpenModalBtns = document.querySelectorAll('.js-open-consultation');
  const consultationModal = document.querySelector('.js-consultation-modal');
  const consultationBackdrop = document.querySelector('.modal-backdrop')
  const consultationCloseModalBtn = consultationModal.querySelector('.modal-dialog-close');

  consultationOpenModalBtns.forEach(button => {
    button.addEventListener('click', function(e) {
      e.preventDefault();
      consultationModal.classList.add('active');
      consultationBackdrop.classList.add('active')
    })
  })

  consultationCloseModalBtn.addEventListener('click', function(e) {
    e.preventDefault();
    consultationModal.classList.remove('active');
    consultationBackdrop.classList.remove('active')
  })

  consultationBackdrop.addEventListener('click', function(e) {
    e.preventDefault();
    consultationModal.classList.remove('active');
    consultationBackdrop.classList.remove('active')
  })
} catch (e) {
  console.log(e);
}

try {
  let init = false;

  function swiperCard() {
    if (window.innerWidth <= 768) {
      if (!init) {
        init = true;
        swiper = new Swiper(".courses-mobile-swiper", {
          direction: "horizontal",
          slidesPerView: "auto",
          spaceBetween: 8,
          scrollbar: {
            el: ".js-edu-slider-scrollbar",
            hide: false,
            draggable: true,
          },
        });
      }
    } else if (init) {
      swiper.destroy();
      init = false;
    }
  }
  swiperCard();
  window.addEventListener("resize", swiperCard);
} catch (e) {
  console.error(e);
}