

// USoS: ->Adicionar item ao carrinho
async function addItemToCart(userCart, item) {
    userCart.push(item);
}

// ->deletar carrinho
async function removeItemFromCart(userCart, name) {
    const index = userCart.findIndex((item)=> item.name === name);
    if (index !== -1){
        userCart.splice(index, 1);
    }
}

// ->limpar item do carrinho - diminuir itemdo carrinho
async function clearCart(userCart, index) {
    const deleteIndex = - 1;

    if (userCart.length >= 0 && userCart.length) {
        userCart.splice(index, 1);
        console.log("Carrinho limpo com sucesso!");
    }     
}
async function displayCart(userCart){
    console.log("Itens no carrinho:");
    userCart.forEach((item, index) =>{
    console.log(`\n ${index+1}. ${item.name} - R$ ${item.price} 
       ${item.quantity} x | Total ${item.total()}` );
    });
}

// ->Calcular total do carrinho
async function calculateTotal(userCart) {
    const result = userCart.reduce((total, item)=> total + item.total(), 0);
    console.log(`\n🎁Total: ${result}`);
}

export { addItemToCart, removeItemFromCart, clearCart, calculateTotal, displayCart };




// a const foi criada para armazenar o carrinho e os itens para passar corretamente para o serviço de carrinho