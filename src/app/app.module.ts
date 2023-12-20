import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { MaterialModule } from './modules/material/material.module';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { HomeComponent } from './components/home/home.component';
import { ServicesComponent } from './components/services/services.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { RegisterComponent } from './components/register/register.component';
import { NgxUiLoaderModule, NgxUiLoaderConfig, SPINNER,PB_DIRECTION } from 'ngx-ui-loader';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TableService } from './services/table.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { UserService } from './services/user.service';
import { SnackbarService } from './services/snackbar.service';

const NgxUiLoaderConfig: NgxUiLoaderConfig = {
  text: 'Loading.....',
  textColor: 'white',
  textPosition: 'center-center',
  pbColor: 'white',
  bgsColor: 'white',
  fgsColor: 'white',
  fgsType: SPINNER.circle,
  fgsSize: 100,
  pbDirection: PB_DIRECTION.leftToRight,
  pbThickness: 5
}
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PageNotFoundComponent,
    SidenavComponent,
    HomeComponent,
    ServicesComponent,
    EmployeesComponent,
    ContactUsComponent,
    RegisterComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    NgxUiLoaderModule.forRoot(NgxUiLoaderConfig),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [TableService, UserService, SnackbarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
