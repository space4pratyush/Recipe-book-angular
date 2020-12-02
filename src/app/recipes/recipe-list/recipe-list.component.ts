import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes:Recipe[]=[
    new Recipe("A test recipe","This is a test recipe","https://c.ndtvimg.com/2019-10/7g6mck6g_biryani-badshah_625x300_25_October_19.jpg"),
    new Recipe("A test recipe","This is a test recipe","https://c.ndtvimg.com/2019-10/7g6mck6g_biryani-badshah_625x300_25_October_19.jpg")
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
