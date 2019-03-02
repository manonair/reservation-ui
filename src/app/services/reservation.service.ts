import { Injectable } from '@angular/core';
import { Reservation } from '../model/Reservation';
import {  HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  reservationURL:String='https://my-json-server.typicode.com/manonair/demo/tableReservations';
  
  constructor(private http:HttpClient) { }

  getReservations():Observable<Reservation[]>{

   return  this.http.get<Reservation[]>(this.reservationURL);


  }
}
