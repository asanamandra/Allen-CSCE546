import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-order-page',
  templateUrl: './my-order-page.page.html',
  styleUrls: ['./my-order-page.page.scss'],
})
export class MyOrderPagePage implements OnInit {

  orders=[[]]

  constructor(
    private router: Router,
    public itemService: ItemService

  ) { }
  openOrderDetailPage(order)
  {
    this.router.navigate(["/order-detail-page",order])
  }

  ngOnInit() {
    this.orders = this.itemService.getOrders();
  }

}
