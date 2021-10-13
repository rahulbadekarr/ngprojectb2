import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DemographicsService } from 'src/app/services/demographics.service';
import { Demographics,Users } from 'src/model/tabletypes';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-patient-demographics',
  templateUrl: './patient-demographics.component.html',
  styleUrls: ['./patient-demographics.component.css']
})
export class PatientDemographicsComponent implements OnInit {

  
  demoForm : FormGroup;
  genders = ["Male","Female"];
  patient: Demographics = new Demographics();
demodata:Demographics=new Demographics();

//patient_id:string;

 // demographicdata: import("c:/Users/AshleshaP/Impact-Project/ngprojectb2/healthcare/src/model/tabletypes").Demographics;
  user:Users=new Users();
 
  constructor(private fb : FormBuilder, private _DemographicsService : DemographicsService ,private _userService: UserService) {}

  ngOnInit(): void {

    this.demoForm = this.fb.group({
      patient_id : ['',Validators.required],
      firstname : ['',Validators.required],
      lastname : ['',Validators.required],
      phone : ['',[Validators.required,
        Validators.pattern('^(0|[1-9][0-9]*)$'),
        Validators.minLength(10)]],
      dateofbirth : ['',Validators.required],
      gender :  ['',Validators.required],
      ethanicity: ['',Validators.required],
      education: ['',Validators.required],
      occupation: ['',Validators.required],
      address: ['',Validators.required],
     // mobile: ['',Validators.required],
     medicalhistory: ['',Validators.required],
     fmedicalhistory: ['',Validators.required],
     surgeries: ['',Validators.required],
     insurenceprovider: ['',Validators.required],
      employeement: ['',Validators.required],

      
    })

    this.user = this._userService.getUserDetails();
    //console.log("assnj");
  console.log(this.user.id);
    this._DemographicsService.getUserProfiles(this.user.id).subscribe((data:any) => {
      console.log("userdata",data);
      for(let d of data){
        this.patient.patient_id = d.patient_id;
        this.patient.dob = d.dob;
        this.patient.gender = d.gender;
        this.patient.mobile = d.mobile;
// console.log("as",this.patient.gender);
// console.log( this.patient.mobile);
// console.log( this.patient_id);
      }


    });
   
  }


  onSubmit(){
    console.log(this.demoForm);


    let userDemographics : Demographics = new Demographics();
    userDemographics.patient_id = this.patient_id.value
    userDemographics.first_name = this.firstname.value
    userDemographics.last_name = this.lastname.value
    //userDemographics.dob = this.dob.value
    //console.log("ID", userDemographics.patient_id);

   

    this._DemographicsService.add_demographic_data(userDemographics)
    .subscribe((data : Demographics) => {
      if(data){
        this.patient.patient_id = data.patient_id;
        this.patient.dob = data.dob;
        this.patient.gender = data.gender;
        this.patient.mobile = data.mobile;
console.log(this.patient.gender);
console.log( this.patient.mobile);
console.log( this.patient_id);
      this._DemographicsService.createUserDemographics(userDemographics)
           .subscribe(data => console.log(data))
      }
      // if (data) {
     
      //   this._DemographicsService.createUserDemographics(userDemographics)
      //       .subscribe(data => console.log(data))
      // }
    });
  }

  get patient_id () : AbstractControl {
    return this.demoForm.get('patient_id')
  }

  get firstname () : AbstractControl {
    return this.demoForm.get('firstname')
  }

  get lastname () : AbstractControl {
    return this.demoForm.get('lastname')
  }

  get gender () : AbstractControl {
    return this.demoForm.get('gender')
  }

  get dateofbirth () : AbstractControl {
    return this.demoForm.get('dateofbirth')
  }
  get ethanicity () : AbstractControl {
    return this.demoForm.get('ethanicity')
  }

  get education () : AbstractControl {
    return this.demoForm.get('education')
  }
  get address () : AbstractControl {
    return this.demoForm.get('address')
  }
  get employeement () : AbstractControl {
    return this.demoForm.get('employeement')
  }
  get phone () : AbstractControl {
    return this.demoForm.get('phone')
  }
  get medicalhistory () : AbstractControl {
    return this.demoForm.get('medicalhistory')
  }
  get fmedicalhistory () : AbstractControl {
    return this.demoForm.get('fmedicalhistory')
  }
  get surgeries () : AbstractControl {
    return this.demoForm.get('surgeries')
  }
  get insurenceprovider () : AbstractControl {
    return this.demoForm.get('insurenceprovider')
  }
 
 
}
