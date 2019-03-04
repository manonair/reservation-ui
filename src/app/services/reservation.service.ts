import { Injectable } from '@angular/core';
import { Reservation } from '../model/Reservation';
import {  HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class ReservationService {


  reservationURL:string='https://my-json-server.typicode.com/manonair/demo/tableReservations';
  limit :string= '?_limit=5';
  constructor(private http:HttpClient) { }

  getReservations():Observable<Reservation[]>{
   return  this.http.get<Reservation[]>(this.reservationURL+this.limit);
  }

  
  deleteReservation(reservation:Reservation):Observable<Reservation>{
    const url = `${this.reservationURL}/${reservation.tableReservationId}`;
    console.log('URL: '+url);
    return this.http.delete<Reservation>(url,httpOptions);
     
   }


   addReservation(reservation:Reservation):Observable<Reservation>{
    const url = `${this.reservationURL}`;
    console.log('URL: '+url);
    return this.http.post<Reservation>(url, reservation,httpOptions);
     
   }
}
