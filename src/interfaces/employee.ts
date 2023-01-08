export interface Employee {
  id:               number;
  cc:               string;
  first_name:       string;
  second_name:      string|null;
  last_name:        string;
  second_last_name: string|null;
  gender:           string|null;
  birthdate:        Date;
  profile_photo:    string;
  created_at:       Date;
  updated_at:       Date;
}
