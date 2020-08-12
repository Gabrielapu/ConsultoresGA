import { Injectable } from '@angular/core';
import { UsersService } from '../services/users.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  users: any[] = [];
  exist;
  constructor(private userService: UsersService,
              private router: Router) { }

  login(email: string, password: string) {
    this.userService.getUsers()
    .subscribe(r => {
      this.users = r;
      this.exist = this.users.find(f => f.payload.doc.data().email == email && f.payload.doc.data().password == password)
      if (this.exist) {
        this.router.navigateByUrl('/dashboard')
        localStorage.setItem('role', this.exist.payload.doc.data().role)
        this.users = null;
      } else {
        alert('El usuario y/o contraseña no corresponde')
      }
    });
  }

  logout() {
    localStorage.removeItem('role');
    this.router.navigateByUrl('/login');
  }
}
