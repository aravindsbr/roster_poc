import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-newentry',
  templateUrl: './newentry.component.html',
  styleUrls: ['./newentry.component.css']
})
export class NewentryComponent implements OnInit {

  form: FormGroup;

  constructor(private router: Router, private http: HttpClient, private formBuilder: FormBuilder, private myservice: MyserviceService) {
  
}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: [''],phone_no: [''],email: [''],city:[''], dob:[''], status:['']
    });
  }

  Onsubmitform(){
    const formData = new FormData();
    formData.append('name', this.form.get('name').value);
    formData.append('phone_no', this.form.get('phone_no').value);
    formData.append('email', this.form.get('email').value);
    formData.append('city', this.form.get('city').value);
    formData.append('dob', this.form.get('dob').value);
    formData.append('status', this.form.get('status').value);
    
    // formData.append('Cigna_Team_Lead', this.form.get('Cigna_Team_Lead').value);
    
    // formData.append('Cigna_Delivery_Lead', this.form.get('Cigna_Delivery_Lead').value);
    // formData.append('Accenture_Designation', this.form.get('Accenture_Designation').value);
    this.myservice.postData(formData);
  }
}
