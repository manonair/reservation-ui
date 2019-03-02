import { Component, OnInit , Input} from '@angular/core';
import { Reservation } from 'src/app/model/Reservation';

@Component({
  selector: 'app-reservation-item',
  templateUrl: './reservation-item.component.html',
  styleUrls: ['./reservation-item.component.css']
})
export class ReservationItemComponent implements OnInit {

  @Input() reservation:Reservation;

  constructor() { }

  ngOnInit() {
  }

  onDelete(reservation:Reservation ){
    console.log("onDelete");
  }

}
