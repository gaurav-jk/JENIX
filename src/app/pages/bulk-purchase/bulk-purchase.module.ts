import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BulkPurchasePageRoutingModule } from './bulk-purchase-routing.module';

import { BulkPurchasePage } from './bulk-purchase.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BulkPurchasePageRoutingModule
  ],
  declarations: [BulkPurchasePage]
})
export class BulkPurchasePageModule {}
