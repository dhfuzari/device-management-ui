import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Category } from './category';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  private categoriesResourceURL = `${environment.apiURL}/categories`;
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) {}

  getCategories(): Observable<{ data: Category[] }> {
    return this.http.get<{ data: Category[] }>(this.categoriesResourceURL);
  }

  getCategory(id: number): Observable<{ data: Category }> {
    return this.http.get<{ data: Category }>(
      `${this.categoriesResourceURL}/${id}`
    );
  }

  updateCategory(category: Category): Observable<any> {
    const { id, name } = category;
    return this.http.patch(
      `${this.categoriesResourceURL}/${id}`,
      { name },
      this.httpOptions
    );
  }

  addCategory(category: Category): Observable<{ data: Category }> {
    return this.http.post<{ data: Category }>(
      this.categoriesResourceURL,
      category,
      this.httpOptions
    );
  }

  deleteCategory(id: number): Observable<Category> {
    return this.http.delete<Category>(
      `${this.categoriesResourceURL}/${id}`,
      this.httpOptions
    );
  }
}
