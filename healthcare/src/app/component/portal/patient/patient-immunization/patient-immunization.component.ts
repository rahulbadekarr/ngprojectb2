import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { CustomSnackBarService } from 'src/app/services/snackbar.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-patient-immunization',
  templateUrl: './patient-immunization.component.html',
  styleUrls: ['./patient-immunization.component.css'],
})
export class PatientImmunizationComponent implements OnInit {
  displayedColumns: string[] = ['Vaccine', 'Other', 'Date', 'Delete'];
  dataList: MatTableDataSource<any> = new MatTableDataSource();
  isSubmitted = false;

  constructor(
    public fb: FormBuilder,
    private addMed: UserService,
    private _snackBar: CustomSnackBarService
  ) {}

  ngOnInit(): void {
    this.addMed.getImmunizationList().subscribe((result) => {
      this.dataList = new MatTableDataSource(result);
    });
  }

  deleteImmune(item) {
    this.addMed.deleteImmun(item).subscribe((res) => {
      if (res) {
        this._snackBar.openSnackBar('Deleted successfully');
        this.addMed.getImmunizationList().subscribe((result) => {
          this.dataList = new MatTableDataSource(result);
        });
      } else {
        this._snackBar.openSnackBar('Invalid Operation');
      }
    });
  }

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

  registrationForm = this.fb.group({
    covid_19_vaccine: ['', [Validators.required]],
    general_vaccine: new FormControl(''),
    vaccinedate: new FormControl('', Validators.required),
  });

  get covid_19_vaccine() {
    return this.registrationForm.get('covid_19_vaccine');
  }

  collImmune() {
    this.addMed
      .saveImmunization(this.registrationForm.value)
      .subscribe((result) => {
        if (result) {
          this._snackBar.openSnackBar('Added successfully');
        } else {
          this._snackBar.openSnackBar('Invalid data');
        }
      });
  }
}
