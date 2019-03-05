import { Component, OnInit , EventEmitter, Output, Input} from '@angular/core';
import { Reservation } from 'src/app/model/Reservation';

@Component({
  selector: 'app-add-reservation',
  templateUrl: './add-reservation.component.html',
  styleUrls: ['./add-reservation.component.css']
})
export class AddReservationComponent implements OnInit {

  @Output() addReservation :EventEmitter<any> =new EventEmitter();
  title:string;
  @Input()  reservation: Reservation;
  constructor() { }

  ngOnInit() {
  }

  onSubmit(){
    console.log('reservation component  OnSubmit  {reservation.tableDesc} ');
    const outParam=this.reservation;
    /* {
 
      tableReservationId:1,
      name:'1-1-1-1',
      tableId:1,
      tableType:'TABLE4',
      tableDesc:'4 SEATER',
      capacity:4,
      status:'A',
      bookingStart : new Date()  ,
      bookingEnd : new Date() ,
      restaurantId:1,
      restaurantName:'DUREY',
      bookingId:'1-1-1-1',
      userId:1,
   } */
  this.addReservation.emit(outParam)
  }



}
