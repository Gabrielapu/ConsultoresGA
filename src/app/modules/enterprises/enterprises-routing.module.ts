import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EnterprisesComponent } from './pages/enterprises/enterprises.component';


const routes: Routes = [
  {path: '', component: EnterprisesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EnterprisesRoutingModule { }
