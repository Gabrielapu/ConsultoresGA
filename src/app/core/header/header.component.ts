import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import { AuthService } from '../authentication/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  role;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.role = localStorage.getItem('role')
  }

  logout() {
    this.authService.logout();
  }
}
