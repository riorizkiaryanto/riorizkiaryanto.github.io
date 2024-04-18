{/* <script> */}
document.addEventListener("DOMContentLoaded", function() {
    const testimoniContainer = document.querySelector('.testimoni-container');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');

    let currentIndex = 0;
    let isAnimating = false;

    prevBtn.addEventListener('click', function() {
        if (currentIndex > 0 && !isAnimating) {
            currentIndex--;
            scrollToTestimonial(currentIndex);
        }
    });

    nextBtn.addEventListener('click', function() {
        if (currentIndex < testimoniContainer.children.length - 1 && !isAnimating) {
            currentIndex++;
            scrollToTestimonial(currentIndex);
        }
    });

    testimoniContainer.addEventListener('scroll', function() {
        currentIndex = Math.round(testimoniContainer.scrollLeft / testimoniContainer.offsetWidth);
        updateNavigationButtons(currentIndex);
    });

    function scrollToTestimonial(index) {
        const testimonial = testimoniContainer.children[index];
        isAnimating = true;
        testimoniContainer.scrollLeft = testimonial.offsetLeft - testimoniContainer.offsetLeft;
        setTimeout(() => {
            isAnimating = false;
        }, 500); // Adjust the delay as needed
        updateNavigationButtons(index);
    }

    function updateNavigationButtons(index) {
        if (index === 0) {
            prevBtn.disabled = true;
        } else {
            prevBtn.disabled = false;
        }

        if (index === testimoniContainer.children.length - 1) {
            nextBtn.disabled = true;
        } else {
            nextBtn.disabled = false;
        }
    }

    // Initialize navigation buttons state
    updateNavigationButtons(currentIndex);
});
//   </script>

// Function to scroll to the top of the page
function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
  
  // Show or hide the scroll-to-top button based on the scroll position
  window.onscroll = function() {scrollFunction()};
  
  function scrollFunction() {
    var scrollToTopBtn = document.getElementById("scrollToTopBtn");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      scrollToTopBtn.style.display = "block";
    } else {
      scrollToTopBtn.style.display = "none";
    }
  }