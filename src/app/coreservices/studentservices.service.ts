import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentservicesService {

  private apiUrl = 'http://10.70.9.204:3006/api/master/section?year=21&campus=59';

  constructor(private http: HttpClient) {}
    getStudents(): Observable<any> {
      return this.http.get<any>(this.apiUrl);
   }
}
