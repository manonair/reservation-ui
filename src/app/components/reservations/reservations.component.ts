import { Component, OnInit } from '@angular/core';
import { Reservation } from 'src/app/model/Reservation';
import {ReservationService} from '../../services/reservation.service'


@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.css']
})
export class ReservationsComponent implements OnInit {

  reservations: Reservation[];
  selectedReservation: Reservation;

  constructor(private reservationService : ReservationService) { }

  ngOnInit() {

    this.reservationService.getReservations().subscribe(reservations=>{
      this.reservations=reservations;
    });

  }

  deleteReservation(reservation:Reservation){
    console.log('Delete Reservation !');
    this.reservations.filter(t=>t.tableReservationId!=reservation.tableReservationId);
    this.reservationService.deleteReservation(reservation).subscribe();
  }

 /*  addReservation(reservation:Reservation){
    console.log('Add  Reservation Service CAll  !');
    this.reservationService.addReservation(reservation)
    .subscribe(
      reservation=>this.reservations.push(reservation)
          );
  } */

  editReservation(reservation:Reservation){
    console.log('Edit Reservation ! @ Add Page');
    this.selectedReservation=reservation;
    //this.reservations.filter(t=>t.tableReservationId!=reservation.tableReservationId);
    //
  }

  
}
