import { Time } from '@angular/common';

export class Appointments {
  id: string;
  patient_id: string;
  patient_name: string;
  physician_id: string;
  physician_name: string;
  meeting_title: string;
  description: string;
  date: Date;
  time: Time;
  status: string;
}
