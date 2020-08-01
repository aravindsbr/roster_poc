import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})

export class MyserviceService {
  private finaldata = [];
  private geturl = "http://localhost:3000/users";
  private deleteurl = "http://localhost:3000/users/";
  // TO - DO
  private posturl = "http://localhost:3000/users";
  private puturl = "http://localhost:3000/users";
  
  private options = { headers: new HttpHeaders().set('Content-Type', 'application/json') };

  form: FormGroup; 

  constructor(private http: HttpClient) { }
  
  getData() {
     return this.http.get(this.geturl);
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

  deleteData(id){
    this.http.delete(this.deleteurl+id).subscribe(
      (res) => {
        window.open("/customers","_self")
      },

      (err) => {
        console.log(err)   
        }
    );   
  }

}
