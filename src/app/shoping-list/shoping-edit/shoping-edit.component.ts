import { Component,  OnDestroy,  OnInit, ViewChild } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Subscription } from 'rxjs';
import { Ingredients } from 'src/app/shared/ingredients.model';
import { ShoppingListService } from '../shoping-list.service';

@Component({
  selector: "app-shoping-edit",
  templateUrl: "./shoping-edit.component.html",
  styleUrls: ["./shoping-edit.component.css"],
})
export class ShopingEditComponent implements OnInit,OnDestroy {
  constructor(private shopingListServ: ShoppingListService) {}
  @ViewChild('f') slForm : NgForm;
  subscription : Subscription;
  editMode = false;
  editIndex : number;
  editItem : Ingredients;

  ngOnInit(): void {
    this.subscription = this.shopingListServ.statedEditing.subscribe((index)=>{
      this.editMode=true;
      this.editIndex = index;
      this.editItem = this.shopingListServ.getIngreFromIndex(index);
      this.slForm.setValue({
        name : this.editItem.name,
        amount : this.editItem.amount,
        unit : this.editItem.unit
      })
    })
  }
  onAdd(form: NgForm) {
    let value = form.value;
    const ing = new Ingredients(value.name, value.amount, value.unit);
    if(this.editMode){
     this.shopingListServ.updateIngre(this.editIndex, ing);
    }
    else 
    this.shopingListServ.addIngre(ing);
    this.resetForm();
  }
  resetForm()
  {
    this.slForm.reset();
    this.editMode = false;
  }
  deleteItem()
  {
    this.resetForm();
    this.shopingListServ.deleteIngre(this.editIndex);
  }
  ngOnDestroy()
  {
    this.subscription.unsubscribe();
  }
}
