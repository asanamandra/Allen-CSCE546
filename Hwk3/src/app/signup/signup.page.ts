import { Component, OnInit } from '@angular/core';
import * as firebase from 'Firebase';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  user={
  email:"",
  password:"",
  userType:""
  };
  created=true;

  constructor(private router:Router) { }

  ngOnInit() {
  }

  signup(){

  	console.log(this.user.email+"  "+this.user.password)
  	var email=this.user.email;
  	var password=this.user.password;
    var usrType = this.user.userType;
  	var self=this;

  	firebase.auth().createUserWithEmailAndPassword(email, password).catch(
    	function(error) {

    // Handle Errors here.
	  console.log(error);
	  var errorCode = error.code;
	  var errorMessage = error.message;
	  console.log(error.message);
	  if(errorCode.length > 0){
	  	console.log("Failed");
	  }
	  else{
	  	console.log("signup ok")
	  }
	  // ...
	}).then(function(user){
		  	console.log("finished creating account")
        //console.log(firebase.auth().currentUser.uid)
		  	// self.router.navigate(["/login"]);
         var userid=firebase.auth().currentUser.uid;
        console.log(userid);
        //console.log(usrType);
        if(usrType=='owner')
        {
          let usertype = firebase.database().ref('usertypes/').push();
          usertype.set({
            'uid':userid,
            'type':"owner"
          });
        }
        else
        {
          let usertype = firebase.database().ref('usertypes/').push();
          usertype.set({
            'uid':userid,
            'type':"notowner"
          });
        }

		  	self.router.navigate(["/tabs/tab1"]);
          //console.log("Reached")
	});


  }

}
