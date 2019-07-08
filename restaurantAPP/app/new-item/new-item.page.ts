import { Component, OnInit } from '@angular/core';
import {Validators, FormBuilder, FormControl, FormGroup} from '@angular/forms';
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
  ) {}

  backToMenu()
  {
    this.router.navigate(["/menu"]);
  }

  ngOnInit() {
    this.new_item_form = this.formBuilder.group({
      name: new FormControl('',Validators.required),
      price: new FormControl('',Validators.required),
      category: new FormControl('',Validators.required),
      photo: new FormControl('',Validators.required),
      description: new FormControl('',Validators.required)
    });
  }

  createItem(value){
      this.itemService.createItem(value.name,value.price,value.category,value.photo,value.description);
      this.new_item_form.reset();
      this.backToMenu();
  }
}
