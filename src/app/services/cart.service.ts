import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart = [];

  constructor() { }


  getCart() {
    return this.cart;
  }
    // addToCart(product) {
  //   this.cart.push(product);
  // }
  addToCart(product) {
    const existingProduct = this.cart.find(p => p.id === product.id);
    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      product.quantity = 1;
      this.cart.push(product);
    }
  }


  // removeFromCart(product) {
  //   const index = this.cart.indexOf(product);
  //   if (index > -1) {
  //     this.cart.splice(index, 1);
  //   }
  // }
  removeFromCart(product) {
    const index = this.cart.findIndex(p => p.id === product.id);
    if (index > -1) {
      const productInCart = this.cart[index];
      if (productInCart.quantity > 1) {
        productInCart.quantity -= 1;
      } else {
        this.cart.splice(index, 1);
      }
    }
  }
  clearCart() {
    this.cart = [];
}
// getSubtotal() {
//   return this.cart.reduce((acc, product) =>
//      acc + product.price * product.quantity, 0);
// }
getSubtotal() {
  return this.cart.reduce((subtotal, item) => {
    return subtotal + (item.price * item.quantity);
  }, 0);
}
}