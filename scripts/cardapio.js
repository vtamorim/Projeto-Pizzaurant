const orderButtons = document.querySelectorAll(".cardapio_viewer > li button");
const orderList = document.querySelector(".order_maker--list > ul");
const totalPrice = document.getElementById("totalprice");

function addOrderToList(orderIndex, orderName) { // Pega as variáveis lá da lista de elementos
    const orderAmount = parseInt(document.querySelector(`.cardapio_viewer > li:nth-child(${orderIndex}) > div > div > input`).value);
    const orderPrice = (parseFloat(document.querySelector(`.cardapio_viewer > li:nth-child(${orderIndex}) > div > p:first-child > span:last-child`).innerHTML) * orderAmount).toFixed(2);
    const orderSelect = document.querySelector(`.cardapio_viewer > li:nth-child(${orderIndex}) > div > div > select`);
    const orderSize = orderSelect.options[orderSelect.selectedIndex].text;
    const orderNumber = orderIndex.toString().padStart(4, "0"); // Coloca quatro "0"s antes do número.

    if (orderAmount <= 0) return;
    
    const newOrder = document.createElement("li"); // Cria um novo elemento "li" para a lista de pedidos.
    // Coloca o texto específico dele.
    const newOrderName = document.createElement("span");
    newOrderName.textContent = `${orderNumber} - ${orderAmount} ${orderName} ${orderSize}`;
    const newOrderPrice = document.createElement("span");
    newOrderPrice.textContent = `${orderPrice}`;

    newOrder.appendChild(newOrderName);
    newOrder.appendChild(newOrderPrice);
    orderList.appendChild(newOrder);

    totalPrice.innerHTML = (parseFloat(totalPrice.innerHTML) + parseFloat(orderPrice)).toFixed(2); // Atualiza o preço total.
}

for (let i = 0; i < orderButtons.length; i++) {
    orderButtons[i].addEventListener("click", () => {
        addOrderToList(i+1, orderButtons[i].dataset.orderName); // "dataset.orderName" é um atributo data-* do botão no HTML.
    });
}
