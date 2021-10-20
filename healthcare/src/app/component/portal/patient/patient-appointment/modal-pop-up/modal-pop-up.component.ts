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

  constructor(  private fb: FormBuilder) { }

  ngOnInit(): void {
    console.log(this.eventForm);
    this.eventForm = this.fb.group(
      {
        physicianName: ['', Validators.required],
        meetingTitle: ['', Validators.required],
        description: ['', Validators.required],
        date: ['', Validators.required],


        time: ['', [Validators.required]],
        status: ['',Validators.required]
      }

    );
  }
  get physicianName(): AbstractControl {
    return this.eventForm.get('physicianName');
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
