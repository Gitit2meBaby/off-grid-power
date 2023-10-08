const quoteBtns = document.querySelectorAll('.quoteBtn');

quoteBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        showModal()
    });
});