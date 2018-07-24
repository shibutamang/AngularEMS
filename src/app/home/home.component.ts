import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../shared/auth.service';
import { Employee } from '../model/employee';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  readonly ROOT_URL = 'http://localhost:59830/api/values';
  empList: Employee[];

  constructor(private router: Router, private http: HttpClient, private service: AuthService) { }

  ngOnInit() {

    this.service.getData();
  }

  logOut() {
    localStorage.removeItem('usrToken');
    this.router.navigate(['login']);
  }
}
