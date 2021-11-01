import { Component, OnInit } from '@angular/core';
import { diagnosis_code, Order, procedure_code, Users } from 'src/model/tabletypes';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { PatientvisitService } from '../../../../services/patientvisit.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PatientService } from 'src/app/services/patient.service';
import { UserService } from 'src/app/services/user.service';
import { CustomSnackBarService } from 'src/app/services/snackbar.service';
import { DiagnosisService } from '../../admin/services/diagnosis.service';
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
  diagnosisCodes: diagnosis_code[];
  selectedProcedureCode: string;
  selectedDiagnosisCode: string;
  appointmentStatus: string;
  user: Users = new Users();

  constructor(
    private fb: FormBuilder,
    private patientvisit: PatientvisitService,
    private _route: ActivatedRoute,
    private _router: Router,
    private _appointmentService: PatientService,
    private _userService: UserService,
    private _snackBar: CustomSnackBarService,
    private _diagnosisCodeService : DiagnosisService
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
    this._diagnosisCodeService
      .getDiagnosis()
      .subscribe((data: diagnosis_code[]) => {
        this.diagnosisCodes = data;
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
        if(r[0]){
          this.orderDetail = r[0];
          this.selectedProcedureCode = this.orderDetail.procedure_code_id;
          this.selectedDiagnosisCode = this.orderDetail.diagnosis_code_id;
          this.patient_orders_form.patchValue({
            blood_pressure: [this.orderDetail.blood_pressure],
            pulse_rate: [this.orderDetail.pulse_rate],
            temprature: [this.orderDetail.temprature],
            height: [this.orderDetail.height],
            weight: [this.orderDetail.weight],
            oxygen_levels: [this.orderDetail.oxygen_levels],
            medication: [this.orderDetail.medication],
          });
        }
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
    patientOrder.appointment_id = this.appointment_id;
    patientOrder.weight = this.weight.value;
      patientOrder.blood_pressure = this.blood_pressure.value;
      patientOrder.pulse_rate = this.pulse_rate.value;
      patientOrder.height = this.height.value;
      patientOrder.oxygen_levels = this.oxygen_levels.value;
      patientOrder.procedure_code_id = this.selectedProcedureCode;
      patientOrder.diagnosis_code_id = this.selectedDiagnosisCode;
      patientOrder.medication = this.medication.value;
    if(this.orderDetail.id){
      patientOrder.id = this.orderDetail?.id;
      this.patientvisit.editPatientOrder(patientOrder)
          .subscribe(res =>{
            if(res){
              this._snackBar.openSnackBar('Data edited successfully!');
            }
          })
    }else{
      this.patientvisit.savePatientOrder(patientOrder)
          .subscribe(res =>{
            if(res){
              this._snackBar.openSnackBar('Data added successfully!');
            }
          })
    }
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

  // diognosisCode: Array<string> = [
  //   'A: Infectious and parasitic diseases',
  //   'B: Infectious and parasitic diseases',
  //   'C: Cancer',
  //   'D: Neoplasms, blood, and blood-forming organs',
  //   'E: Endocrine, nutritional, or metabolic',
  //   'F: Mental and behavioral disorders',
  //   'G: Nervous system',
  //   'H: Eyes, ears, nose, and throat',
  //   'I: Circulatory system',
  //   ' J: Respiratory system',
  //   'K: Digestive system',
  //   'L: Skin',
  //   'M: Musculoskeletal system',
  //   'N: Genitourinary system',
  //   ' O: Pregnancy and childbirth',
  //   ' P: Perinatal conditions',
  //   'Q: Congenital and chromosomal abnormalities',
  //   ' R: Abnormal clinical and lab findings',
  //   'S: Injury, poisoning, and other external causes',
  //   'T: Injury, poisoning, and other external causes',
  //   '  U: Used for emergency designation',
  //   'V: External causes of morbidity',
  //   'W: External causes of morbidity',
  //   '  X: External causes of morbidity',
  //   '  Y: External causes of morbidity',
  //   'Z: Factors influencing health status and contact with health services',
  // ];
}
