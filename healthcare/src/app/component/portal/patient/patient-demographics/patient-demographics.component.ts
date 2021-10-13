import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DemographicsService } from 'src/app/services/demographics.service';
import { Demographics } from 'src/model/tabletypes';

@Component({
  selector: 'app-patient-demographics',
  templateUrl: './patient-demographics.component.html',
  styleUrls: ['./patient-demographics.component.css']
})
export class PatientDemographicsComponent implements OnInit {

  
  demoForm : FormGroup;
  genders = ["Male","Female"]
  //dob: any;
  //firstname: any;
  //lastname: any;
  constructor(private fb : FormBuilder, private _DemographicsService : DemographicsService ) {}

  ngOnInit(): void {

    this.demoForm = this.fb.group({
      firstname : ['',Validators.required],
      lastname : ['',Validators.required],
      phone : ['',[Validators.required,Validators.pattern('^(0|[1-9][0-9]*)$'),Validators.minLength(10)]],
      dateofbirth : ['',Validators.required],
      gender : new FormControl('', Validators.required),
      ethicity: ['',Validators.required],
      education: ['',Validators.required],
      occupation: ['',Validators.required],
      address: ['',Validators.required],
     // mobile: ['',Validators.required],
      medical_history: ['',Validators.required],
      family_medical_history: ['',Validators.required],
      surgery: ['',Validators.required],
      insurance_provider: ['',Validators.required],
    })
  }


  onSubmit(){
    console.log(this.demoForm);


    let userDemographics : Demographics = new Demographics();
    userDemographics.first_name = this.firstname.value
    userDemographics.last_name = this.lastname.value
    //userDemographics.dob = this.dob.value
    

   

    this._DemographicsService.add_demographic_data(userDemographics)
    .subscribe((data : Demographics) => {
      if (data) {
        userDemographics.patient_id = data.id;
        this._DemographicsService.createUserDemographics(userDemographics)
            .subscribe(data => console.log(data))
      }
    });
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
