import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  menus:Array<any>=[{}]
  orders:Array<any>=[{}]

  constructor() {
    // console.log("loading saved items");
    // let loadeditems = JSON.parse(localStorage.getItem("items"));
    // if(loadeditems!= null)
    // {
    //   this.menus = loadeditems;
    // }
    // else
    // {
    //   this.menus = [];
    // }
    // console.log("loading saved orders");
    // let loadedOrders = JSON.parse(localStorage.getItem("orders"));
    // if(loadedOrders!= null)
    // {
    //   this.orders = loadedOrders;
    // }
    // else
    // {
    //   this.orders = [];
    // }
    this.createItem("Dosa","9.00","Dish","/assets/dosa.jpg","Sothern Indian style of Rice and Lentil based Crepe");
    this.createItem("Biryani-Chicken","11.00","Dish","/assets/biryani.jpg","A unique layered Hyderabadi biryani cooked in a traditional way of nawabi.");
  }

  getItems()
  {
    return this.menus;
  }
  getOrders()
  {
    return this.orders;
  }

  createItem(name,price,category,photo,description){
    let randomID = Math.random().toString(36).substr(2,5);
    this.menus.push({
      'id': randomID,
      'name': name,
      'price': price,
      'category': category,
      'photo': photo,
      'description': description
    });
    // console.log("Saving all items");
    // let itemsObj = JSON.stringify(this.menus);
    // localStorage.setItem("items",itemsObj);
  }

  createOrders(totalItems,totalPrice,itemName,date)
  {
    let randomID = Math.random().toString(36).substr(2,5);
    this.orders.push({
      'id': randomID,
      'totalItems': totalItems,
      'totalPrice': totalPrice,
      'itemName': itemName,
      'date': date
    });
    // console.log("Saving all orders");
    // let ordersObj = JSON.stringify(this.orders);
    // localStorage.setItem("orders",ordersObj);

  }
}
