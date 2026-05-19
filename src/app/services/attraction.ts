import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TouristAttraction } from '../interfaces/tourist-attraction.interface';

@Injectable({
  providedIn: 'root',
})
export class Attraction {
  private apiUrl = `${environment.apiUrl}/attractions`;


  constructor(private http: HttpClient) {}

  getAttractions(): Observable<TouristAttraction[]> {
    return this.http.get<TouristAttraction[]>(this.apiUrl);
  } 

  getAttractionById(id: number): Observable<TouristAttraction> {
    return this.http.get<TouristAttraction>(`${this.apiUrl}/${id}`)
  }

  createAttraction(attraction: TouristAttraction): Observable<TouristAttraction> {
    return this.http.post<TouristAttraction>(`${this.apiUrl}/`, attraction)
  }

  updateAttraction(id: number, attraction: TouristAttraction): Observable<TouristAttraction> {
    return this.http.put<TouristAttraction> (
      `${this.apiUrl}/${id}`,
      attraction
    );
  }

  deleteAttraction(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
