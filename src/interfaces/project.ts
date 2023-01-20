export interface Project {
  id?: number;
  title: string;
  description: string;
  start_execution: string;
  end_execution?: string;
  contractor_company_id: number;
}