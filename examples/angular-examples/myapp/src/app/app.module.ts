import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { DemoComponent } from './demo/demo.component';
import { FormsModule } from '@angular/forms';
import { ProfileFormComponent } from './profile-form/profile-form.component';
@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    DemoComponent,
    ProfileFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
