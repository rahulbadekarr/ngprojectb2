import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CodeService } from 'src/app/services/code.service';

@Component({
  selector: 'app-adddialog-popup',
  templateUrl: './adddialog-popup.component.html',
  styleUrls: ['./adddialog-popup.component.css']
})
export class AdddialogPopupComponent implements OnInit {
  add_diognosis_data:FormGroup

  constructor(private fb:FormBuilder,private code:CodeService) { }

  ngOnInit(): void {
    this.add_diognosis_data = this.fb.group({
      dionosis_id:['',Validators.required],
      dionosis_name:['',Validators.required]

    });
  }


  addData(add_diognosis_data:FormGroup)
  {

   this.code.postData(this.add_diognosis_data.value).subscribe(data=>{
     console.log(data)
   })



  }
  get dionosis_id(): AbstractControl {
    return this.add_diognosis_data.get('dionosis_id');
  }

  get dionosis_name(): AbstractControl {
    return this.add_diognosis_data.get('dionosis_name');
  }

}
