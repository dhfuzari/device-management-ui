import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Category } from './category';
import { CATEGORIES } from './__mocks__/mock-categories';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  private categoriesResourceURL = `${environment.apiURL}/categories`;

  constructor(private http: HttpClient) {}

  getCategories(): Observable<{ data: Category[] }> {
    return this.http.get<{ data: Category[] }>(this.categoriesResourceURL);
  }

  getCategory(id: number): Observable<{ data: Category }> {
    return this.http.get<{ data: Category }>(
      `${environment.apiURL}/categories/${id}`
    );
  }
}
