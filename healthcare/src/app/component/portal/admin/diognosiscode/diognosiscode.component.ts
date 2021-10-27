import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

import { CodeService } from 'src/app/services/code.service';
import { diognosis_code } from 'src/model/tabletypes';
import { CustomSnackBarService } from 'src/app/services/snackbar.service';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-diognosiscode',
  templateUrl: './diognosiscode.component.html',
  styleUrls: ['./diognosiscode.component.css']
})
export class DiognosiscodeComponent implements OnInit {
  add_diog_data_form:FormGroup;

  diogCodeObj:diognosis_code=new diognosis_code();
  collectedData:[];




  constructor(private diognosis: CodeService,private fb:FormBuilder,
    private snack:CustomSnackBarService,
    public dialog:MatDialog) { }

  ngOnInit(): void {
    this.getAllDiognosis();
    this.add_diog_data_form=this.fb.group({
      id:['',Validators.required],
      name:['',Validators.required]
    })
  }

  postDiognosisDetails(add_diog_data_form){
      // this.diogCodeObj.id= this.diogCodeObj.id;
      // this.diogCodeObj.name = this.diogCodeObj.name;
      console.log(this.add_diog_data_form)
      this.diogCodeObj=this.add_diog_data_form.value;
      console.log(this.diogCodeObj)





      this.diognosis.postDiognosisCode(this.add_diog_data_form.value)
      .subscribe(res=>{
        console.log(res);
        this.snack.openSnackBar("Data added")
      },
      (error)=>{
       this.snack.openSnackBar("Duplicate Data Detected")
      })
      this.getAllDiognosis();

    }

    // openPopup()
    // {
    //   const dialog = this.dialog.open(PopupComponent);

    //   dialog.afterClosed().subscribe((result) => {
     //   console.log(`Dialog result: ${result}`);
     // });



    // }

  deleteDiognosisCode(id:number)
  {
    this.diognosis.deleteDiognosis(id).subscribe(res=>{
      this.snack.openSnackBar("Data Deleted")
      this.getAllDiognosis();
    })
  }

  getAllDiognosis(): void{
    this.diognosis.getDiognosis()
    .subscribe(res=>{
      this.collectedData = res;
      console.log(res)
    })
  }
  get id(): AbstractControl {
    return this.add_diog_data_form.get('id');

}
get name(): AbstractControl {
  return this.add_diog_data_form.get('name');

}
}
