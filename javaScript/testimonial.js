const testimonials = [
    {
        title: "Just The Best. Best Design. Best Install Best Price.",
        content: "Trent and his team are just amazing. From design to install the professionalism, technical knowledge, quality of work was just the best. We would recommend off grid power to anyone who wants quality and confidence in a system designed and installed to generate reliable power to your home. Thanks Trent really appreciate the system.",
        name: "Paul And Carol Francis",
        date: "Mar 8, 2023",
    },
    // {
    // title: "Could Not Be Happier",
    // content: "From the first consultation through to the installation and ongoing support that Trent and the team provided, I have been overwhelmed with the quality of the customer service and the products that they installed. The system suits my needs perfectly and was tailored to my budget, location and energy requirements flawlessly. Trent is passionate about off-grid power, his depth of knowledge and attention to detail is clear from the outset. Thank you for giving everyone the opportunity to be self-reliant no matter what the circumstance.",
    // name: "Daniel Thomas",
    // date: "May 22, 2023",
    // },
    {
        title: "Exceptional Installation",
        content: "Trent and his team were exceptional. The installation had some challenges but they rallied and pushed through. They created the most symmetrical, neat, clean job I have ever seen. I was really emotional when I arrived onsite to see it installed. We can't thank Trent and his team enough. Their knowledge, expertise, gentle & friendly nature was second to none. I would highly recommend Trent and his team for your solar installation.",
        name: "Lisa Post",
        date: "Mar 8, 2023",
    },
    {
        title: "Solar Install",
        content: "Such an amazing service from start to finish, with all the team being really helpful, friendly and professional, and definitely going above and beyond on several occasions. The installation was done with amazing care, and the results have been brilliant. I'd highly recommend the Off Grid Power to anyone.",
        name: "Gabrielle Gawne-Kelnar",
        date: "Mar 1, 2023",
    },
    {
        title: "Off Grid Power Installation",
        content: "Installation was professionally and promptly done. After installation back-up has been available and helpful.\n\nSystem is working well.\n\nRecommended business.",
        name: "John Miller",
        date: "Aug 3, 2022",
    },
    {
        title: "Fantastic",
        content: "Great service, great product, highly recommended for all applications of solar equipment and service… 👍🏾",
        name: "Lindsay Gaddes",
        date: "Apr 19, 2022",
    },
    {
        title: "Off Grid Power",
        content: "Professional and hold to their word. I have used them twice … first for initial install and then for further battery storage additions. Can not recommend them more highly. I am happy to be contacted for further information as it can be rare these days to get their level of service.",
        name: "Robert Borcherdt",
        date: "Mar 6, 2022",
    },
    {
        title: "Solar Power",
        content: "Great company to deal with, total professionals with years of industry experience, that makes the difference when designing and building a system to suit your exact needs.\n\nThere are lots of other companies out there who appear to offer the same, but it is only when you investigate in detail, but you will see a lot are just offering whatever systems they have on hand, not a true engineered custom design based on years of experience and countless installations with very satisfied customers.",
        name: "Tony Reeves",
        date: "Sep 26, 2021",
    },
    {
        title: "Off Grid Power Installation",
        content: "We had a great experience with Off Grid Power. Not only was the service prompt and professional, this was the only fully itemized quote we received out of a total of 6 quotes. Trent really knows off grid solar. His advice was excellent and we have a top of the line system which was cheaper than the more older technology. We would wholeheartedly recommend his company to our friends and family - as well as strangers who might read this online!",
        name: "Ros Cooper",
        date: "Apr 7, 2021",
    },
    {
        title: "Off Grid Power",
        content: "If Quality had a name, it would be Trent Rogers.\n\nThe attention to detail in his quote, his advice and his install exemplifies one who has a passion for, and mastery of, his trade.\n\nThanks so much.",
        name: "Bunyip Creek",
        date: "Aug 29, 2020",
    },

];


// LANDING PAGE TESTIMONIAL SECTION
const testimonial = document.querySelector('.testimonial')
let testimonialTitle = document.querySelector('#testimonialTitle')
let testimonialContent = document.querySelector('#testimonialContent')
let testimonialDate = document.querySelector('#testimonialDate')
let testimonialName = document.querySelector('#testimonialName')

let currentIndex = 0;

function updateTestimonial(index) {
    const currentTestimonial = testimonials[index];
    if (currentTestimonial) {
        testimonial.classList.add('invisible'); // Apply the "hidden" class to start the fade-out transition
        setTimeout(() => {
            testimonialTitle.textContent = currentTestimonial.title;
            testimonialContent.textContent = `"${currentTestimonial.content}"`;
            testimonialDate.textContent = currentTestimonial.date;
            testimonialName.textContent = currentTestimonial.name;
            currentIndex = (currentIndex + 1) % testimonials.length; // Increment and loop back to 0 if at the end

            // Remove the "hidden" class to start the fade-in transition
            testimonial.classList.remove('invisible');
        }, 1000); // Wait for the fade-out transition to complete (1 second)
    }
}

setInterval(() => {
    updateTestimonial(currentIndex);
}, 5000);

