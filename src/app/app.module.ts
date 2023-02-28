import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { UserComponent } from './user/user.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminComponent } from './admin/admin.component';
import { MedicineComponent } from './medicine/medicine.component';
import { AddNewMedicineComponent } from './add-new-medicine/add-new-medicine.component';
import { UpdateMedicineComponent } from './update-medicine/update-medicine.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { PaymentComponent } from './payment/payment.component';
import { ThankyouComponent } from './thankyou/thankyou.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    UserComponent,
    AdminLoginComponent,
    AdminComponent,
    MedicineComponent,
    AddNewMedicineComponent,
    UpdateMedicineComponent,
    ConfirmationComponent,
    UserRegisterComponent,
    PaymentComponent,
    ThankyouComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
