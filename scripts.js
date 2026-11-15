/* Add your JavaScript to this file */
document.addEventListener('DOMContentLoaded', function(){
    const newsletterForm = document.querySelector('.newsletter form');
    const emailInput = document.querySelector('#email');
    const messageDiv = document.querySelector('.newsletter .message');

    if (newsletterForm){
        newsletterForm.addEventListener('submit', function(event){
            event.preventDefault();

            const emailValue = emailInput.value.trim();

            if (emailValue !== "") {
                messageDiv.textContent = 'Thank you! Your email address ${emailValue} has been added to our mailing list!';
            } else {
                messageDiv.textContent = "Please enter a valid email address.";
            }
        })
    }
})