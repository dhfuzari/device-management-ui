import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { CategoriesService } from '../categories.service';
import { Category } from '../category';

@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.css'],
})
export class CategoryDetailComponent implements OnInit {
  category: Category | undefined;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private categoriesService: CategoriesService
  ) {}

  ngOnInit(): void {
    this.getCategory();
  }

  goBack(): void {
    this.location.back();
  }

  getCategory(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.categoriesService.getCategory(id).subscribe((category) => {
      const { data } = category;
      this.category = data;
    });
  }
}
