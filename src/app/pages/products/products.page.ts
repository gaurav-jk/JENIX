import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { CartService } from '../../services/cart/cart.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {

  quantity: number = 1;
  product = {
    name: '433MHz RF MiNI Relay',
    price: 660,
    originalPrice: 1199,
    quantity: 1
  };
  constructor(
    private toastController: ToastController,
    private cartService: CartService
  ) { }
  
  increment() {
    this.quantity++;
  }

  decrement() {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }
  async addToCart() {
    this.product.quantity = this.quantity;
    this.cartService.addToCart(this.product);

    const toast = await this.toastController.create({
      message: `Added ${this.quantity} item(s) to cart`,
      duration: 2000,
      position: 'bottom',
    });
    toast.present();
  }
  ngOnInit() {
  }

}




