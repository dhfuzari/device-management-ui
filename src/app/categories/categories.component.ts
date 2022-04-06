import { Component, OnInit } from '@angular/core';
import { Category } from '../category';
import { CategoriesService } from '../categories.service';
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent implements OnInit {
  categoriesList: Category[] = [];
  selectedCategory?: Category;

  constructor(private categoriesService: CategoriesService) {}

  ngOnInit(): void {
    this.getCategories();
  }

  onSelectCategory(category: Category): void {
    this.selectedCategory = category;
  }

  getCategories(): void {
    this.categoriesService
      .getCategories()
      .subscribe((categories) => (this.categoriesList = categories));
  }
}
