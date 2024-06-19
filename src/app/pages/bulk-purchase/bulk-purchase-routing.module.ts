import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BulkPurchasePage } from './bulk-purchase.page';

const routes: Routes = [
  {
    path: '',
    component: BulkPurchasePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BulkPurchasePageRoutingModule {}
