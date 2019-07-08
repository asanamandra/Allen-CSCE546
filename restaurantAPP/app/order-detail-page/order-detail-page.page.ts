import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-order-detail-page',
  templateUrl: './order-detail-page.page.html',
  styleUrls: ['./order-detail-page.page.scss'],
})
export class OrderDetailPagePage implements OnInit {
  current_order:any;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public itemService: ItemService

  ) { }
  goToMyOrders()
  {
    this.router.navigate(["/my-order-page"]);

  }
  ngOnInit() {
    this.route.params.subscribe(
      param=>{
        this.current_order=param;
        console.log(this.current_order);
      }

    )
  }

}
