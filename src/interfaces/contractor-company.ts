export interface ContractorCompany {
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
  id:            number;
  nit:           string;
  business_name: string;
  address:       string;
  country_id:    number;
  tags:          string;
  responsable:   string;
  email:         string;
  phone:         string;
  created_at:    Date;
  updated_at:    Date;
  country:       Country;
}

export interface Country {
  id:                number;
  name:              string;
  iso3166_1_alpha2:  string;
  iso3166_1_alpha3:  string;
  iso3166_1_numeric: string;
  ioc:               string;
  flips_10:          string;
  license_plate:     string;
  domain:            string;
  created_at:        null;
  updated_at:        null;
}

export interface Link {
  url:    null | string;
  label:  string;
  active: boolean;
}
