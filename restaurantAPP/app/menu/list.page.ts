import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {

  menus = [[]]

  constructor(
    private router: Router,
    public itemService: ItemService
  ) {}
  openNewItemPage()
  {
      this.router.navigate(["/new-item"]);
  }
  openItemDetailPage(item)
  {
    this.router.navigate(["/item-detail-page",item]);
  }

  ngOnInit() {
    this.menus = this.itemService.getItems();
    console.log("reload items")
  }
}
