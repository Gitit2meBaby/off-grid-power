document.addEventListener("DOMContentLoaded", function () {


    // DESKTOP NAV SUBMENU OPEN
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

    // MOBILE MENU
    const toggle = document.querySelector('.toggle');
    const closeBtn = document.querySelector('#closeBtn')
    const mobileNav = document.querySelector('.mobile-nav')

    toggle.addEventListener('click', () => {
        mobileNav.classList.add('open');
    })

    closeBtn.addEventListener('click', () => {
        mobileNav.classList.remove('open');
    })

    // MOBILE MENU DROPDOWN
    const productMenuDisplay = document.querySelector('.mob-dropdown');
    const productDropdown = document.querySelector('.mob-dropdown-content');
    const mobProductToggle = document.querySelector('#mobProductArrow')
    productMenuDisplay.addEventListener('click', () => {
        productDropdown.classList.toggle('active')
        mobProductToggle.classList.toggle('rotate');
    })



    const logo = document.getElementById('logo');

    function adjustImageSize() {
        if (window.innerWidth <= 700) {
            logo.src = "assets/logo-white50.webp"
        } else {
            logo.src = "assets/logo-white.webp"
        }
    }

    // Call the function initially
    adjustImageSize();

    // Add an event listener for the window resize event
    window.addEventListener('resize', adjustImageSize);


});