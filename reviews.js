//OBSERVERS FOR SLIDE IN AND UP ELEMENTS
function handleReviewIntersection(entries, observer) {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {

            entry.target.classList.add('slide-up');

            observer.unobserve(entry.target);
        }
    });
}

// Initialize Intersection Observers for each class
const slideUpCards = document.querySelectorAll('.card');

const slideUpObserver = new IntersectionObserver(handleReviewIntersection, {
    threshold: .1,
});
slideUpCards.forEach((element) => {
    slideUpObserver.observe(element);
});
