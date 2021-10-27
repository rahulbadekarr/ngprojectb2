import { Time } from '@angular/common';

export class Appointments {
  id: number;
  patient_id: string;
  patient_name: string;
  physician_id: string;
  physician_name: string;
  title: string;
  description: string;
  date: string;
  time: Time;
  status: string;
}
