const productsNavItem = document.querySelector('#productsNavItem');
const arrowDown = document.querySelector('#arrowDown');
const arrowUp = document.querySelector('#arrowUp');
const dropdownContent = document.querySelector('.dropdown-content');

let isDropdownOpen = false;
let closeTimeout;

document.addEventListener("DOMContentLoaded", function () {


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


    // COUNTERS
    const counterElements = document.querySelectorAll('.counter');

    function updateCounter(countSpan, targetNumber, currentCount) {
        if (currentCount < targetNumber) {
            currentCount++;
            countSpan.textContent = currentCount;

            // Choose the setTimeout interval based on the currentCount value
            const timeoutInterval = currentCount > 1000 ? 1 : 100;

            setTimeout(() => updateCounter(countSpan, targetNumber, currentCount), timeoutInterval);
        }
    }


    const observers = [];

    counterElements.forEach((counterElement, index) => {
        const countSpan = counterElement.querySelector('.count');
        const targetNumber = parseInt(countSpan.textContent, 10);

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        updateCounter(countSpan, targetNumber, 0);
                    }
                });
            },
            { threshold: .1 }
        );
        observers.push(observer);
        observer.observe(counterElement);
    });



});