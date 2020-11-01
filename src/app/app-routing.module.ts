import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeesComponent } from './components/employees/employees.component';
import { GroupsComponent } from './components/groups/groups.component';
import { HomeComponent } from './components/home/home.component';
import { RouteGuard } from './guards/route.guard';

const routes: Routes = [
  { path: 'Inicio', component: HomeComponent, canActivate: [RouteGuard] },
  { path: 'Empleados', component: EmployeesComponent, canActivate: [RouteGuard] },
  { path: 'Grupos', component: GroupsComponent, canActivate: [RouteGuard] },
  { path: '**', redirectTo: '', pathMatch: 'full', canActivate: [RouteGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
