import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { DemographicsService} from 'src/app/services/demographics.service';
import { UserService } from 'src/app/services/user.service';
import { Users } from 'src/model/tabletypes';

@Component({
  selector: 'app-patient-information',
  templateUrl: './patient-information.component.html',
  styleUrls: ['./patient-information.component.css']
})
export class PatientInformationComponent implements OnInit {
  patient_info_form:FormGroup
  user: Users = new Users();


  constructor(private fb:FormBuilder,
    private _DemographicsService: DemographicsService,
    private _userService: UserService,) { }

  ngOnInit(): void {

      this.createpatientInfo();
    this._DemographicsService
      .getUserDemographics("U510nSm")

      .subscribe(data=>{
        console.log(data)
        this.patient_info_form=this.fb.group({
          firstname:[data['firstname']],
          lastname:[data['lastname']],
          dateofbirth:[data['dob']],
          phoneno:[data['phone']],


        })
      })
      // if(this._userService.getUserDetails().role==="Patient")
      // {
      //   this.patient_info_form.disable()
      // }
  }

  OnSubmit()
  {
    console.log(this.patient_info_form)
  }

  createpatientInfo()
  {
    this.patient_info_form=this.fb.group({
      firstname:[''],
      lastname:[''],
      dateofbirth:[''],
      phoneno:[''],
      email:[''],
      emergencycontact:[''],
      gender:[''],
      ethinity:[''],
      address:[''],
      insurance:[''],
      bloodgroup:[''],
      allergy:['']

    })


  }

  firstname(): AbstractControl {
    return this.patient_info_form.get('firstname');
  }
  lastname(): AbstractControl {
    return this.patient_info_form.get(' lastnam');
  }
 dateofbirth(): AbstractControl {
    return this.patient_info_form.get('dateofbirth');
  }
  phoneno(): AbstractControl {
    return this.patient_info_form.get('phoneno');
  }
  email(): AbstractControl {
    return this.patient_info_form.get('email');
  }
  emergencycontact(): AbstractControl {
    return this.patient_info_form.get('emergencycontact');
  }
  gender(): AbstractControl {
    return this.patient_info_form.get('gender');
  }
  ethinity(): AbstractControl {
    return this.patient_info_form.get('ethinity');
  }
 address(): AbstractControl {
    return this.patient_info_form.get('address');
  }
  insurance(): AbstractControl {
    return this.patient_info_form.get('insurance');
  }
  bloodgroup(): AbstractControl {
    return this.patient_info_form.get('bloodgroup');
  }
 allergy(): AbstractControl {
    return this.patient_info_form.get('allergy');
  }



}
