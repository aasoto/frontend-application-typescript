import { ContractorCompany } from "../../classes/ContractorCompany";
import { formContractor, tagsArray } from "./form-contractor";

const modalAddContractor = document.getElementById('modal-add-contractor');
const cardContractorAdd = document.getElementById('card-contractor-add');

export const showModalAddContractor = (): void => {
  const addContractor: HTMLButtonElement = (<HTMLButtonElement>document.getElementById('add-contractor'));

  addContractor?.addEventListener('click', event => {

    modalAddContractor?.classList.toggle('hidden');
    cardContractorAdd?.classList.toggle('hidden');
    
    formContractor(undefined, null);

    const footerContractorAdd: HTMLElement | null = document.getElementById('footer-contractor-add');
    while (footerContractorAdd?.firstChild) {
      footerContractorAdd.removeChild(footerContractorAdd.firstChild);
    }
    
    const btnSave: HTMLButtonElement = document.createElement('button');
    btnSave.classList.add('btn-footer-success');
    btnSave.id = 'send-new-contractor';
    btnSave.textContent = 'Guardar';

    btnSave.addEventListener('click', event => {
      const sent: HTMLInputElement = (<HTMLInputElement>document.getElementById('sent'));

      if (sent?.value == 'false') {
        sent.value = 'true';

        btnSave.classList.remove('btn-footer-success');
        btnSave.classList.add('btn-footer-success-disable');
        const nit: HTMLInputElement = (<HTMLInputElement>document.getElementById('nit'));
        const businessName: HTMLInputElement = (<HTMLInputElement>document.getElementById('business_name'));
        const address: HTMLInputElement = (<HTMLInputElement>document.getElementById('address'));
        const countryID: HTMLSelectElement = (<HTMLSelectElement>document.getElementById('country_id'));
        const responsable: HTMLInputElement = (<HTMLInputElement>document.getElementById('responsable'));
        const email: HTMLInputElement = (<HTMLInputElement>document.getElementById('email'));
        const phone: HTMLInputElement = (<HTMLInputElement>document.getElementById('phone'));
        
        const contractorCompany = new ContractorCompany(
          nit.value, 
          businessName.value, 
          address.value, 
          parseInt(countryID.value), 
          responsable.value, 
          email.value, 
          phone.value, 
          JSON.stringify(tagsArray)
        );
  
        contractorCompany.save();
      }
    });

    footerContractorAdd?.appendChild(btnSave);
    
  });

  closeAddModal();
}

const closeAddModal = ():void => {
  const closeAddContractor: Element | null = document.querySelector('#close-add-contractor');

  closeAddContractor?.addEventListener('click', event => {
    modalAddContractor?.classList.toggle('hidden');
    cardContractorAdd?.classList.toggle('hidden');
  });
  
  modalAddContractor?.addEventListener('click', event => {
    modalAddContractor?.classList.toggle('hidden');
    cardContractorAdd?.classList.toggle('hidden');
  });
}