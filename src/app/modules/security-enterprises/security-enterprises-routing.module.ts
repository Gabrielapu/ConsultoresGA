import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SecurityEnterprisesComponent } from './pages/security-enterprises/security-enterprises.component';


const routes: Routes = [
  {path: '', component: SecurityEnterprisesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecurityEnterprisesRoutingModule { }
