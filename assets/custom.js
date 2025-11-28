
document.addEventListener("DOMContentLoaded", function () {
  
});

document.addEventListener("scroll", function () {
  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  if (scrollTop < 40) {
    document.body.classList.add('sticky_header_disabled');
  } else {
    document.body.classList.remove('sticky_header_disabled');
  }
});


