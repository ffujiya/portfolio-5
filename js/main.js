window.addEventListener('scroll', () => {
  const header = document.querySelector('#top-header');
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    header.classList.add("header-small");
  }
  else {
    header.classList.remove("header-small");;
  }
})

var mySwiper = new Swiper('.swiper-container', {
  
  loop: true,
  autoHeight: true,
  
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

})

AOS.init();

document.querySelector('#menu-btn').addEventListener('click', function () {
  if (this.checked) {
    document.body.classList.add('lock');
  } else {
    document.body.classList.remove('lock');
  }
})

