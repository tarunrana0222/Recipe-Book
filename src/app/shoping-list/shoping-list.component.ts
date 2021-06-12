import { Component, OnInit } from '@angular/core';
import { Ingredients } from '../shared/ingredients.model';

@Component({
  selector: 'app-shoping-list',
  templateUrl: './shoping-list.component.html',
  styleUrls: ['./shoping-list.component.css']
})
export class ShopingListComponent implements OnInit {
  ingredients : Ingredients[] =[
    new Ingredients('Salt',100, 'g'),
    new Ingredients('Rice',500, 'g'),

  ];
  constructor() { }

  ngOnInit(): void {
  }

}
