import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ItemService } from '../item.service';
import { Storage } from '@ionic/storage';
import { Observable } from 'rxjs';
import * as firebase from 'firebase';
import {Events} from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{
  //itemsO:Observable<any[]>;
  //itemsObervable:Observable<any[]>;
  items:Array<any>=[];
  isowner=false;
  searchKey="";

  protected search = () =>{
    this.resetchanges();
    this.items=this.items.filter((item)=>{
      return item.name.toLowerCase().indexOf(this.searchKey.toLowerCase())>-1;
    })
  };
  protected resetchanges=()=>{
    this.items=this.itemService.getItems();
  }


  constructor(
    private router: Router,
    public itemService: ItemService,
    private storage: Storage,
    public events: Events)
    {

      // let userid=firebase.auth().currentUser.uid;
      // let usertypesRef = firebase.database().ref('usertypes/');
      // usertypesRef.orderByChild("uid").equalTo(userid).on("value",function(data){
      //   data.forEach(function(data){
      //     //console.log("usertypeFORREAL:"+data.val().type)
      //     if(data.val().type =="owner")
      //     {
      //       isowner=true;
      //     }
      //   })
      // })
      //this.items=this.itemService.getItems();
       var self = this;
       events.subscribe('dataloaded',(time)=>{
         self.items = this.itemService.getItems();
         console.log(self.items);
       });


      // console.log('Tab1 constructed');
    }

  ngOnInit() {
    // this.itemsObervable = this.itemService.getItems();
    // console.log('imported items');
    // this.itemsObervable.subscribe(items => {
    //   this.items = items;
    // })
    // console.log('item: ' + this.items.values);
    // if(this.items != undefined) {
    //   console.log('There are ' + this.items.length + ' items in menu.');
    // }
    this.items = this.itemService.getItems();

  }

  openNewItemPage() {
    console.log('Opened new item page.');
    this.router.navigate(['/new-item']);
  }

  itemDetailPage(item) {
  //  console.log('Item detail: ' + item);
  	this.router.navigate(["/item-detail-page", item]);
  }
  logout(){
    var self=this;
    // firebase.auth().onAuthStateChanged(function(user) {
    //   if (user) {
    //     // User is signed in.
    //     console.log("user logged in")
    //   } else {
    //     // No user is signed in.
    //     console.log("no user logged in")
    //   }
    //   self.router.navigate(["/login"]);
    // });

    let fireBaseUser = firebase.auth().currentUser;
    //console.log(fireBaseUser.uid +" userid")


    firebase.auth().signOut().then(function() {
      console.log("logout succeed")
      self.router.navigate(["/login"]);
  // Sign-out successful.
    }).catch(function(error) {
      // An error happened.
    });
  }
}
