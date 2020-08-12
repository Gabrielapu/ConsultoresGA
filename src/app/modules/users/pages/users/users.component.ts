import { Component, OnInit, TemplateRef, Renderer2 } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/authentication/auth.service';
import { UsersService } from 'src/app/core/services/users.service';
import { UserInterface } from 'src/app/shared/interfaces/user.interface';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {

  modalRef: BsModalRef;
  form: FormGroup;

  users: any[] = [];

  constructor(
    private modalService: BsModalService,
    private renderer: Renderer2,
    public authService: AuthService,
    private userService: UsersService
  ) {
    this.form = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      role: new FormControl('', Validators.required),
    });
  }

  ngOnInit(): void {
    this.getUsers();
  }

  onAdd() {
    const email = this.form.get('email').value
    const emailExist = this.users.find(f => f.email == email)

    if (this.form.valid) {
      if (emailExist) {
        alert('El email ya existe')
      } else {  
        this.userService.addUser(this.form.value)
        this.form.reset();
        this.modalRef.hide();
      }
    } else {
      alert('Complete el formulario');
    }
  }

  onEdit(user: any, property: string, event: any) {
    user[property] = event.target.textContent;
    this.userService.editUser(user.id, user)
  }

  onDelete(id) {
    this.userService.deleteUser(id);
  }

  getUsers() {
    this.userService.getUsers().subscribe(r => {
      this.users = [];
      r.forEach(userData => {
        const id = userData.payload.doc.id
        const data = userData.payload.doc.data()
        this.users.push({id, ...data})
      })
    })    
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {
      backdrop: 'static',
    });
    this.onFocus();
  }

  onFocus() {
    this.renderer.selectRootElement('#name-input').focus();
  }
}
