import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AccountManagementComponent } from './account-management/account-management.component';
import { BookingManagementComponent } from './booking-management/booking-management.component';
import { BookingComponent } from './booking/booking.component';
import { CardComponent } from './card/card.component';
import { ContractManagementComponent } from './contract-management/contract-management.component';
import { MainMenuComponent } from './menu/main-menu/main-menu.component';
import { MyCardComponent } from './my-card/my-card.component';
import { SignInComponent } from './sign-in/sign-in.component';

const routes: Routes = [
  {
  path: 'login',
  component: SignInComponent
  },
  {
    path: 'booking',
    component: BookingComponent
  },
  {
    path: 'booking-management',
    component: BookingManagementComponent
  },
  {
    path: 'account-management',
    component: AccountManagementComponent
  },
  {
    path: 'card',
    component: CardComponent
  },
  {
    path: 'my-card',
    component: MyCardComponent
  },
  {
    path: 'contract-management',
    component: ContractManagementComponent
  },
  {
    path: 'home',
    component: MainMenuComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
