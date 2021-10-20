import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators,
  AbstractControl
} from '@angular/forms';

@Component({
  selector: 'app-modal-pop-up',
  templateUrl: './modal-pop-up.component.html',
  styleUrls: ['./modal-pop-up.component.css']
})
export class ModalPopUpComponent implements OnInit {
  eventForm: FormGroup;
  specialities = ['Patient', 'Physician'];
  physicians= ['Doctor1','Doctor2','Doctor3','Doctor4','Doctor5'];

  constructor(  private fb: FormBuilder) { }

  ngOnInit(): void {
    console.log(this.eventForm);
    this.eventForm = this.fb.group(
      {
        speciality: new FormControl('', Validators.required),
        physician: new FormControl('', Validators.required),
        meetingTitle: ['', Validators.required],
        description: ['', Validators.required],
        date: ['', Validators.required],
        time: ['', [Validators.required]],
        status: ['',Validators.required]
      }

    );
  }
  get speciality(): AbstractControl {
    return this.eventForm.get('Speciality');
  }
  get physician(): AbstractControl {
    return this.eventForm.get('physician');
  }
  get meetingTitle(): AbstractControl {
    return this.eventForm.get('meetingTitle');
  }
  get description(): AbstractControl {
    return this.eventForm.get('description');
  }
  get date(): AbstractControl {
    return this.eventForm.get('date');
  }
  get time(): AbstractControl {
    return this.eventForm.get('time');
  }
  get status(): AbstractControl {
    return this.eventForm.get('time');
  }
}
