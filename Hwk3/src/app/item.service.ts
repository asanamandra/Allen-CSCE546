import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Events } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  //define some data containers such as arrays to store items
    ref = firebase.database().ref('items/');
  items:Array<any>=[];
  orders:Array<any>=[];



  constructor(private storage:Storage,
      public events: Events) {
        console.log("loading saved items");
        this.ref.on('value',resp=>{

          this.items=[];
          this.items=snapshotToArray(resp);
         this.events.publish('dataloaded',Date.now());
        });
      //this.items = snapshotToArray(resp);
        //console.log(this.items.length+" items loaded");
        //console.log(this.items);

      //  this.events.publish('dataloaded',Date.now());

     // console.log("loading saved items and orders");
     // this.items = db.collection('items').valueChanges();
     // this.orders = db.collection('orders').valueChanges();
  }

  //provide functions to get items
  getItems(){
    console.log('getting items...' + this.items);
    return this.items;
  }

  //get them orders boi
  getOrders(){
    console.log('gettings orders...' + this.orders);
    return this.orders;
  }

  createItem(name, price, category, photoUrl,description){
    let newInfo = firebase.database().ref('items/').push();
    let randomId = Math.random().toString(36).substr(2,5);
    newInfo.set({
      "id":randomId,
      "name":name,
      "price": price,
      "category":category,
      "photoUrl":photoUrl,
      "description":description
    });
    console.log("cloud saved menuItem");
/*
    console.log("now saving all items:");
    let usersStringifiedObj = JSON.stringify(this.items);
    localStorage.setItem("items", usersStringifiedObj);*/

    // let loadeditems= JSON.parse(localStorage.getItem("items"));
    // console.log("saved no. of items"+loadeditems.length.toString())
  }

  /*updateItem(newValues){
    let itemIndex = this.items.findIndex(item => item.id == newValues.id);

    if(newValues.photoUrl == undefined){
      newValues.photoUrl = this.items[itemIndex].photoUrl
    }

    this.items[itemIndex] = newValues;
    console.log(newValues.photoUrl);
  }*/

  createOrder(quantity, total_price, item_name,date) {
    let randomId = Math.random().toString(36).substr(2,5);
    let newInfo = firebase.database().ref('orders/').push();
    newInfo.set({
      "id":randomId,
      "quantity":quantity,
      "total_price": total_price,
      "item_name":item_name,
      "date":date
    })


    // });



    // let randomId = Math.random().toString(36).substr(2,5);
    // this.db.collection('/orders').add({
    //   "id":randomId,
    //   "quantity":quantity,
    //   "total_price": total_price,
    //   "item_name":item_name,
    //   "date":date
    // });
  }

}
export const snapshotToArray = snapshot => {
  let returnArr = [];
  //returnArr:Observable<any[]>;
  snapshot.forEach(childSnapshot => {
      let item = childSnapshot.val();
      item.id = childSnapshot.key;
      // console.log(item);
      returnArr.push(item);
  });

  return returnArr;
}
