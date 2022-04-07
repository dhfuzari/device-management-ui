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

  constructor(private categoriesService: CategoriesService) {}

  displayedColumns: string[] = ['id', 'name', 'actions'];
  dataSource = this.categoriesList;

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories(): void {
    this.categoriesService
      .getCategories()
      .subscribe((categories) => (this.categoriesList = categories.data));
  }

  addCategory(name: string): void {
    name = name.trim();
    if (!name) {
      return;
    }
    this.categoriesService
      .addCategory({ name } as Category)
      .subscribe((category) => {
        this.categoriesList.push(category.data);
      });
  }

  deleteCategory(category: Category): void {
    this.categoriesList = this.categoriesList.filter((c) => c !== category);
    this.categoriesService.deleteCategory(category.id).subscribe();
  }
}
