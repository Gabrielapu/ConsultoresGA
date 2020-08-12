import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { SECTION } from '../mocks/mock_data';
import { Question } from 'src/app/shared/models/question';
import { Section } from 'src/app/shared/models/section';

@Injectable({
  providedIn: 'root'
})

export class AuditService {

  constructor(private afs: AngularFirestore) { }

  getEnterprises() {
    return this.afs.collection('enterprises').valueChanges();
  }

  getAllDataenterpises() {
    return this.afs.collection('enterprises').snapshotChanges();
  }

  getSecurityEnterprises() {
    return this.afs.collection('security-enterprises').valueChanges();
  }

  getAllDataSecurityEnterprises() {
    return this.afs.collection('security-enterprises').snapshotChanges();
  }

  getSections(): Section[] {
    return SECTION;
  }

  getAudits() {
    return this.afs.collection('audits').valueChanges();
  }

  // addAudit(data) {
  //   return this.afs.collection('audits').add({
       
  //   })
  // }
}
