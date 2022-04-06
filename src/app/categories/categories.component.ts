import { Component, OnInit } from '@angular/core';
import { Category } from '../category';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent implements OnInit {
  category: Category = {
    id: 1,
    name: 'Tablet',
  };

  constructor() {}

  ngOnInit(): void {}
}
