const bookingForm = document.querySelector("#booking-section > form");
const bookingFormLoadingSpan = document.querySelector("#button-book > span");

function validateBookingForm(event) { // Animação do botão de "Carregando"
    event.preventDefault();
    
    bookingFormLoadingSpan.classList.remove("loaded");
    bookingFormLoadingSpan.classList.add("loader"); // Animação de Carregando
    
    setTimeout(() => {
        bookingFormLoadingSpan.classList.remove("loader");
        bookingFormLoadingSpan.classList.add("loaded"); // Animação de Concluído

        setTimeout(() => {
            bookingForm.submit(); // Envia o form
        }, 1000);
    }, 2000);
}

bookingForm.addEventListener("submit", validateBookingForm);
