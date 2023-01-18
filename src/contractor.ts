import { showModalAddContractor } from './forms/contractor_company/modal-add-contractor';
import { makeTableContractor } from './forms/contractor_company/table-contractors';

export const startModuleContractor = () => {

  makeTableContractor();
  
  showModalAddContractor();

}