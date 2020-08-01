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
  private posturl = "http://localhost:3000/users";
  private puturl = "http://127.0.0.1:5200/update/";
  
  form: FormGroup; 

  constructor(private http: HttpClient) { }

  getData() {
     return this.http.get(this.apiurl);
  }
  postData(formData) {
    console.log(formData)
      this.http.post(this.posturl, formData).subscribe(
        (res) => {
            alert ("Details added successfully");
            // window.location.reload() 
               window.open("/roster","_self")
        },

        (err) => {
          console.log(err)   
          }
      );   
  }

    putData(formData) {
      this.http.put(this.puturl, formData).subscribe(
        (res) => console.log(res),
        (err) => console.log(err)
      );
    }
}
