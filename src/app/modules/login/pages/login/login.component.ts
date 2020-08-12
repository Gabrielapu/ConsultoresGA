import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/authentication/auth.service';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(public authService: AuthService) {

    this.loginForm = new FormGroup ({
      email: new FormControl('eljefe@gmail.com', Validators.required),
      password: new FormControl('eljefe', Validators.required)
      
  })}

  ngOnInit(): void {
  }

  login() {
    const email = this.loginForm.get('email').value;
    const password = this.loginForm.get('password').value;
    
    this.authService.login(email, password);
  }
  
  logout() {
    this.authService.logout();
  }
}
