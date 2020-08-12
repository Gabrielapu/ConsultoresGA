import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { UserInterface } from 'src/app/shared/interfaces/user.interface';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  
  constructor(private afs: AngularFirestore) { 
  }

  addUser(form) {
    return this.afs.collection("users").add({
      name: form.name,
      email: form.email,
      password: form.password,
      role: form.role
    })
  }

  getUsers() {
    return this.afs.collection<UserInterface>('users').snapshotChanges();
  }

  editUser(id: string, data: any) {
    return this.afs.collection('users').doc(id).update(data);
  }

  deleteUser(id: string) {
    return this.afs.collection('users').doc(id).delete();
  }
  
}
