import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import { Router } from '@angular/router';
import { ItemService } from '../item.service';


@Component({
  selector: 'app-new-item',
  templateUrl: './new-item.page.html',
  styleUrls: ['./new-item.page.scss'],
})
export class NewItemPage implements OnInit {

  new_item_form: FormGroup;

  constructor(
    private router: Router,
    public formBuilder: FormBuilder,
    public itemService: ItemService

) { }

  ngOnInit() {

  	this.new_item_form = this.formBuilder.group({
      name: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required),
      category: new FormControl('', Validators.required),
      photoUrl: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
    });

  }

  createItem(value){
  	//save the item, and then go back
    this.itemService.createItem(value.name, value.price, value.category, value.photoUrl, value.description);

  	this.goBack();
  }

  goBack(){
  	    this.router.navigate(['/tabs']);
  }

}
