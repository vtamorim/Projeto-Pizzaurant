const button_reserve = document.getElementById('button_reserve');
const select_element = document.getElementById('select_local');
const inputs = document.querySelectorAll('input');
const label_local = document.getElementById('select_local_label');

if (select_element != null && inputs != null) {
    if (button_reserve != null) {
        button_reserve.addEventListener('click', function() {
            const aviso = document.createElement('div');
            aviso.textContent = 'Reserva realizada com sucesso';
            
            aviso.style.color = 'green';
            // Remove the alert after 3 seconds
            setTimeout(() => {
                aviso.remove();
            }, 3000);
        });
    }
}