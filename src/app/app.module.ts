import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SignInComponent } from './sign-in/sign-in.component';

import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { FormsModule } from '@angular/forms';
import { BookingComponent } from './booking/booking.component';
import { BookingManagementComponent } from './booking-management/booking-management.component';
import { AccountManagementComponent } from './account-management/account-management.component';
import { CardComponent } from './card/card.component';
import { MyCardComponent } from './my-card/my-card.component';
import { ContractManagementComponent } from './contract-management/contract-management.component';
import { NarbarComponent } from './menu/narbar/narbar.component';
import { FooterComponent } from './menu/footer/footer.component';
import { NavlistComponent } from './menu/navlist/navlist.component';
import { MainMenuComponent } from './menu/main-menu/main-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    BookingComponent,
    BookingManagementComponent,
    AccountManagementComponent,
    CardComponent,
    MyCardComponent,
    ContractManagementComponent,
    NarbarComponent,
    FooterComponent,
    NavlistComponent,
    MainMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatCheckboxModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
