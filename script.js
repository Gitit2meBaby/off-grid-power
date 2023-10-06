const productsNavItem = document.querySelector('#productsNavItem');
const arrowDown = document.querySelector('#arrowDown');
const arrowUp = document.querySelector('#arrowUp');
const dropdownContent = document.querySelector('.dropdown-content');

let isDropdownOpen = false;
let closeTimeout;

function openDropdown() {
    isDropdownOpen = true;
    clearTimeout(closeTimeout);
    productsNavItem.style.color = 'var(--green)';
    arrowDown.classList.add('hidden');
    arrowUp.classList.remove('hidden');
    dropdownContent.classList.remove('hidden');
    setTimeout(() => {
        dropdownContent.classList.add('show');
    }, 10);
}

function closeDropdown() {
    clearTimeout(closeTimeout);

    if (!isMouseOverDropdownContent()) {
        closeTimeout = setTimeout(() => {
            isDropdownOpen = false;
            productsNavItem.style.color = '';
            arrowDown.classList.remove('hidden');
            arrowUp.classList.add('hidden');
            dropdownContent.classList.remove('show');
            dropdownContent.classList.add('hidden');
        }, 300);
    }
}

function isMouseOverDropdownContent() {
    const rect = dropdownContent.getBoundingClientRect();
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    return (
        mouseX >= rect.left &&
        mouseX <= rect.right &&
        mouseY >= rect.top &&
        mouseY <= rect.bottom
    );
}

productsNavItem.addEventListener('mouseenter', (event) => {
    openDropdown();
});

productsNavItem.addEventListener('mouseout', (event) => {
    closeDropdown();
});

dropdownContent.addEventListener('mouseenter', () => {
    clearTimeout(closeTimeout);
});

dropdownContent.addEventListener('mouseout', () => {
    closeDropdown();
});


// TESTIMONIALS SLIDER

