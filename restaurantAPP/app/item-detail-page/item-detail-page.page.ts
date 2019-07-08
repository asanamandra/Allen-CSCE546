import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {ItemService} from '../item.service'

@Component({
  selector: 'app-item-detail-page',
  templateUrl: './item-detail-page.page.html',
  styleUrls: ['./item-detail-page.page.scss'],
})
export class ItemDetailPagePage implements OnInit {
  current_item:any;
  orders=[[]]
  constructor(

    private route: ActivatedRoute,
    private router: Router,
    public itemService: ItemService
  ) {}

  goToMenu()
  {
    this.router.navigate(["/menu"]);
  }
  createOrder(quantity)
  {
    console.log(quantity);
    this.itemService.createOrders(quantity,this.current_item.price,this.current_item.name,"a2/27/2019");
  }

  ngOnInit() {
    this.route.params.subscribe(
      param=> {
        this.current_item=param;
      //  console.log(this.current_item);
      }
    )
    this.orders = this.itemService.getOrders();
    console.log("reload orders");
  }
}
