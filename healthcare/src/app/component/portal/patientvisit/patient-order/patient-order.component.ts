import { Component, OnInit } from '@angular/core';
import { Order } from 'src/model/tabletypes';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { PatientvisitService } from '../../../../services/patientvisit.service';
@Component({
  selector: 'app-patient-order',
  templateUrl: './patient-order.component.html',
  styleUrls: ['./patient-order.component.css'],
})
export class PatientOrderComponent implements OnInit {
  patient_orders_form: FormGroup;

  appointment_id = 2;
  collpatientData: any = [];
  constructor(
    private fb: FormBuilder,
    private patientvisit: PatientvisitService
  ) {}

  ngOnInit(): void {
    this.createOrders();
    this.patientvisit.getpatientvisit(this.appointment_id).subscribe((r) => {
      console.log(r);
      // this.collpatientData=r

      this.patient_orders_form = this.fb.group({
        blood_pressure: [r['patient_vitals'].blood_pressure],
        pulse_rate: [r['patient_vitals'].pulse_rate],
        temprature: [r['patient_vitals'].temprature],
        height: [r['patient_vitals'].height],
        weight: [r['patient_vitals'].weight],
        oxygen_levels: [r['patient_vitals'].oxygen_levels],
        procedure_code_id:[r['procedure_code'].procedure_code_id],

        diagnosis_code_id: [r['diagnosis_code'].diagnosis_code_id],
        medication: [r['medication']],
      });
    });

    // this.patientvisit.getprocedureCod(this.appointment_id).subscribe((res) => {
    //   console.log(res);
    //   this.patient_orders_form = this.fb.group({
    //     procedure_cod: [res['procedure_cod'].procedure_cod_id],
    //   });
    // });
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
      procedure_cod_id: [''],
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
  oxygen_levels(): AbstractControl {
    return this.patient_orders_form.get('oxygen_levels');
  }
  procedure_code_id(): AbstractControl {
    return this.patient_orders_form.get('procedure_code_id');
  }
  diagnosis_code_id(): AbstractControl {
    return this.patient_orders_form.get('diagnosis_code_id');
  }
  medication(): AbstractControl {
    return this.patient_orders_form.get('medication');
  }

  procedureCodes: Array<string> = [
    'Composite Measures (0001F – 0015F)',
    'Patient Management (0500F – 0584F)',
    'Patient History (1000F – 1505F)',
    'Physical Examination (2000F – 2060F)',
    'Diagnostic/Screening Processes or Results (3006F – 3776F)',
    'Therapeutic, Preventive, or Other Interventions (4000F – 4563F)',
    'Follow-up or Other Outcomes (5005F – 5250F)',
    'Patient Safety (6005F – 6150F)',
    'Structural Measures (7010F – 7025F)',
    'Nonmeasure Code Listing (9001F – 9007F)',
  ];

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
