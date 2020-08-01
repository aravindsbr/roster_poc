import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { MyserviceService } from '../myservice.service';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  form: FormGroup;
  
  constructor(private router: Router, private http: HttpClient, private formBuilder: FormBuilder, private myservice: MyserviceService) { }

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
    
    // TO - DO
    this.myservice.putData(formData);

    // alert ("Details updated successfully!");
    // window.open("/customers","_self")
  }
}


