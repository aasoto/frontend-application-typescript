import { showModalAddContractor } from './forms/contractor_company/modal-add-contractor';
import { makeTableContractors } from './forms/contractor_company/table-contractors';
import { cleanTagsArray } from './forms/contractor_company/form-contractor';

export const startModuleContractor = () => {

  makeTableContractors();
  
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

  const modalEditContractor = document.getElementById('modal-edit-contractor');
  const cardContractorEdit = document.getElementById('card-contractor-edit');
  const closeEditContractor = document.getElementById('close-edit-contractor');

  modalEditContractor?.addEventListener('click', event => {
    cleanTagsArray();
    modalEditContractor?.classList.toggle('hidden');
    cardContractorEdit?.classList.toggle('hidden');
  });

  closeEditContractor?.addEventListener('click', event => {
    cleanTagsArray();
    modalEditContractor?.classList.toggle('hidden');
    cardContractorEdit?.classList.toggle('hidden');
  });
}