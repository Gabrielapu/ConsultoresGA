import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecurityEnterprisesRoutingModule } from './security-enterprises-routing.module';
import { SecurityEnterprisesComponent } from './pages/security-enterprises/security-enterprises.component';


@NgModule({
  declarations: [SecurityEnterprisesComponent],
  imports: [
    CommonModule,
    SecurityEnterprisesRoutingModule
  ]
})
export class SecurityEnterprisesModule { }
