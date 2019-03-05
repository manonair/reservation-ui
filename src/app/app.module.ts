import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReservationsComponent } from './components/reservations/reservations.component';
import { ReservationItemComponent } from './components/reservation-item/reservation-item.component';
import { HeadderComponent } from './components/headder/headder.component';
import { AddReservationComponent } from './components/add-reservation/add-reservation.component';
import {FormsModule} from '@angular/forms'
 
@NgModule({
  declarations: [
    AppComponent,
    ReservationsComponent,
    ReservationItemComponent,
    HeadderComponent,
    AddReservationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
