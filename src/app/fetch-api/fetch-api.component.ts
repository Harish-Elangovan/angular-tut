// httpClient service
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { observable } from 'rxjs';
@Component({
  selector: 'app-fetch-api',
  templateUrl: './fetch-api.component.html',
  styleUrls: ['./fetch-api.component.css'],
})
export class FetchApiComponent implements OnInit {
  GitUsers: any = [];
  constructor(private http: HttpClient) {}
  // should import HttpClientModule in applicationCache.module.ts
  ngOnInit(): void {
    this.GitUsers = this.http.get('https://api.github.com/users').subscribe(
      // observable
      (data) => {
        this.GitUsers = data;
      },
      (err) => {
        console.log(err);
      },
      () => {
        console.log('Data fetched successfully');
      }
    );
  }
}
