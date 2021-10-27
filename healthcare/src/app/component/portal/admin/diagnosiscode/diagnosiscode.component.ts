import { Component, OnInit, ViewChild } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { CustomSnackBarService } from 'src/app/services/snackbar.service';
import { diagnosis_code, Users } from 'src/model/tabletypes';
import { DiagnosisService } from '../services/diagnosis.service';
import { ProcedureService } from '../services/procedure.service';

@Component({
  selector: 'app-diagnosiscode',
  templateUrl: './diagnosiscode.component.html',
  styleUrls: ['./diagnosiscode.component.css']
})
export class DiagnosiscodeComponent implements OnInit {

  diagnosisForm: FormGroup;
  user: Users = new Users();
  @ViewChild(MatPaginator) paginator: MatPaginator;
  dataList: MatTableDataSource<any> = new MatTableDataSource();
  columnList: string[];

  constructor(
    private diagnosis_service: DiagnosisService,
    private fb: FormBuilder,
    private _snackBar: CustomSnackBarService
  ) {
    this.columnList = ['diagnosisName', 'actions'];
  }

  ngOnInit(): void {
    this.diagnosisForm = this.fb.group({
      id: [''],
      diagnosis_code_name: ['', Validators.required],
    });
    this.diagnosis_service.getDiagnosis().subscribe((res) => {
      this.bindGrid(res);
    });
  }

  saveDiagnosisCode() {
    this.diagnosis_service
      .checkDiagnosisCodeExists(this.diagnosis_code_name.value)
      .subscribe((res: any) => {
        if (res == 0) {
          let diagnosisCodeData: diagnosis_code = new diagnosis_code();
          if (this.diagnosisForm.controls['id'].value === '' || this.diagnosisForm.controls['id'].value === null){
            diagnosisCodeData.id = '';
            diagnosisCodeData.diagnosis_code_name = this.diagnosis_code_name.value;
            this.diagnosis_service
              .saveDiagnosis(diagnosisCodeData)
              .subscribe((res) => {
                if (res) {
                  this.diagnosis_service.getDiagnosis().subscribe((res) => {
                    this.bindGrid(res);
                  });
                  this._snackBar.openSnackBar('Data Added successfully!');
                } else {
                  this._snackBar.openSnackBar('Data was not added');
                }
              });
          } else {
            diagnosisCodeData = this.diagnosisForm.value;
            this.diagnosis_service
              .updateDiagnosisCode(diagnosisCodeData)
              .subscribe((res) => {
                if (res) {
                  this.diagnosis_service.getDiagnosis().subscribe((res) => {
                    this.bindGrid(res);
                  });
                  this._snackBar.openSnackBar('Data Updated successfully!');
                } else {
                  this._snackBar.openSnackBar('Data was not updated');
                }
              });
          }
          this.clearForm();
        } else {
          this._snackBar.openSnackBar('Already exists!');
        }
      });
  }

  private bindGrid(res: any) {
    this.dataList = new MatTableDataSource(res);
    this.dataList.paginator = this.paginator;
  }

  onEdit(id: string, name: string) {
    this.diagnosisForm.patchValue({
      id: id,
      diagnosis_code_name: name,
    });
  }

  onDelete(id: string) {
    this.diagnosis_service.deleteDiagnosis(id).subscribe((res) => {
      if (res) {
        this.diagnosis_service.getDiagnosis().subscribe((res) => {
          this.bindGrid(res);
        });
        this._snackBar.openSnackBar('Deleted successfully!');
      }
    });
  }

  clearForm() {
    this.diagnosisForm.reset();
  }

  get diagnosis_code_name(): AbstractControl {
    return this.diagnosisForm.get('diagnosis_code_name');
  }

}
