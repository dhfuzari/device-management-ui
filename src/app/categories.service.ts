import { Injectable } from '@angular/core';
import { Category } from './category';
import { CATEGORIES } from './__mocks__/mock-categories';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  constructor() {}

  getCategories(): Category[] {
    return CATEGORIES;
  }
}
