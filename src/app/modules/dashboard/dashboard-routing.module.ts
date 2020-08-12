import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

const routes: Routes = [
  { path: '', component: DashboardComponent, children: [
    {path: 'users', loadChildren:() => import('../users/users.module').then(m => m.UsersModule)},
    {path: 'enterprises', loadChildren:() => import('../enterprises/enterprises.module').then(m => m.EnterprisesModule)},
    {path: 'security-enterprises', loadChildren:() => import('../security-enterprises/security-enterprises.module').then(m => m.SecurityEnterprisesModule)},
    {path: 'audit', loadChildren:() => import('../audit/audit.module').then(m => m.AuditModule)},
    {path: 'summary', loadChildren:() => import('../summary/summary.module').then(m => m.SummaryModule)},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
