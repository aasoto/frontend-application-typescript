export interface Project {
  id?: number;
  title: string;
  description: string;
  start_execution: Date;
  end_execution?: Date;
  contractor_company_id: number;
}