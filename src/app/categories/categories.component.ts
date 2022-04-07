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
        this.categoriesList = [...this.categoriesList];
      });
  }

  deleteCategory(category: Category): void {
    this.categoriesService.deleteCategory(category.id).subscribe((res) => {
      if (res && res.message) {
        this.categoriesList = this.categoriesList.filter((c) => c !== category);
      } else {
        // TODO: Show message error to the user in a toastr
        window.alert(
          "You can't remove this category. There are devices using it"
        );
      }
    });
  }
}
