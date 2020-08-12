import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuditService } from 'src/app/core/services/audit.service';
import { Security_EnterpriseInterface } from 'src/app/shared/interfaces/security-enterprise.interface';

@Component({
  selector: 'app-step-two',
  templateUrl: './step-two.component.html',
  styleUrls: ['./step-two.component.css']
})
export class StepTwoComponent implements OnInit {

  @Output() form2 = new EventEmitter();
  seFormGroup: FormGroup;
  security_enterprises = [];

  constructor(private _formBuilder: FormBuilder,
    private auditService: AuditService) {

    this.seFormGroup = this._formBuilder.group({
      name: [''],
      start_service_date: [''],
      human_resources_structure: [''],
      boss: [''],
      security_boss: [''],
      security_supervisor_1: [''],
      security_supervisor_2: [''],
      security_supervisor_3: [''],
      security_supervisor_4: ['']
    });
  }

  ngOnInit(): void {
    this.getSecurityEnterprises();
  }

  getDataSecurity_Enterprises() {
    let security_enterprise: Security_EnterpriseInterface;
    this.auditService.getSecurityEnterprises().subscribe((r: any[]) => {
      security_enterprise = r.find(f => f.name === this.seFormGroup.get('name').value)
      Object.keys(security_enterprise).forEach((key, value) => {
        if (key !== 'id' && key !== 'name') {
          this.seFormGroup.get(key).setValue(security_enterprise[key]);
        }
      })
    })
  }

  getSecurityEnterprises() {
    this.auditService.getSecurityEnterprises().subscribe(r => {
      r.forEach((m: any) => {
        this.security_enterprises.push(m.name)
      })
    })
  }

  emitForm() {
    this.form2.emit(this.seFormGroup);
  }
}
