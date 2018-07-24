import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  requiredField = 'all the fields are required';

  constructor(private router: Router, private service: AuthService) { }

  ngOnInit() {
  }

  adminLogin(value: any) {
    if (value.email === '' || value.email == null && value.password === '' || value.password == null) {
      alert(this.requiredField);
    } else {
      this.service.login(value.email, value.password);
    }
  }
}
