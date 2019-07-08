import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'menu',
    pathMatch: 'full'
  },
  {
    path: 'menu',
    loadChildren: './menu/list.module#ListPageModule'
  },
  { path: 'new-item', loadChildren: './new-item/new-item.module#NewItemPageModule' },
  { path: 'item-detail-page', loadChildren: './item-detail-page/item-detail-page.module#ItemDetailPagePageModule' },
  { path: 'my-order-page', loadChildren: './my-order-page/my-order-page.module#MyOrderPagePageModule' },
  { path: 'order-detail-page', loadChildren: './order-detail-page/order-detail-page.module#OrderDetailPagePageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
