import { Component, OnInit , EventEmitter, Output, Input} from '@angular/core';
import { Reservation } from 'src/app/model/Reservation';
import { ReservationService } from 'src/app/services/reservation.service';

@Component({
  selector: 'app-add-reservation',
  templateUrl: './add-reservation.component.html',
  styleUrls: ['./add-reservation.component.css']
})
export class AddReservationComponent implements OnInit {

  @Output() addReservation :EventEmitter<any> =new EventEmitter();

  //private reservationService: ReservationService;
  @Input() reservation: Reservation;
  constructor(private reservationService : ReservationService) { }

  ngOnInit() {
  }


  /* onEdit(reservation:Reservation ){
    console.log("addReservation");
    this.addReservation.emit(reservation)
  } */

  onSubmit(){
    console.log( this.reservation.tableDesc  );
   const outParam:Reservation = this.reservation;
  this.reservationService.addReservation(outParam)
  .subscribe();
  console.log( 'Completed onSubmit');
     
  }



}
