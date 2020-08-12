import { Component, OnInit } from '@angular/core';
import { AuditService } from 'src/app/core/services/audit.service';
import { FormGroup } from '@angular/forms';
import { Section } from 'src/app/shared/models/section';
import { Question } from 'src/app/shared/models/question';
import { Answer } from 'src/app/shared/models/answer';

@Component({
  selector: 'app-audit',
  templateUrl: './audit.component.html',
  styleUrls: ['./audit.component.css']
})
export class AuditComponent implements OnInit {

  enterpriseId;
  security_enterpriseId;
  userId;
  questions = [];
  currentScore;
  maxScore;

  constructor(private auditService: AuditService) { }

  ngOnInit(): void { 
    //this.auditService.getAudits().subscribe(console.log)
  }

  getEnterpriseId(form1: FormGroup) {
    this.auditService.getAllDataenterpises().subscribe(r => {
      r.forEach((enterpriseData: any) => {
        const id = enterpriseData.payload.doc.id
        const data = enterpriseData.payload.doc.data()
        const nameEnterprise = form1.get('name').value;
        const riskPB = form1.get('risk_prevention_boss').value;
        
        if(data.name === nameEnterprise && data.risk_prevention_boss === riskPB) {
          this.enterpriseId = id;
          this.userId = data.accountId;
        }
      })
    })
  }

  getSecurityEnterpriseId(form2: FormGroup) {
    this.auditService.getAllDataSecurityEnterprises().subscribe(r => {
      r.forEach((seData: any) => {
        const id = seData.payload.doc.id
        const data = seData.payload.doc.data()
        const nameSEnterprise = form2.get('name').value;
        const startDate = form2.get('start_service_date').value;
        
        if(data.name === nameSEnterprise && data.start_service_date === startDate) {
          this.security_enterpriseId = id;
        }
      })
    })
  }

  getAudit(event: Section[]) {
    this.questions = [];
    event.forEach(section => {
      section.questions.forEach((question: Question) => {
        const id = question.id;
        question.answers.forEach((answer: Answer) => {
          if(answer.isSelected === true) {
            const answerId = answer.id;
            this.questions.push({id, answerId})
          }
        })
      })
    })
    console.log(this.currentScore, this.maxScore);
  }

}