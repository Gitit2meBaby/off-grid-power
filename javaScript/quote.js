document.addEventListener('DOMContentLoaded', () => {

    const quoteContainer = document.createElement('div')

    quoteContainer.innerHTML = `
<div class="main-title">
        <h1>Please enter your contact details</h1>
        <img src="assets/logo100.webp" alt="Off Grid Power logo">
    </div>
    <form action="https://formsubmit.co/el/vizaca" method="POST" />

    <input type="text" name="_honey" style="display:none">

    <div class="details">
            <label for="name">Name</label>
            <input autocomplete="on" type="text" id="name" name="name" required aria-label="Name">

            <label for="email">Email</label>
            <input autocomplete="on" type="email" id="email" name="email" required aria-label="Email">

            <label for="phone">Phone</label>
            <input autocomplete="on" type="tel" id="phone" name="phone" required aria-label="Phone">

            <label for="address">Address</label>
            <input autocomplete="on" type="text" id="address" name="address" required aria-label="Address">
        </div>

        <div class="add-title">
            <p id="additionalInformation">Additional Information</p>
            <svg stroke="#595959" fill="currentColor" stroke-width=".4" viewBox="0 0 16 16" height="1em" width="1em"
                xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                    d="M1.646 4.646a.5.5 0 01.708 0L8 10.293l5.646-5.647a.5.5 0 01.708.708l-6 6a.5.5 0 01-.708 0l-6-6a.5.5 0 010-.708z"
                    clip-rule="evenodd"></path>
            </svg>
        </div>

        <div id="formDropdown">
            <div class="radios">
                <div class="power-requirement">
                    <p>Power Requirement</p>
                    <label>
                        <input type="radio" id="oneTwo" name="power" checked>
                        1-2 People
                    </label>
                    <label>
                        <input type="radio" id="twoFour" name="power">
                        2-4 People
                    </label>
                    <label>
                        <input type="radio" id="fourSix" name="power">
                        4-6 People
                    </label>
                    <label>
                        <input type="radio" id="commercial" name="power">
                        Commercial Business
                    </label>
                </div>

                <div class="system-size">
                    <p>Size of system required</p>
                    <label>
                        <input type="radio" id="ten" name="size">
                        3.3kW (10 Panels)
                    </label>
                    <label>
                        <input type="radio" id="twenty" name="size">
                        6.6kW (20 Panels)
                    </label>
                    <label>
                        <input type="radio" id="twentyFour" name="size">
                        8kW (24 Panels)
                    </label>
                    <label>
                        <input type="radio" id="fourty" name="size">
                        13.2kW (40 Panels)
                    </label>
                    <label>
                        <input type="radio" id="fourtyFour" name="size">
                        16kW (44 Panels)
                    </label>
                    <label>
                        <input type="radio" id="greater" name="size">
                        Greater than 16kw
                    </label>
                    <label>
                        <input type="radio" id="notSure" name="size" checked>
                        I don't know please advise
                    </label>
                </div>
            </div>

            <div class="usage">
                <label for="usage">Average Daily Electricity Usage kW</label>
                <input type="text" id="usage">

                <label for="hours">What percentage from the above field is used during daylight hours?</label>
                <input type="text" id="hours">
            </div>

            <div class="type">
                <p>Building Type</p>
                <label>
                    <input type="checkbox" id="tin" name="type">
                    Tin Roof
                </label>
                <label>
                    <input type="checkbox" id="tile" name="type">
                    Tile Roof
                </label>
                <label>
                    <input type="checkbox" id="single" name="type">
                    Single Story
                </label>
                <label>
                    <input type="checkbox" id="double" name="type">
                    Double Story
                </label>
                <label>
                    <input type="checkbox" id="shed" name="type">
                    Shed
                </label>
            </div>


            <div class="comments">
                <label for="comments">Please provide any additional comments / information here</label>
                <div class="textarea-wrapper">
                    <textarea placeholder="eg. your budget, are you currently connected to the grid..." name="comments"
                        id="comments" cols="" rows=""></textarea>
                </div>
            </div>
            <div class="btn-container">
            <button type="submit" id="submitForm">Submit</button>
            </div>
            </div>
        </div>
    </form>
`;

    const dialog = document.querySelector('.dialog')
    dialog.appendChild(quoteContainer)

    const quoteBtns = document.querySelectorAll('.quoteBtn');
    let isModalOpen = false

    quoteBtns.forEach((btn) => {
        btn.addEventListener('click', () => {
            dialog.showModal()
            isModalOpen = true
        });
    });
    const addTitleText = document.querySelector('#additionalInformation')
    const addInfoTitle = document.querySelector('.add-title')
    const addInfoContent = document.querySelector('#formDropdown')

    addInfoTitle.addEventListener('click', () => {
        addInfoContent.classList.toggle('show-dropdown')
        addTitleText.classList.add('active-text')
    })

    const name = document.querySelector('#name')
    const phone = document.querySelector('#phone')
    const email = document.querySelector('#email')
    const address = document.querySelector('#address')
    const power = document.querySelector('input[name="power"]:checked').nextSibling.nodeValue.trim();
    const size = document.querySelector('input[name="size"]:checked').nextSibling.nodeValue.trim();
    const usage = document.getElementById('usage').value.trim();
    const hours = document.getElementById('hours').value.trim();
    const comments = document.getElementById('comments').value.trim();

    // Construct email body
    const emailBody = `
    Name: ${name}
    Email: ${email}
    Phone: ${phone}
    Address: ${address}
        Power Requirement: ${power}
        Size of system required: ${size}
        Average Daily Electricity Usage: ${usage} kW
        Percentage used during daylight hours: ${hours}%
        Building Type: ${getSelectedCheckboxes('type').join(', ')}
        Additional Comments: ${comments}
    `;

    const sendEmail = async () => {
        const apiKey = 'YOUR_SENDGRID_API_KEY';
        const url = 'https://api.sendgrid.com/v3/mail/send';

        const data = {
            personalizations: [
                {
                    to: [{ email: 'thisworldofdans@gmail.com' }],
                    subject: 'Contact Form Submission',
                },
            ],
            from: { email: email },
            content: [{ type: 'text/plain', value: emailBody }],
        };

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${apiKey}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                console.log('Email sent successfully');
            } else {
                console.error('Failed to send email');
            }
        } catch (error) {
            console.error('Error sending email:', error);
        }
    };

    // recovery - E48JYSDW4PF6Z9CU6T8KQFK3


});