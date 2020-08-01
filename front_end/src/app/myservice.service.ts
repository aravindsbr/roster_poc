import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable, from, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Myinterface } from './myinterface';
import {Router} from '@angular/router';


@Injectable({
  providedIn: 'root'
})

export class MyserviceService {
  private finaldata = [];
  private apiurl = "http://localhost:3000/users";
  // TO - DO
  private posturl = "http://localhost:3000/users";
  private puturl = "http://localhost:3000/users";
  
  private options = { headers: new HttpHeaders().set('Content-Type', 'application/json') };

  form: FormGroup; 

  constructor(private http: HttpClient) { }
  
  getData() {
     return this.http.get(this.apiurl);
  }
  postData(formData) {
    console.log(formData)
      this.http.post(this.posturl, JSON.stringify(formData), this.options).subscribe(
        (res) => {
          alert ("Details added successfully!");
          window.open("/customers","_self")
        },

        (err) => {
          console.log(err)   
          }
      );   
  }

    putData(formData) {
      this.http.put(this.puturl, formData).subscribe(
        (res) => {
          console.log(res)
          alert ("Details updated successfully!");
          window.open("/customers","_self")
        },
        (err) => console.log(err)
      );
    }
}
