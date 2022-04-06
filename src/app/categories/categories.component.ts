import { Component, OnInit } from '@angular/core';
import { Category } from '../category';
import { CATEGORIES } from '../__mocks__/mock-categories';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent implements OnInit {
  categoriesList = CATEGORIES;
  selectedCategory?: Category;

  constructor() {}

  onSelectCategory(category: Category): void {
    this.selectedCategory = category;
  }

  ngOnInit(): void {}
}
