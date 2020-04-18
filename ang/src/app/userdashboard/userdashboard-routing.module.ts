import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserdashComponent } from './userdash/userdash.component';


const routes: Routes = [
{ path: '' , component: UserdashComponent }
    
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserdashboardRoutingModule { }
