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

    //OBSERVERS FOR SLIDE IN AND UP ELEMENTS
    function handleSlidesIntersection(entries, observer) {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                let animationClass;
                if (entry.target.classList.contains('slide-left')) {
                    animationClass = 'animate-slide-left';
                } else if (entry.target.classList.contains('slide-up')) {
                    animationClass = 'animate-slide-up';
                } else if (entry.target.classList.contains('slide-right')) {
                    animationClass = 'animate-slide-right';
                }

                entry.target.classList.add(animationClass);

                observer.unobserve(entry.target);
            }
        });
    }

    // Initialize Intersection Observers for each class
    const slideLeftElements = document.querySelectorAll('.slide-left');
    const slideUpElements = document.querySelectorAll('.slide-up');
    const slideRightElements = document.querySelectorAll('.slide-right');

    const slideLeftObserver = new IntersectionObserver(handleSlidesIntersection, {
        threshold: .7,
    });
    slideLeftElements.forEach((element) => {
        slideLeftObserver.observe(element);
    });

    const slideUpObserver = new IntersectionObserver(handleSlidesIntersection, {
        threshold: .7,
    });
    slideUpElements.forEach((element) => {
        slideUpObserver.observe(element);
    });

    const slideRightObserver = new IntersectionObserver(handleSlidesIntersection, {
        threshold: .7,
    });
    slideRightElements.forEach((element) => {
        slideRightObserver.observe(element);
    });



    /// COUNTERS
    const counterElements = document.querySelectorAll('.counter');

    function updateCounter(countSpan, targetNumber, currentCount) {
        const step = currentCount < 1000 ? 1 : Math.ceil(targetNumber / 1000);
        const newCount = Math.min(currentCount + step, targetNumber);

        countSpan.textContent = newCount;

        if (newCount < targetNumber) {
            const timeoutInterval = Math.max(1, Math.floor(1000 / currentCount));

            setTimeout(() => updateCounter(countSpan, targetNumber, newCount), timeoutInterval);
        }
    }

    // OBSERVERS FOR COUNTERS
    const observers = [];

    function handleIntersection(entries, observer) {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const countSpan = entry.target.querySelector('.count');
                const targetNumber = parseInt(countSpan.textContent, 10);

                updateCounter(countSpan, targetNumber, 0);
                observer.unobserve(entry.target);
            }
        });
    }

    counterElements.forEach((counterElement, index) => {
        const observer = new IntersectionObserver(handleIntersection, { threshold: 0.1 });
        observers.push(observer);
        observer.observe(counterElement);
    });




});