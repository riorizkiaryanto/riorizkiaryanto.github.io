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