import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Blogger } from './blogger.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BloggerService {


  constructor(private httpClient: HttpClient) { }

  api = "http://localhost:9090"

  public saveBlog(blogger: Blogger): Observable<Blogger> {
    return this.httpClient.post<Blogger>(`${this.api}/save/blogger`, blogger);
  }
  public getEmployees(): Observable<Blogger[]> {
    return this.httpClient.get<Blogger[]>(`${this.api}/get/blogger`);
  }


}
