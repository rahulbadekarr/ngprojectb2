import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-patient-immunization',
  templateUrl: './patient-immunization.component.html',
  styleUrls: ['./patient-immunization.component.css'],
})
export class PatientImmunizationComponent implements OnInit {
  // [x: string]: any;

  ngOnInit(): void {}

  isSubmitted = false;

  Vaccines: any = [
    'Covishield',
    'Covaxin',
    'Sputnik',
    'TT',
    'Measles',
    'Pentavelant',
    'Vitamin A',
    'BCG',
    'Fluzone Quadrivalent',
  ];

  constructor(public fb: FormBuilder, private addMed: UserService) {}

  /*########### Form ###########*/
  registrationForm = this.fb.group({
    covid_19_vaccine: ['', [Validators.required]],
    vaccinedosenumber: new FormControl(''),
    vaccinedate: new FormControl(''),
  });

  // Choose vaccine using select dropdown
  // changeVaccine(e) {
  //   console.log(e.value)
  //   this.covid_19_vaccine.setValue(e.target.value, {
  //     onlySelf: true
  //   })
  // }

  // Getter method to access formcontrols
  get covid_19_vaccine() {
    return this.registrationForm.get('covid_19_vaccine');
  }

  collImmune() {
    this.addMed
      .saveImmunization(this.registrationForm.value)
      .subscribe((result) => {
        console.log('result', result);
      });
  }
}
