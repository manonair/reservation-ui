import { Injectable } from '@angular/core';
import { Reservation } from '../model/Reservation';
import {  HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
 

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json' 
  })
}

    httpOptions.headers.append('Access-Control-Allow-Origin', 'http://localhost:4200');
    httpOptions.headers.append('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    httpOptions.headers.append('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    httpOptions.headers.append('Access-Control-Allow-Credentials', 'true');


@Injectable({
  providedIn: 'root'
})
export class ReservationService {


  reservationURL:string='http://localhost:1111/api/roster-microservice/reservation';
  //reservationURL:string='https://my-json-server.typicode.com/manonair/demo/tableReservations';
  allReservations :string= '/all';
  constructor(private http:HttpClient) { }

  getReservations():Observable<Reservation[]>{
    const url = `${this.reservationURL}/${this.allReservations}`;
    httpOptions.headers.append('Access-Control-Allow-Origin', '*');
    httpOptions.headers.append('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    httpOptions.headers.append('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    httpOptions.headers.append('Access-Control-Allow-Credentials', 'true');
/* 
      const headers = new Headers();
        headers.append('Access-Control-Allow-Headers', 'Content-Type');
        headers.append('Access-Control-Allow-Methods', 'GET');
        headers.append('Access-Control-Allow-Origin', '*'); */


   return  this.http.get<Reservation[]>(url, httpOptions);
  }

  
  deleteReservation(reservation:Reservation):Observable<Reservation>{
    const url = `${this.reservationURL}/${reservation.tableReservationId}`;
    console.log('URL: '+url);
    return this.http.delete<Reservation>(url,httpOptions);
     
   }


   addReservation(reservation:Reservation):Observable<Reservation>{
    const url = `${this.reservationURL}/add`;
    console.log('Add URL: '+url);
    return this.http.post<Reservation>(url, reservation,httpOptions);
     
   }
}
