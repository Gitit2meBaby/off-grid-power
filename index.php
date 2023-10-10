<?php
include('formHandle.php');
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">

    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link
        href="https://fonts.googleapis.com/css2?family=Amiko:wght@400;600;700&family=Hind+Guntur:wght@300;400;500;600&family=Open+Sans:wght@500;600;700;800&display=swap"
        rel="stylesheet">
    <link rel="stylesheet" href="styles.css">
    <link rel="stylesheet" href="quote.css">
    <script type="module" src="quote.js"></script>
    <script defer src="mobile.js"></script>
    <script defer src="script.js"></script>
    <script defer src="testimonial.js"></script>
    <title>Off Grid Power</title>
</head>

<body>
    <header>
        <a href="index.html">
            <div class="logo-container">
                <img id="logo" src="assets/logo-white.webp" alt="off grid power logo">
            </div>
        </a>

        <div class="split-header">
            <div class="contact">
                <div class="phone">
                    <svg stroke="currentColor" fill="#82A888" stroke-width="0" viewBox="0 0 1024 1024" height="1em"
                        width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M885.6 230.2L779.1 123.8a80.83 80.83 0 0 0-57.3-23.8c-21.7 0-42.1 8.5-57.4 23.8L549.8 238.4a80.83 80.83 0 0 0-23.8 57.3c0 21.7 8.5 42.1 23.8 57.4l83.8 83.8A393.82 393.82 0 0 1 553.1 553 395.34 395.34 0 0 1 437 633.8L353.2 550a80.83 80.83 0 0 0-57.3-23.8c-21.7 0-42.1 8.5-57.4 23.8L123.8 664.5a80.89 80.89 0 0 0-23.8 57.4c0 21.7 8.5 42.1 23.8 57.4l106.3 106.3c24.4 24.5 58.1 38.4 92.7 38.4 7.3 0 14.3-.6 21.2-1.8 134.8-22.2 268.5-93.9 376.4-201.7C828.2 612.8 899.8 479.2 922.3 344c6.8-41.3-6.9-83.8-36.7-113.8z">
                        </path>
                    </svg>
                    <p>1800 283 164</p>
                </div>
                <div class="email">
                    <svg stroke="#82A888" fill="none" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em"
                        xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z">
                        </path>
                    </svg>
                    <p>CONTACT US</p>
                </div>
            </div>

            <div class="desktop-nav">
                <a href="index.html">Home</a>
                <div class="dropdown">
                    <p id="productsNavItem">Products</p>
                    <svg id="arrowDown" stroke="#3468B2" fill="#3468B2" stroke-width="1" viewBox="0 0 16 16"
                        height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd"
                            d="M1.646 4.646a.5.5 0 01.708 0L8 10.293l5.646-5.647a.5.5 0 01.708.708l-6 6a.5.5 0 01-.708 0l-6-6a.5.5 0 010-.708z"
                            clip-rule="evenodd"></path>
                    </svg>
                    <svg id="arrowUp" class="hidden" stroke="#82A888" fill="#82A888" stroke-width="1"
                        viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd"
                            d="M7.646 4.646a.5.5 0 01.708 0l6 6a.5.5 0 01-.708.708L8 5.707l-5.646 5.647a.5.5 0 01-.708-.708l6-6z"
                            clip-rule="evenodd"></path>
                    </svg>
                    <div class="dropdown-content hidden">
                        <ul>
                            <a href="SMA.html">
                                <li>SMA Solar Inverters</li>
                            </a>
                            <a href="BYD.html">
                                <li>BYD Lithium Batteries</li>
                            </a>
                            <a href="winaico.html">
                                <li>Winaico Solar Panels</li>
                            </a>
                            <a href="radiant.html">
                                <li>Radiant Solar Racking</li>
                            </a>
                        </ul>
                    </div>
                </div>
                <a href="downloads.html">Download</a>
                <a href="reviews.html">Reviews</a>
            </div>
        </div>
        <button class="quoteBtn invert-btn">Free Quote</button>

    </header>

    <section class="hero">
        <div class="toggle">
            <svg stroke="currentColor" fill="#fff" stroke-width="0" viewBox="0 0 512 512" height="3em" width="3em"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M32 96v64h448V96H32zm0 128v64h448v-64H32zm0 128v64h448v-64H32z"></path>
            </svg>
        </div>
        <div class="mobile-nav">
            <svg id="closeBtn" stroke="#fff" fill="#fff" stroke-width="0" viewBox="0 0 1024 1024" height="3em"
                width="3em" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M354 671h58.9c4.7 0 9.2-2.1 12.3-5.7L512 561.8l86.8 103.5c3 3.6 7.5 5.7 12.3 5.7H670c6.8 0 10.5-7.9 6.1-13.1L553.8 512l122.4-145.9c4.4-5.2.7-13.1-6.1-13.1h-58.9c-4.7 0-9.2 2.1-12.3 5.7L512 462.2l-86.8-103.5c-3-3.6-7.5-5.7-12.3-5.7H354c-6.8 0-10.5 7.9-6.1 13.1L470.2 512 347.9 657.9A7.95 7.95 0 0 0 354 671z">
                </path>
                <path
                    d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z">
                </path>
            </svg>
            <a href="index.html">Home</a>
            <div class="mob-dropdown">
                <p>Products</p>
                <svg id="mobProductArrow" stroke="#fff" fill="#1F1F1F" stroke-width="2" viewBox="0 0 16 16" height="1em"
                    width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd"
                        d="M1.646 4.646a.5.5 0 01.708 0L8 10.293l5.646-5.647a.5.5 0 01.708.708l-6 6a.5.5 0 01-.708 0l-6-6a.5.5 0 010-.708z"
                        clip-rule="evenodd"></path>
                </svg>
            </div>
            <div class="mob-dropdown-content">
                <ul>
                    <a href="SMA.html">
                        <li>Inverters</li>
                    </a>
                    <a href="BYD.html">
                        <li>Batteries</li>
                    </a>
                    <a href="winaico.html">
                        <li>Solar Panels</li>
                    </a>
                    <a href="radiant.html">
                        <li>Solar Racking</li>
                    </a>
                </ul>
            </div>
            <a href="downloads.html">Download</a>
            <a href="reviews.html">Reviews</a>
            <a href="#">Blog</a>
            <button class="quoteBtn">Free Quote</button>
        </div>
        <div class="hero-title">
            <h1>Leading provider of off-grid solar systems</h1>
        </div>
        <div class="empty"></div>
        <div class="hero-content">
            <h2>We design and install efficient and cost-effective systems for remote locations and cabins.</h2>
            <button class="quote quoteBtn">Free Quote</button>
        </div>

    </section>

    <section class="info">
        <div class="info-img">
            <img class="desktop-info-img" src="assets/clip-art800.webp" alt="clip art of an off grid installation">
        </div>
        <div class="info-content">
            <h2>Off Grid Power</h2>
            <h3> Based on the North Coast of NSW, we take pride in sourcing only the highest quality components to
                deliver reliable and long-lasting
                systems.</h3>
            <p>With extensive experience designing off-grid systems, we know that properly assessing your location is
                crucial for energy efficiency. Therefore, we work with you to design a system that meets your needs and
                budget. We understand that off-grid systems can be as diverse as the landscapes they are installed in
                and that the best renewable energy source varies case by case.</p>
            <img class="mob-info-img" src="assets/clip-art450.webp" alt="clip art of an off grid installation">

            <p>Investing in an off-grid system is a significant decision, and our staff takes the time to work with you.
                Off Grid Power leverages our experience and expertise to integrate optimal component combinations for
                complex systems. In summary, we are a trusted provider of off-grid solar systems that delivers
                high-quality, efficient, and cost-effective systems tailored to your unique needs and locations.</p>
        </div>
    </section>

    <div class="cta">
        <div class="counter" id="counter1">
            <h4> <span class="count" id="count1">25</span>+</h4>
            <p>Years Experience</p>
        </div>
        <div class="cta-text">
            <h2>GET<br>THE<br>RIGHT<br>SOLUTION</h2>
        </div>
        <div class="counter" id="counter2">
            <h4> <span class="count" id="count2">1340</span>+</h4>
            <p>Successful Projects</p>
        </div>
        <div class="counter" id="counter3">
            <h4> <span class="count" id="count3">5000</span>km&sup2</h4>
            <p>Area We Cover</p>
        </div>
        <div class="counter" id="counter4">
            <h4> <span class="count" id="count4">100</span>kg</h4>
            <p>CO&sup2 Sequested by our installations</p>
        </div>
    </div>

    <section class="products">
        <div class="products-title">
            <h3>Quality Components</h3>
            <h2>Industry Leading Technologies</h2>
            <div class="divider big"></div>
        </div>

        <div class="product">
            <div class="img-container">
                <img src="assets/SMA.webp" alt="SMA Sunny Island inverter" id="smaDesk">
                <img src="assets/SMA350.webp" alt="SMA Sunny Island inverter" id="smaMob">
            </div>
            <div class="product-content">
                <h4 class="slide-left">SMA SOLAR INVERTERS</h4>
                <div class="divider small"></div>
                <div class="product-info">
                    <p class="slide-up">SMA inverters are devices used in photovoltaic (PV) solar energy systems to
                        convert direct
                        current
                        (DC) electricity generated by solar panels into alternating current (AC) electricity that can be
                        used to power homes and businesses. SMA is a leading manufacturer of solar inverters, offering a
                        range of products to suit different solar power systems and applications. <span
                            class="mob-cut">These inverters are
                            known
                            for their high efficiency, reliability, and versatility, making them a popular choice among
                            residential and commercial solar energy users. Additionally, SMA inverters come equipped
                            with
                            features such as monitoring and communication capabilities, enabling users to easily monitor
                            and
                            manage their solar energy systems.</span></p>
                    <a href="SMA.html">
                        <button class="text-btn">LEARN MORE
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16"
                                height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                    d="M10.146 4.646a.5.5 0 01.708 0l3 3a.5.5 0 010 .708l-3 3a.5.5 0 01-.708-.708L12.793 8l-2.647-2.646a.5.5 0 010-.708z"
                                    clip-rule="evenodd"></path>
                                <path fill-rule="evenodd" d="M2 8a.5.5 0 01.5-.5H13a.5.5 0 010 1H2.5A.5.5 0 012 8z"
                                    clip-rule="evenodd"></path>
                            </svg></button></a>
                </div>
            </div>
        </div>

        <div class="product">
            <div class="img-container">
                <img id="bydMob" src="assets/BYD364.webp" alt="SMA Sunny Island inverter">
            </div>
            <div class="product-content">
                <h4 class="slide-right">BYD LITHIUM BATTERIES</h4>
                <div class="divider small"></div>
                <div class="product-info">
                    <p class="slide-up">BYD LVS (Lithium-ion Vehicle System) battery is a high-performance battery
                        system developed by
                        BYD, a Chinese multinational automobile manufacturer and energy company. It is designed for use
                        in energy storage systems (ESS).

                        The BYD LVS battery features high energy density, which allows for reduced charging time. It is
                        also equipped with a sophisticated battery management system that enhances safety, reliability,
                        and durability. Additionally, the battery system is highly modular, making it flexible for use
                        in different applications and scalable for larger energy storage systems.</p>
                    <a href="BYD.html">
                        <button class="text-btn">LEARN MORE
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16"
                                height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                    d="M10.146 4.646a.5.5 0 01.708 0l3 3a.5.5 0 010 .708l-3 3a.5.5 0 01-.708-.708L12.793 8l-2.647-2.646a.5.5 0 010-.708z"
                                    clip-rule="evenodd"></path>
                                <path fill-rule="evenodd" d="M2 8a.5.5 0 01.5-.5H13a.5.5 0 010 1H2.5A.5.5 0 012 8z"
                                    clip-rule="evenodd"></path>
                            </svg></button></a>
                </div>
            </div>
            <div class="img-container">
                <img id="bydDesk" src="assets/BYD.webp" alt="SMA Sunny Island inverter">
            </div>
        </div>

        <div class="product">
            <div class="img-container">
                <img id="winaicoDesk" src="assets/winaico.webp" alt="SMA Sunny Island inverter">
                <img id="winaicoMob" src="assets/winaico282.webp" alt="SMA Sunny Island inverter">
            </div>
            <div class="product-content">
                <h4 class="slide-left">WINAICO SOLAR PANELS</h4>
                <div class="divider small"></div>
                <div class="product-info">
                    <p class="slide-up">WINAICO is a Taiwanese solar panel manufacturer that is known for producing
                        high-quality,
                        high-performance photovoltaic panels. The company uses high-quality materials and cutting-edge
                        manufacturing processes to produce panels that deliver excellent efficiency and durability.</p>
                    <p class="slide-up">Overall, WINAICO solar panels are known for their high efficiency, durability,
                        and high-quality
                        components. If you are considering solar panels for your home or business, WINAICO is definitely
                        worth considering</p>
                    <a href="winaico.html">
                        <button class="text-btn">LEARN MORE
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16"
                                height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                    d="M10.146 4.646a.5.5 0 01.708 0l3 3a.5.5 0 010 .708l-3 3a.5.5 0 01-.708-.708L12.793 8l-2.647-2.646a.5.5 0 010-.708z"
                                    clip-rule="evenodd"></path>
                                <path fill-rule="evenodd" d="M2 8a.5.5 0 01.5-.5H13a.5.5 0 010 1H2.5A.5.5 0 012 8z"
                                    clip-rule="evenodd"></path>
                            </svg></button></a>
                </div>
            </div>
        </div>

    </section>

    <section class="testimonials">
        <h2>Our Happy Customers</h2>
        <div class="divider bigger"></div>
        <div class="testimonials-container">
            <div class="testimonial">
                <div class="testimonial-title">
                    <h4 id="testimonialTitle">Just The Best. Best Design. Best Install Best Price</h4>
                </div>
                <div class="testimonial-content">
                    <p id="testimonialContent">"Trent and his team are just amazing. From design to install the
                        professionalism, technical
                        knowledge, quality of work was just the best. We would recommend off grid power to anyone who
                        wants quality and confidence in a system designed and installed to generate reliable power to
                        your home. Thanks Trent really appreciate the system."</p>
                </div>
                <div class="testimonial-info">
                    <svg width="100px" height="20px" viewBox="0 0 881 130" version="1.1"
                        xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                        xml:space="preserve" xmlns:serif="http://www.serif.com/"
                        style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;">
                        <g transform="matrix(1,0,0,1,-634.728,-382.568)">
                            <path
                                d="M702.68,382.568L718.721,431.938L770.632,431.938L728.635,462.45L744.677,511.82L702.68,481.308L660.683,511.82L676.724,462.45L634.728,431.938L686.639,431.938L702.68,382.568Z"
                                style="fill:rgb(255,216,0);" />
                        </g>
                        <g transform="matrix(1,0,0,1,-447.914,-382.568)">
                            <path
                                d="M702.68,382.568L718.721,431.938L770.632,431.938L728.635,462.45L744.677,511.82L702.68,481.308L660.683,511.82L676.724,462.45L634.728,431.938L686.639,431.938L702.68,382.568Z"
                                style="fill:rgb(255,216,0);" />
                        </g>
                        <g transform="matrix(1,0,0,1,-261.961,-382.568)">
                            <path
                                d="M702.68,382.568L718.721,431.938L770.632,431.938L728.635,462.45L744.677,511.82L702.68,481.308L660.683,511.82L676.724,462.45L634.728,431.938L686.639,431.938L702.68,382.568Z"
                                style="fill:rgb(255,216,0);" />
                        </g>
                        <g transform="matrix(1,0,0,1,-76.0238,-382.568)">
                            <path
                                d="M702.68,382.568L718.721,431.938L770.632,431.938L728.635,462.45L744.677,511.82L702.68,481.308L660.683,511.82L676.724,462.45L634.728,431.938L686.639,431.938L702.68,382.568Z"
                                style="fill:rgb(255,216,0);" />
                        </g>
                        <g transform="matrix(1,0,0,1,109.853,-382.568)">
                            <path
                                d="M702.68,382.568L718.721,431.938L770.632,431.938L728.635,462.45L744.677,511.82L702.68,481.308L660.683,511.82L676.724,462.45L634.728,431.938L686.639,431.938L702.68,382.568Z"
                                style="fill:rgb(255,216,0);" />
                        </g>
                    </svg>
                    <p id="testimonialName">Lisa Post</p>
                    <h5 id="testimonialDate">Mar 8, 2023</h5>
                </div>
            </div>
        </div>
    </section>

    <section class="banner">
        <img id="award" src="assets/award.webp" alt="Clean energy council award">
        <a href="https://www.winaico.com.au/">
            <img src="assets/winaico-logo.webp" alt="winaicologo">
        </a>
        <a href="https://www.sma-australia.com.au/">
            <img src="assets/SMA-logo.webp" alt="SMA logo">
        </a>
        <a href="https://bydbatterybox.com/">
            <img src="assets/BYD-logo.webp" alt="BYD logo">
        </a>
        <img src="assets/SMA-powerup-logo.webp" alt="SMA Power Up logo">
    </section>

    <footer>
        <div class="footer-cta quoteBtn">
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="5em"
                width="5em" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M428.8 137.6h-86.177a115.52 115.52 0 0 0 2.176-22.4c0-47.914-35.072-83.2-92-83.2-45.314 0-57.002 48.537-75.707 78.784-7.735 12.413-16.994 23.317-25.851 33.253l-.131.146-.129.148C135.662 161.807 127.764 168 120.8 168h-2.679c-5.747-4.952-13.536-8-22.12-8H32c-17.673 0-32 12.894-32 28.8v230.4C0 435.106 14.327 448 32 448h64c8.584 0 16.373-3.048 22.12-8h2.679c28.688 0 67.137 40 127.2 40h21.299c62.542 0 98.8-38.658 99.94-91.145 12.482-17.813 18.491-40.785 15.985-62.791A93.148 93.148 0 0 0 393.152 304H428.8c45.435 0 83.2-37.584 83.2-83.2 0-45.099-38.101-83.2-83.2-83.2zm0 118.4h-91.026c12.837 14.669 14.415 42.825-4.95 61.05 11.227 19.646 1.687 45.624-12.925 53.625 6.524 39.128-10.076 61.325-50.6 61.325H248c-45.491 0-77.21-35.913-120-39.676V215.571c25.239-2.964 42.966-21.222 59.075-39.596 11.275-12.65 21.725-25.3 30.799-39.875C232.355 112.712 244.006 80 252.8 80c23.375 0 44 8.8 44 35.2 0 35.2-26.4 53.075-26.4 70.4h158.4c18.425 0 35.2 16.5 35.2 35.2 0 18.975-16.225 35.2-35.2 35.2zM88 384c0 13.255-10.745 24-24 24s-24-10.745-24-24 10.745-24 24-24 24 10.745 24 24z">
                </path>
            </svg>
            <h2>Click HERE for a free design and quotation</h2>
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="5em"
                width="5em" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M0 220.8C0 266.416 37.765 304 83.2 304h35.647a93.148 93.148 0 0 0 7.929 22.064c-2.507 22.006 3.503 44.978 15.985 62.791C143.9 441.342 180.159 480 242.701 480H264c60.063 0 98.512-40 127.2-40h2.679c5.747 4.952 13.536 8 22.12 8h64c17.673 0 32-12.894 32-28.8V188.8c0-15.906-14.327-28.8-32-28.8h-64c-8.584 0-16.373 3.048-22.12 8H391.2c-6.964 0-14.862-6.193-30.183-23.668l-.129-.148-.131-.146c-8.856-9.937-18.116-20.841-25.851-33.253C316.202 80.537 304.514 32 259.2 32c-56.928 0-92 35.286-92 83.2 0 8.026.814 15.489 2.176 22.4H83.2C38.101 137.6 0 175.701 0 220.8zm48 0c0-18.7 16.775-35.2 35.2-35.2h158.4c0-17.325-26.4-35.2-26.4-70.4 0-26.4 20.625-35.2 44-35.2 8.794 0 20.445 32.712 34.926 56.1 9.074 14.575 19.524 27.225 30.799 39.875 16.109 18.374 33.836 36.633 59.075 39.596v176.752C341.21 396.087 309.491 432 264 432h-21.299c-40.524 0-57.124-22.197-50.601-61.325-14.612-8.001-24.151-33.979-12.925-53.625-19.365-18.225-17.787-46.381-4.95-61.05H83.2C64.225 256 48 239.775 48 220.8zM448 360c13.255 0 24 10.745 24 24s-10.745 24-24 24-24-10.745-24-24 10.745-24 24-24z">
                </path>
            </svg>
        </div>
        <div class="footer-bottom">
            <div class="footer-logo">
                <img src="assets/logo150.webp" alt="Off grid power logo">
            </div>
            <div class="footer-nav footer-nav-main">
                <a href="downloads.html">Download</a>
                <a href="reviews.html">Reviews</a>
                <a class="quoteBtn" href="#">Free Quote</a>
                <a href="#">Blog</a>
            </div>
            <div class="footer-nav">
                <p>Products</p>
                <ul>
                    <a href="SMA.html">
                        <li>SMA Solar Inverters</li>
                    </a>
                    <a href="BYD.html">
                        <li>BYD Lithium Batteries</li>
                    </a>
                    <a href="winaico.html">
                        <li>Winaico Solar Panels</li>
                    </a>
                    <a href="radiant.html">
                        <li>Radiant Solar Racking</li>
                    </a>
                </ul>
            </div>
            <div class="footer-nav footer-contacts">
                <div>
                    <div class="phone">
                        <svg stroke="currentColor" fill="#82A888" stroke-width="0" viewBox="0 0 1024 1024" height="1em"
                            width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M885.6 230.2L779.1 123.8a80.83 80.83 0 0 0-57.3-23.8c-21.7 0-42.1 8.5-57.4 23.8L549.8 238.4a80.83 80.83 0 0 0-23.8 57.3c0 21.7 8.5 42.1 23.8 57.4l83.8 83.8A393.82 393.82 0 0 1 553.1 553 395.34 395.34 0 0 1 437 633.8L353.2 550a80.83 80.83 0 0 0-57.3-23.8c-21.7 0-42.1 8.5-57.4 23.8L123.8 664.5a80.89 80.89 0 0 0-23.8 57.4c0 21.7 8.5 42.1 23.8 57.4l106.3 106.3c24.4 24.5 58.1 38.4 92.7 38.4 7.3 0 14.3-.6 21.2-1.8 134.8-22.2 268.5-93.9 376.4-201.7C828.2 612.8 899.8 479.2 922.3 344c6.8-41.3-6.9-83.8-36.7-113.8z">
                            </path>
                        </svg>
                        <p>1800 283 164</p>
                    </div>
                    <div class="email quoteBtn">
                        <svg stroke="#82A888" fill="none" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em"
                            xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z">
                            </path>
                        </svg>
                        <p>CONTACT US</p>
                    </div>
                </div>
                <div class="mini-nav">
                    <a href="#">- Privacy Policy</a>
                    <a href="#">- FAQ's</a>
                </div>
            </div>
        </div>
    </footer>

    <dialog class="dialog"></dialog>

</body>

</html>