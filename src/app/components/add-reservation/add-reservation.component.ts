import { Component, OnInit , EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-add-reservation',
  templateUrl: './add-reservation.component.html',
  styleUrls: ['./add-reservation.component.css']
})
export class AddReservationComponent implements OnInit {

  @Output() addReservation :EventEmitter<any> =new EventEmitter();
  title:string;
  constructor() { }

  ngOnInit() {
  }

  onSubmit(){
    const reservation={
 
      tableReservationId: 3, 
      restaurantName: this.title, 
      restaurantId : 1 ,
      userId : 1 ,tableId : 1 ,
      status : true ,bookingId : 1  ,
      bookingStart : new Date()  ,
      bookingEnd : new Date() 
      
    }

    this.addReservation.emit(reservation)
  }




}
