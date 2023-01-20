export interface Project {
  id?:                    number;
  title:                 string;
  description:           string;
  start_execution:       string;
  end_execution?:         string | null;
  contractor_company_id: number;
  created_at?:            Date;
  updated_at?:            Date;
  contractor_company?:    ContractorCompany;
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
