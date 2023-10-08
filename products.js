const dropdownTitles = document.querySelectorAll('.dropdown-title');
const dropdownArrows = document.querySelectorAll('.winaicoArrows');
const winaicoDropdowns = document.querySelectorAll('.winaico-dropdown-content');

dropdownTitles.forEach((dropdownTitle) => {
    dropdownTitle.addEventListener('click', (e) => {
        const currentDropdown = e.currentTarget.nextElementSibling;
        const currentArrow = e.currentTarget.querySelector('.winaicoArrows');

        dropdownTitles.forEach((title) => {
            title.classList.remove('grow')
        })
        dropdownArrows.forEach((arrow) => {
            arrow.classList.remove('rotate')
        })

        winaicoDropdowns.forEach((dropdown) => {
            dropdown.classList.remove('active')
        })

        if (currentDropdown && currentArrow) {
            currentDropdown.classList.toggle('active');
            currentArrow.classList.toggle('rotate');
            dropdownTitle.classList.toggle('grow')
        }
    });
});

//OBSERVERS FOR SLIDE IN AND UP ELEMENTS
function handleListItemIntersection(entries, observer) {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('slide-left');
            console.log('observed')

            observer.unobserve(entry.target);
        }
    });
}
// Initialize Intersection Observers for each class
const bydListItems = document.querySelectorAll('.bydListItem')

const slideLeftObserver = new IntersectionObserver(handleListItemIntersection, {
    threshold: 1,
});
bydListItems.forEach((element) => {
    slideLeftObserver.observe(element);
});
