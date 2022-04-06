import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Category } from './category';
import { CATEGORIES } from './__mocks__/mock-categories';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  constructor() {}

  getCategories(): Observable<Category[]> {
    const categories = of(CATEGORIES);
    return categories;
  }

  getCategory(id: number): Observable<Category | undefined> {
    const category = CATEGORIES.find((category) => category.id === id);
    return of(category);
  }
}
