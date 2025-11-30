document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('feedback-form');
    const thankYouMessage = document.getElementById('thank-you-message');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); 


        const formData = new FormData(form);
        

        if (formData.get('feedback').trim() === '') {
            alert('Feedback cannot be empty.');
            return;
        }

        thankYouMessage.style.display = 'block';


        form.reset();
    });
});
