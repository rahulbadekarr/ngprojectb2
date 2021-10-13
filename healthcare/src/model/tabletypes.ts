import { Time } from "@angular/common";
import { ClassGetter } from '@angular/compiler/src/output/output_ast';
//not sure about time

export class Users {
  id: string;
  username: string;
  email: string;
  role: string;
  password: string;
  createdDate: string;
}

export class Demographics {
  id: string;
  patient_id: string;
  first_name: string;
  last_name: string;
  dob: Date;
  gender: string;
  ethicity: string;
  education: string;
  occupation: string;
  address: string;
  mobile: number;
  medical_history: string;
  family_medical_history: string;
  surgery: string;
  insurance_provider: string;
}

export interface Med_allergy {
  id: number;
  patient_id: string;
  current_medication: string;
  otc_medication: string;
  natural_product_hurbs: string;
  socila_drugs: string;
  past_medication: string;
  drug_allergies: string;
  other_allergies_reaction: string;
}

export interface Immune {
  id: number;
  patient_id: string;
  covid_19_vaccine: string;
  general_vaccine: string;
}

export class Appointments {
  id: string;
  patient_id: string;
  meeting_title: string;
  description: string;
  physication: string;
  date: Date;
  time: Time;
  reason: string;
  status: string;
}

export interface Order {
  id: number;
  patient_id: string;
  patient_vitals: string;
  procedure_code: string;
  diagnosis_code: string;
  lab_report: string;
  radiology_report: string;
  medication: string;
}

export interface Pay_details {
  id: number;
  patient_id: string;
  patient_bill: number;
  payment_method: string;
  payment_history: string;
  lab_report: string;
  radiology_report: string;
  medication: string;
}

export interface Allergies {
  id: number;
  AllergyType: string;
  AllergyName: string;
  AllergenSource: string;
  Isoforms_or_partial_sequences_of_allergen: string;
  Allerginicity: string;
}


