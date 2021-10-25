import { Time } from "@angular/common";
//not sure about time

export class Users {
  id: string;
  username: string;
  email: string;
  role: string;
  password: string;
  createdDate: string;
  firstname: string;
  lastname: string;
  dob: string;
  gender: string;
  address: string;
  phone: number;
  emergency_contact_name: string;
  emergency_contact_email: string;
  emergency_contact_mobile: string;
  ethanicity: string | null;
  education: string | null;
  occupation: string | null;
  medicalhistory: string | null;
  family_medical_history: string | null;
  surgery: string | null;
  insurance_provider: string | null;
}

// export class Demographics {
//   id: string;
//   patient_id: string;
// }

export class Med_allergy {
  id: number;
  patient_id: string;
  current_medication: string;
  otc_medication: string;
  natural_product_hurbs: string;
  social_drugs: string;
  past_medication: string;
  drug_allergies: string;
  other_allergies_reaction: string;
}

export interface Immune {
  id: number;
  patient_id: string;
  covid_19_vaccine: string;
  general_vaccine: string;
  vaccinedate:Date,
  vaccinedosenumber: number,
}

export class AppointmentTable {
  id: number;
  patient_id: string;
  patient_firstname: string;
  patient_lastname: string;
  physician_id: string;
  physician_firstname: string;
  physician_lastname: string;
  meeting_title: string;
  description: string;
  date: string;
  time: Time;
  status: string;
}

export class Appoint {
  id: number;
  patient_id: string;
  patient_firstname: string;
  patient_lastname: string;
  physician_id: string;
  physician_firstname: string;
  physician_lastname: string;
  meeting_title: string;
  description: string;
  date: string;
  time: string;
  // dummy:string
  status: string;
}

export class Order {
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

export interface Phytoviewpatientcal {
  name: string;
  date: string;
  status: string;

}

