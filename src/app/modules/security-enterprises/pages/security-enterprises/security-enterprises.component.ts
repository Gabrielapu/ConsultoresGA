import { Component, OnInit } from '@angular/core';
import { Security_EnterpriseInterface } from 'src/app/shared/interfaces/security-enterprise.interface';
import { SecurityEnterprisesService } from 'src/app/core/services/security-enterprises.service';

@Component({
  selector: 'app-security-enterprises',
  templateUrl: './security-enterprises.component.html',
  styleUrls: ['./security-enterprises.component.css']
})
export class SecurityEnterprisesComponent implements OnInit {

  security_enterprises: Security_EnterpriseInterface[];
  readonly fields: string[];
  click;

  constructor(private se: SecurityEnterprisesService) {
    this.fields = [
      'name',
      'boss',
      'start_service_date',
      'human_resources_structure',
      'security_boss',
      'security_supervisor_1',
      'security_supervisor_2',
      'security_supervisor_3',
      'security_supervisor_4'];
  }

  ngOnInit(): void {
    this.getSecurity_Enterprises();
  }


  onAdd() {
    this.se.addSecurity_Enterprise();

  }

  getSecurity_Enterprises() {
    this.se.getSecurity_Enterprises().subscribe(r => {
      this.security_enterprises = [];
      r.forEach(enterpriseData => {
        const id = enterpriseData.payload.doc.id
        const data = enterpriseData.payload.doc.data()
        this.security_enterprises.push({ id, ...data })
      })
    })
  }

  onClick(event) {
    this.click = event.target.textContent;
  }

  onSecurity_Edit(security_enterprise: any, property: string, event: any) {
    const blur = event.target.textContent;
    if (this.click !== blur) {
      security_enterprise[property] = blur;
      this.se.editSecurity_Enterprise(security_enterprise.id, security_enterprise);
    }
  }

  onSecurity_Delete(id: string) {
    this.se.deleteSecurity_Enterprise(id);
  }

}
