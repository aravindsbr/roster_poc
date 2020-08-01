import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RosterComponent } from './roster/roster.component';
import { ShiftallowanceComponent } from './shiftallowance/shiftallowance.component';
import { NewentryComponent } from './newentry/newentry.component';
import { HomeComponent } from './home/home.component';
import { EditComponent } from './edit/edit.component';



const routes: Routes = [
  {path:"home", component:HomeComponent}, 
  {path:"roster", component:RosterComponent}, 
  {path:"shiftallowance", component:ShiftallowanceComponent}, 
  {path:"newentry", component:NewentryComponent},
  {path:"edit", component:EditComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } export const

RoutingComponent = [RosterComponent,ShiftallowanceComponent,NewentryComponent,HomeComponent,EditComponent];
