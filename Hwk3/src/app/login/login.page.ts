import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormControl, FormGroup } from '@angular/forms';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { Router,Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { ItemService } from '../item.service';


import * as firebase from 'Firebase';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

new_item_form: FormGroup;

  imgfile="assets/icecream.jpg";


  constructor(
  	     private router: Router,
 	 public formBuilder: FormBuilder,
 	     public itemService: ItemService
 	     ) {

  }

  ngOnInit() {

  	  	this.new_item_form = this.formBuilder.group({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });

  }

  signup(){
  	this.router.navigate(["/signup"]);
  }

  login(item){
  	console.log(item.email+"   "+item.password)
  	var self=this;
	var email=item.email;
	var password=item.password;
	firebase.auth().signInWithEmailAndPassword(email, password).then(function() {
        self.router.navigate(['/tabs']);
        let userid = firebase.auth().currentUser.uid;
        let usertypesRef = firebase.database().ref('usertypes/');
        usertypesRef.orderByChild("uid").equalTo(userid).on("value",function(data){
          data.forEach(function(data){
            console.log("usertype:"+data.val().type)
          })
        })
      }).catch(function() {
        alert("The Email and/or Password you entered is/are incorrect.");
      });
      email = "";
      password = "";
    }
  loginFacebook(){
  	//You need to create an facebook develop account and register an app there
  	//to use its login service

  	var self=this;
  		console.log("facebook login")
  		// Sign in using a popup.
		var provider = new firebase.auth.FacebookAuthProvider();
		provider.addScope('user_birthday');
		firebase.auth().signInWithPopup(provider).then(function(result) {
		  // This gives you a Facebook Access Token.
		  var token = result.credential.providerId;
		  console.log(token)
		  // The signed-in user info.
		  var user = result.user;
		  console.log(user);
		  self.router.navigate(["/tabs"]);
		});

  }

  loginGoogle(){
  		var self=this;
  		console.log("google login")
  		// Using a popup.
		var provider = new firebase.auth.GoogleAuthProvider();
		provider.addScope('profile');
		provider.addScope('email');
		firebase.auth().signInWithPopup(provider).then(function(result) {
		 // This gives you a Google Access Token.
		 var token = result.credential.providerId;
		 // The signed-in user info.
		 var user = result.user;
		 console.log(user);
		 console.log("login succeeded")
		 self.router.navigate(["/tabs"]);
		});
  }

}
