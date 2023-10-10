const questions = document.querySelectorAll('.question');

questions.forEach((question) => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling; // Find the corresponding answer
        answer.classList.toggle('grow');
    });
});
