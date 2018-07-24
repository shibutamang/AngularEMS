import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  email: any;
  password: any;
  type: 'password';

  readonly ROOT_URL = 'http://localhost:59830/Token';
  readonly DATA_URL = 'http://localhost:59830/api/Employees';

  constructor(private router: Router, private http: HttpClient) { }

  public getToken(): string {
    return localStorage.getItem('usrToken');
  }

  login(email, password) {
    const usrdata = 'username=' + email + '&password=' + password + '&grant_type=' + this.type;
    const reqHeader = new HttpHeaders(
      { 'Content-Type': 'application/x-www-form-urlencoded'}
    );
    this.http.post(this.ROOT_URL, usrdata, {headers: reqHeader}).subscribe(
      (data: any) => {
        localStorage.setItem('usrToken', data.access_token);
        this.router.navigate(['home']); },
        (err: any) => { console.log('error type: ' + err.error); }
    );
  }
  getData() {
    return this.http.get(this.DATA_URL).subscribe(
      (data: any) => { console.log('data'); },
      (error: any) => {console.log('error'); }
    );
  }
}
