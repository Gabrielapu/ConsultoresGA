import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Security_EnterpriseInterface } from 'src/app/shared/interfaces/security-enterprise.interface';

@Injectable({
  providedIn: 'root'
})
export class SecurityEnterprisesService {

  constructor(private afs: AngularFirestore) { }

  addSecurity_Enterprise() {
    return this.afs.collection('security-enterprises').add({
      name: '',
      boss: '',
      start_service_date: '',
      human_resources_structure: '',
      security_boss: '',
      security_supervisor_1: '',
      security_supervisor_2: '',
      security_supervisor_3: '',
      security_supervisor_4: '',
      size: ''
    })
  }

  getSecurity_Enterprises() {
    return this.afs.collection<Security_EnterpriseInterface>('security-enterprises').snapshotChanges();
  }

  editSecurity_Enterprise(id: string, data: string) {
    return this.afs.collection('security-enterprises').doc(id).update(data);
  }

  deleteSecurity_Enterprise(id: string) {
    return this.afs.collection('security-enterprises').doc(id).delete();
  }
}
