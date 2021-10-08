import { Time } from "@angular/common";
//not sure about time

export class Users {
  id: number;
  username: string;
  email: string;
  role: string;
  password: string;
  createdDate: Date;
}

export interface Demographics {
  id: number;
  patient_id: number;
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
  patient_id: number;
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
  patient_id: number;
  covid_19_vaccine: string;
  general_vaccine: string;
}

export interface Schd_appt {
  id: number;
  patient_id: number;
  meeting_title: string;
  description: string;
  physication: string;
  date: Date;
  time: Time;
  reason: string;
}

export interface Order {
  id: number;
  patient_id: number;
  patient_vitals: string;
  procedure_code: string;
  diagnosis_code: string;
  lab_report: string;
  radiology_report: string;
  medication: string;
}

export interface Pay_details {
  id: number;
  patient_id: number;
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


