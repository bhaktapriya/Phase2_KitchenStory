import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UloginComponent } from './ulogin/ulogin.component';
import { AloginComponent } from './alogin/alogin.component';
import { RegisterComponent } from './register/register.component';
import { UserpageComponent } from './userpage/userpage.component';
import { AdminpageComponent } from './adminpage/adminpage.component';
import { PaymentComponent } from './payment/payment.component';
import { PayinitiatedComponent } from './payinitiated/payinitiated.component';

const routes: Routes = [
  {"path":"ulogin",component:UloginComponent},
  {"path":"alogin",component:AloginComponent},
  {"path":"register",component:RegisterComponent},
  {"path":"userpage",component:UserpageComponent},
  {"path":"adminpage",component:AdminpageComponent},
  {"path":"payment",component:PaymentComponent},
  {"path":"payinitiated",component:PayinitiatedComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
