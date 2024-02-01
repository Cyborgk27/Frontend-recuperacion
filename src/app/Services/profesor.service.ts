import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProfesorService {

  private apiUrl = 'https://localhost:7088/api/Profesor'
  constructor(private http: HttpClient) { }

  getProfesores(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
