import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { HomeComponent } from './components/home/home.component';
import { ServicesComponent } from './components/services/services.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { RegisterComponent } from './components/register/register.component';


const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'header', component: HeaderComponent},
  {path: 'home', component: HomeComponent},
  {path: 'sidenav', component: SidenavComponent},
  {path: 'services', component: ServicesComponent},
  {path: 'employees', component: EmployeesComponent},
  {path: 'contactUs', component: ContactUsComponent},
  {path: 'register', component: RegisterComponent}, 
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
