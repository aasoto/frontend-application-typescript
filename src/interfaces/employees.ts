export interface Employees {
  current_page:   number;
  data:           Datum[];
  first_page_url: string;
  from:           number;
  last_page:      number;
  last_page_url:  string;
  links:          Link[];
  next_page_url:  null;
  path:           string;
  per_page:       number;
  prev_page_url:  null;
  to:             number;
  total:          number;
}

export interface Datum {
  id:               number;
  cc:               string;
  first_name:       string;
  second_name:      string | null;
  last_name:        string;
  second_last_name: string | null;
  gender:           string;
  birthdate:        Date;
  profile_photo:    string;
  created_at:       Date;
  updated_at:       Date;
}

export interface Link {
  url:    null | string;
  label:  string;
  active: boolean;
}
