// Get all scrollable elements on the page
const scrollElements = document.querySelectorAll(".scrollable");

console.log(scrollElements)
// Fade out elements
scrollElements.forEach((el) => {
    el.style.opacity = 0
  })


//add scroll listener 
window.addEventListener('scroll', () => {
    handleScrollAnimation();
  })


const elementInView = (el, percentageScroll = 100) => {
    const elementTop = el.getBoundingClientRect().top;
    return (
        elementTop <= 
        ((window.innerHeight || document.documentElement.clientHeight) * (percentageScroll/100))
    );
};

const displayScrollElement = (element) => {
    element.classList.add("scrolled");
  };

const hideScrollElement = (element) => {
element.classList.remove("scrolled");
};


const handleScrollAnimation = () => {
    scrollElements.forEach((el) => {
      if (elementInView(el, 100)) {
        displayScrollElement(el);
      } else {
        hideScrollElement(el);
      }
    })
  }