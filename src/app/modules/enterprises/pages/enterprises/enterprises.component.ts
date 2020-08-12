import { Component, OnInit } from '@angular/core';
import { EnterpriseInterface } from 'src/app/shared/interfaces/enterprise.interface';
import { EnterprisesService } from 'src/app/core/services/enterprises.service';
import { UsersService } from 'src/app/core/services/users.service';

@Component({
  selector: 'app-enterprises',
  templateUrl: './enterprises.component.html',
  styleUrls: ['./enterprises.component.css']
})
export class EnterprisesComponent implements OnInit {

  enterprises: EnterpriseInterface[];
  readonly fields: string[];
  click;
  click2;
  users = [];

  constructor(private enterpriseService: EnterprisesService,
    private userService: UsersService) {
    this.fields = [
      'name',
      'assistant_manager',
      'security_boss',
      'risk_prevention_boss',
      'size'
    ]
  }

  ngOnInit(): void {
    this.getEnterprises();
    this.showUsers();
  }

  onAdd() {
    this.enterpriseService.addEnterprise();
  }

  showUsers() {
    this.userService.getUsers().subscribe(r => {
      r.forEach((user: any) => {
        const id = user.payload.doc.id;
        let name;
        if(user.payload.doc.data().role === 'Cliente'){
          name = user.payload.doc.data().name;
          this.users.push({ id, name })
        }
      })
    })
  }

  getEnterprises() {
    this.enterpriseService.getEnterprises().subscribe(r => {
      this.enterprises = [];
      r.forEach(enterpriseData => {
        const id = enterpriseData.payload.doc.id
        const data = enterpriseData.payload.doc.data()
        this.enterprises.push({ id, ...data })
      })
    })
  }

  onClick(event) {
    this.click = event.target.textContent
  }

  onClick2(event) {
    this.click2 = event.target.selectedOptions[0].innerText;
  }

  onEdit(enterprise: any, property: string, event: any) {
    console.log(enterprise);
    console.log(property);
    console.log(event);
    const blur = event.target.textContent
    if (this.click !== blur) {
      enterprise[property] = blur;
      this.enterpriseService.editEnterprise(enterprise.id, enterprise);
    }
  }

  onEdit2(enterprise: any, property: string, event: any) {
    const blur = event.target.selectedOptions[0].innerText
    if (this.click !== blur) {
      const id = event.target.value
      enterprise[property] = id;
      this.enterpriseService.editEnterprise(enterprise.id, enterprise);
    }
  }

  onDelete(id: string) {
    this.enterpriseService.deleteEnterprise(id);
  }

}
