import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuditService } from 'src/app/core/services/audit.service';
import { EnterpriseInterface } from 'src/app/shared/interfaces/enterprise.interface';

@Component({
  selector: 'app-step-one',
  templateUrl: './step-one.component.html',
  styleUrls: ['./step-one.component.css']
})
export class StepOneComponent implements OnInit {

  @Output() form1 = new EventEmitter();
  enterpriseFormGroup: FormGroup;
  enterprises = [];

  constructor(private _formBuilder: FormBuilder,
    private auditService: AuditService) { 
    this.enterpriseFormGroup = this._formBuilder.group({
      name: [''],
      assistant_manager: [''],
      security_boss: [''],
      risk_prevention_boss: [''],
      size: ['']
    });
  }

  ngOnInit(): void {
    this.getEnterprises();
  }

  getDataEnterprises() {
    let enterprise: EnterpriseInterface;
    this.auditService.getEnterprises().subscribe((r: any[]) => {
      enterprise = r.find(f => f.name === this.enterpriseFormGroup.get('name').value)
      Object.keys(enterprise).forEach((key, value) => {
        if (key !== 'id' && key !== 'name' && key !== 'accountId') {
          this.enterpriseFormGroup.get(key).setValue(enterprise[key]);
        }
      })
    })
  }

  getEnterprises() {
    this.auditService.getEnterprises().subscribe(r => {
      r.forEach((m: any) => {
        this.enterprises.push(m.name)
      })
    })
  }

  emitForm() {
    this.form1.emit(this.enterpriseFormGroup);
  }

}
