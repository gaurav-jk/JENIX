import { Component } from '@angular/core';
import { IonicSlides } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage  {
  items = [
    'Surveillance',
    'Access Control (Lock)',
    'Intercom PABX',
    'Smart Home Automation',
    'WiFi Camera - Stand Alone System',
    'GPS Tracker',
    '4G Router',
    'Networking and Peripheral',
    'Security Alarm System',
    'Cable Convertor Connector',
    'Signal Booster',
    'Show More'
  ];
  
  quantity: number = 1;
  swiperModules = [IonicSlides];
  constructor(private toastController: ToastController) {}
  increment() {
    this.quantity++;
  }
  decrement() {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }
  async addToCart() {
    const toast = await this.toastController.create({
      message: `Added ${this.quantity} item(s) to cart`,
      duration: 2000,
      position: 'bottom',
    });
    toast.present();
    // Implement actual add to cart functionality here
  }
}
