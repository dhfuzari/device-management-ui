import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
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

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);

      return of(result as T);
    };
  }

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

  deleteCategory(id: number): Observable<{ message: string }> {
    return this.http
      .delete<{ message: string }>(
        `${this.categoriesResourceURL}/${id}`,
        this.httpOptions
      )
      .pipe(
        catchError(this.handleError<{ message: string }>('deleteCategory'))
      );
  }
}
