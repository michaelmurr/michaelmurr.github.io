function fadeIn() {
  var fadeElems = document.querySelectorAll(".fadeIn");
  for (var i = 0; i < fadeElems.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = fadeElems[i].getBoundingClientRect().top;
    var elementVisible = 150;
    if (elementTop < windowHeight - elementVisible) {
      fadeElems[i].classList.add("active");
    } else {
      fadeElems[i].classList.remove("active");
    }
  }
}

function fadeInUnderline() {
  var fadeElems = document.querySelectorAll(".underline");
  for (var i = 0; i < fadeElems.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = fadeElems[i].getBoundingClientRect().top;
    var elementVisible = 150;
    if (elementTop < windowHeight - elementVisible) {
      fadeElems[i].classList.add("active");
    } else {
      fadeElems[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", fadeIn);
window.addEventListener("scroll", fadeInUnderline);

fadeIn();
fadeInUnderline;
