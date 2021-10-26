import { Component, OnInit } from '@angular/core';
import { Order, procedure_code, Users } from 'src/model/tabletypes';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { PatientvisitService } from '../../../../services/patientvisit.service';
import { ActivatedRoute } from '@angular/router';
import { PatientService } from 'src/app/services/patient.service';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-patient-order',
  templateUrl: './patient-order.component.html',
  styleUrls: ['./patient-order.component.css'],
})
export class PatientOrderComponent implements OnInit {
  patient_orders_form: FormGroup;
  appointment_id: string;
  orderDetail: Order = new Order();
  procedureCodes: procedure_code[];
  selectedProcedureCode: string;
  appointmentStatus: string;
  user: Users = new Users();

  constructor(
    private fb: FormBuilder,
    private patientvisit: PatientvisitService,
    private _route: ActivatedRoute,
    private _appointmentService: PatientService,
    private _userService: UserService
  ) {}

  ngOnInit(): void {
    this.createOrders();
    this._route.params.subscribe((params) => {
      this.appointment_id = params['appointmentId'];
    });
    this.patientvisit
      .getprocedureCodes()
      .subscribe((data: procedure_code[]) => {
        this.procedureCodes = data;
      });
    this._appointmentService
      .getAppointmentStatus(this.appointment_id)
      .subscribe((data: string) => {
        this.appointmentStatus = data;
      });
    this.user = this._userService.getUserDetails();
    this.patientvisit
      .getpatientvisit(this.appointment_id)
      .subscribe((r: Order) => {
        this.orderDetail = r[0];
        this.selectedProcedureCode = this.orderDetail.procedure_code_id;
        this.patient_orders_form.patchValue({
          blood_pressure: [this.orderDetail.patient_vitals.blood_pressure],
          pulse_rate: [this.orderDetail.patient_vitals.pulse_rate],
          temprature: [this.orderDetail.patient_vitals.temprature],
          height: [this.orderDetail.patient_vitals.height],
          weight: [this.orderDetail.patient_vitals.weight],
          oxygen_levels: [this.orderDetail.patient_vitals.oxygen_levels],
          medication: [this.orderDetail.medication],
        });
      });
  }

  createOrders() {
    this.patient_orders_form = this.fb.group({
      blood_pressure: [''],
      pulse_rate: [''],
      temprature: [''],
      height: [''],
      weight: [''],
      oxygen_levels: [''],
      procedure_code_id: [''],
      diagnosis_code_id: [''],
      medication: [''],
    });
  }

  OnSubmit() {
    let patientOrder: Order = new Order();
    patientOrder = this.patient_orders_form.value;
    console.log(patientOrder);
  }

  get blood_pressure(): AbstractControl {
    return this.patient_orders_form.get('blood_pressure');
  }
  get pulse_rate(): AbstractControl {
    return this.patient_orders_form.get('pulse_rate');
  }
  get temprature(): AbstractControl {
    return this.patient_orders_form.get('temprature');
  }
  get height(): AbstractControl {
    return this.patient_orders_form.get('height');
  }
  get weight(): AbstractControl {
    return this.patient_orders_form.get('weight');
  }
  get oxygen_levels(): AbstractControl {
    return this.patient_orders_form.get('oxygen_levels');
  }
  get procedure_code_id(): AbstractControl {
    return this.patient_orders_form.get('procedure_code_id');
  }
  get diagnosis_code_id(): AbstractControl {
    return this.patient_orders_form.get('diagnosis_code_id');
  }
  get medication(): AbstractControl {
    return this.patient_orders_form.get('medication');
  }

  // procedureCodes: Array<string> = [
  //   'Composite Measures (0001F – 0015F)',
  //   'Patient Management (0500F – 0584F)',
  //   'Patient History (1000F – 1505F)',
  //   'Physical Examination (2000F – 2060F)',
  //   'Diagnostic/Screening Processes or Results (3006F – 3776F)',
  //   'Therapeutic, Preventive, or Other Interventions (4000F – 4563F)',
  //   'Follow-up or Other Outcomes (5005F – 5250F)',
  //   'Patient Safety (6005F – 6150F)',
  //   'Structural Measures (7010F – 7025F)',
  //   'Nonmeasure Code Listing (9001F – 9007F)',
  // ];

  diognosisCode: Array<string> = [
    'A: Infectious and parasitic diseases',
    'B: Infectious and parasitic diseases',
    'C: Cancer',
    'D: Neoplasms, blood, and blood-forming organs',
    'E: Endocrine, nutritional, or metabolic',
    'F: Mental and behavioral disorders',
    'G: Nervous system',
    'H: Eyes, ears, nose, and throat',
    'I: Circulatory system',
    ' J: Respiratory system',
    'K: Digestive system',
    'L: Skin',
    'M: Musculoskeletal system',
    'N: Genitourinary system',
    ' O: Pregnancy and childbirth',
    ' P: Perinatal conditions',
    'Q: Congenital and chromosomal abnormalities',
    ' R: Abnormal clinical and lab findings',
    'S: Injury, poisoning, and other external causes',
    'T: Injury, poisoning, and other external causes',
    '  U: Used for emergency designation',
    'V: External causes of morbidity',
    'W: External causes of morbidity',
    '  X: External causes of morbidity',
    '  Y: External causes of morbidity',
    'Z: Factors influencing health status and contact with health services',
  ];
}
