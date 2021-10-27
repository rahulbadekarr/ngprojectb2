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
import { procedure_code, Users } from 'src/model/tabletypes';
import { ProcedureService } from '../services/procedure.service';

@Component({
  selector: 'app-procedurecode',
  templateUrl: './procedurecode.component.html',
  styleUrls: ['./procedurecode.component.css'],
})
export class ProcedurecodeComponent implements OnInit {
  procForm: FormGroup;
  user: Users = new Users();
  @ViewChild(MatPaginator) paginator: MatPaginator;
  dataList: MatTableDataSource<any> = new MatTableDataSource();
  columnList: string[];

  constructor(
    private procedure_service: ProcedureService,
    private fb: FormBuilder,
    private _snackBar: CustomSnackBarService
  ) {
    this.columnList = ['procedureName', 'actions'];
  }

  ngOnInit(): void {
    this.procForm = this.fb.group({
      id: [''],
      procedure_code_name: ['', Validators.required],
    });
    this.procedure_service.getProcedure().subscribe((res) => {
      this.bindGrid(res);
    });
  }

  saveProcedureCode() {
    this.procedure_service
      .checkProceddureCodeExists(this.procedure_code_name.value)
      .subscribe((res: any) => {
        if ((res.length = 0)) {
          let procedureCodeData: procedure_code = new procedure_code();
          if (this.procForm.controls['id'].value === '') {
            procedureCodeData.id = '';
            procedureCodeData.procedure_code_name = this.procedure_code_name.value;
            this.procedure_service
              .saveProcedure(procedureCodeData)
              .subscribe((res) => {
                if (res) {
                  this.procedure_service.getProcedure().subscribe((res) => {
                    this.bindGrid(res);
                  });
                  this._snackBar.openSnackBar('Data Added successfully!');
                } else {
                  this._snackBar.openSnackBar('Data was not added');
                }
              });
          } else {
            procedureCodeData = this.procForm.value;
            this.procedure_service
              .updateProcedureCode(procedureCodeData)
              .subscribe((res) => {
                if (res) {
                  this.procedure_service.getProcedure().subscribe((res) => {
                    this.bindGrid(res);
                  });
                  this._snackBar.openSnackBar('Data Updated successfully!');
                } else {
                  this._snackBar.openSnackBar('Data was not updated');
                }
              });
          }
        } else {
          this._snackBar.openSnackBar('Already exists!');
        }
      });
  }

  private bindGrid(res: any) {
    this.dataList = new MatTableDataSource(res);
    this.dataList.paginator = this.paginator;
  }

  onEdit(id: string, name: string, event: any) {
    event.preventDefault();
    this.procForm.patchValue({
      id: id,
      procedure_code_name: name,
    });
  }

  onDelete(id: string) {
    this.procedure_service.deleteProcedure(id).subscribe((res) => {
      if (res) {
        this.procedure_service.getProcedure().subscribe((res) => {
          this.bindGrid(res);
        });
        this._snackBar.openSnackBar('Deleted successfully!');
      }
    });
  }

  clearForm() {
    this.procForm.reset();
  }

  get procedure_code_name(): AbstractControl {
    return this.procForm.get('procedure_code_name');
  }
}
