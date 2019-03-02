import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReservationsComponent } from './components/reservations/reservations.component';
import { ReservationItemComponent } from './components/reservation-item/reservation-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ReservationsComponent,
    ReservationItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
