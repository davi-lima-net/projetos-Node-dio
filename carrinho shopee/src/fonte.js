
import createItem from './services/itens.js';
import * as cartService from './services/carrinho.js';

const cart = []
// const wishlist = [];

console.log("Bem-vindo ao carrinho Shopee");



const item1 = await createItem("Enxada", 50.99, 2);
const item2 = await createItem("Pá", 30.49, 1);


await cartService.addItemToCart(cart, item1);
await cartService.addItemToCart(cart, item2);
await cartService.clearCart(cart, 0);
await cartService.displayCart(cart);
// await cartService.removeItemFromCart(cart, item2.name);

console.log(item1.total());
console.log(item2.total());

console.log("Total do carrinho:");
await cartService.calculateTotal(cart);