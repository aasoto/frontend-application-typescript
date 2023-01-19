import { showModalAddContractor } from './forms/contractor_company/modal-add-contractor';
import { makeTableContractor } from './forms/contractor_company/table-contractors';

export const startModuleContractor = () => {

  makeTableContractor();
  
  showModalAddContractor();

  const modalInfoContractor = document.getElementById('modal-info-contractor');
  const cardContractorInfo = document.getElementById('card-contractor-info');

  modalInfoContractor?.addEventListener('click', event => {
    modalInfoContractor?.classList.toggle('hidden');
    cardContractorInfo?.classList.toggle('hidden');
  });

  cardContractorInfo?.addEventListener('click', event => {
    modalInfoContractor?.classList.toggle('hidden');
    cardContractorInfo?.classList.toggle('hidden');
  });

}