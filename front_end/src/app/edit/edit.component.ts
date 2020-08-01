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

  updateform: FormGroup;

  // email = new FormControl('', [Validators.email]);
  // getErrorMessage() {
  //    return this.email.hasError('email') ? 'Please enter a valid Email-id' : '';
  // }
  
  constructor(private router: Router, private http: HttpClient, private formBuilder: FormBuilder, private myservice: MyserviceService) { }

  ngOnInit(): void {
    this.updateform = this.formBuilder.group({
      id:[],
      SAP_ID: [''],
      // Vertical: [''],Additional_Skills:[''], lanid:[''], Scrum_Team:[''],Primary_Skill_CAM: [''], pinid:[''],
      // Cigna_Team_Lead:[''], Secondary_skill_CAM: [''], eid_as_per_roaster:[''], Cigna_Delivery_Lead: [''],Accenture_Designation: [''],
      // username: [''], Shift_Timings: [''], Location: [''], Gender: [''], Transport: [''],Project_City_Location: [''],
      // Accenture_Supervisor: [''],Home_Location_Area: [''], Cigna_mail_id: [''], Bay: [''],Cigna_Role: [''],Specialization: [''],
      // New_Seat_No: [''], Primary_Skill:[''], Qualification: [''], Billability: [''], Secondary_skill:[''], Contact_Number: ['']
    });
  }

  Onupdateform(){
    // const formData = new FormData();
    // formData.append('SAP_ID', this.updateform.get('SAP_ID').value);
    
    // formData.append('Vertical', this.updateform.get('Vertical').value);
    // formData.append('Additional_Skills', this.updateform.get('Additional_Skills').value);
    // formData.append('lanid', this.updateform.get('lanid').value);
    // formData.append('Scrum_Team', this.updateform.get('Scrum_Team').value);
    // formData.append('Primary_Skill_CAM', this.updateform.get('Primary_Skill').value);
    // formData.append('pinid', this.updateform.get('pinid').value);
    // formData.append('Cigna_Team_Lead', this.updateform.get('Cigna_Team_Lead').value);
    // formData.append('Secondary_skill_CAM', this.updateform.get('Secondary_skill').value);
    // formData.append('eid_as_per_roaster', this.updateform.get('eid_as_per_roaster').value);
    // formData.append('Cigna_Delivery_Lead', this.updateform.get('Cigna_Delivery_Lead').value);
    // formData.append('Accenture_Designation', this.updateform.get('Accenture_Designation').value);
    // formData.append('username', this.updateform.get('username').value);
    // formData.append('Shift_Timings', this.updateform.get('Shift_Timings').value);
    // formData.append('Location', this.updateform.get('Location').value);
    // formData.append('Gender', this.updateform.get('Gender').value);
    // formData.append('Transport', this.updateform.get('Transport').value);
    // formData.append('Project_City_Location', this.updateform.get('Project_City_Location').value);
    // formData.append('Accenture_Supervisor', this.updateform.get('Accenture_Supervisor').value);
    // formData.append('Home_Location_Area', this.updateform.get('Home_Location_Area').value);
    // formData.append('Cigna_mail_id', this.updateform.get('Cigna_mail_id').value);
    // formData.append('Bay', this.updateform.get('Bay').value);
    // formData.append('Cigna_Role', this.updateform.get('Cigna_Role').value);
    // formData.append('Specialization', this.updateform.get('Specialization').value);
    // formData.append('New_Seat_No', this.updateform.get('New_Seat_No').value);
    // formData.append('Primary_Skill', this.updateform.get('Primary_Skill').value);
    // formData.append('Qualification', this.updateform.get('Qualification').value);
    // formData.append('Billability', this.updateform.get('Billability').value);
    // formData.append('Secondary_skill', this.updateform.get('Primary_Skill').value);
    // formData.append('Contact_Number', this.updateform.get('Contact_Number').value);    

    // this.myservice.putData(this.updateform.value)
      // .pipe(first())
      // .subscribe(
      //   data => {
      //     if(data.status === 200) {
      //       alert('User updated successfully.');
      //       this.router.navigate(['list-user']);
      //     }else {
      //       alert(data.message);
      //     }
      //   },
      //   error => {
      //     alert(error);
      //   });
  }

}


