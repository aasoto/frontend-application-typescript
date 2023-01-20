export interface Projects {
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
  id:                    number;
  title:                 string;
  description:           string;
  contractor_company_id: number;
  start_execution:       Date;
  end_execution:         Date | null;
  contractor_company:    ContractorCompany;
}

export interface ContractorCompany {
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
}

export interface Link {
  url:    null | string;
  label:  string;
  active: boolean;
}
