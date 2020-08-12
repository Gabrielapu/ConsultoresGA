import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { EnterpriseInterface } from 'src/app/shared/interfaces/enterprise.interface';

@Injectable({
  providedIn: 'root'
})
export class EnterprisesService {

  constructor(private afs: AngularFirestore) { }

  addEnterprise() {
    return this.afs.collection('enterprises').add({
      name: '',
      assistant_manager: '',
      security_boss: '',
      risk_prevention_boss: '',
      size: '',
      accountId: ''
    });
  }

  getEnterprises() {
    return this.afs.collection<EnterpriseInterface>('enterprises').snapshotChanges();
  }

  editEnterprise(id: string, data: string) {
    return this.afs.collection('enterprises').doc(id).update(data);
  }

  deleteEnterprise(id: string) {
    return this.afs.collection('enterprises').doc(id).delete();
  }
  
}
