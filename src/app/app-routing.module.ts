import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddNewMedicineComponent } from './add-new-medicine/add-new-medicine.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminComponent } from './admin/admin.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { HomepageComponent } from './homepage/homepage.component';
import { MedicineComponent } from './medicine/medicine.component';
import { PaymentComponent } from './payment/payment.component';
import { ThankyouComponent } from './thankyou/thankyou.component';
import { UpdateMedicineComponent } from './update-medicine/update-medicine.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {path:'',component:HomepageComponent},
  {path:'user',component:UserComponent},
  {path:'adminlogin',component:AdminLoginComponent},
  {path:'admin',component:AdminComponent},
  {path:'medicine',component:MedicineComponent},
  {path:'newmedicine',component:AddNewMedicineComponent},
  {path:'updatemedicine/:id',component: UpdateMedicineComponent},
  {path:'confirmation',component:ConfirmationComponent},
  {path:'register',component:UserRegisterComponent},
  {path:'payment',component:PaymentComponent},
  {path:'thankyou',component:ThankyouComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
