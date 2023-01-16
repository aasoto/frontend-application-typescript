import { formContractor } from "./form-contractor";

export const showModalAddContractor = (): void => {
  const addContractor: HTMLButtonElement = (<HTMLButtonElement>document.getElementById('add-contractor'));

  addContractor?.addEventListener('click', event => {
    const modalAddContractor = document.getElementById('modal-add-contractor');
    const cardContractorAdd = document.getElementById('card-contractor-add');

    modalAddContractor?.classList.toggle('hidden');
    cardContractorAdd?.classList.toggle('hidden');
    
    formContractor(null);

    const footerContractorAdd: HTMLElement | null = document.getElementById('footer-contractor-add');
    while (footerContractorAdd?.firstChild) {
      footerContractorAdd.removeChild(footerContractorAdd.firstChild);
    }
    
    const btnSave: HTMLButtonElement = document.createElement('button');
    btnSave.classList.add('btn-footer-success');
    btnSave.id = 'send-new-contractor';
    btnSave.textContent = 'Guardar';

    btnSave.addEventListener('click', event => {
      const nit: HTMLInputElement = (<HTMLInputElement>document.getElementById('nit'));
      const businessName: HTMLInputElement = (<HTMLInputElement>document.getElementById('business_name'));
      const address: HTMLInputElement = (<HTMLInputElement>document.getElementById('address'));
      const countryID: HTMLSelectElement = (<HTMLSelectElement>document.getElementById('country_id'));
      const responsable: HTMLInputElement = (<HTMLInputElement>document.getElementById('responsable'));
      const email: HTMLInputElement = (<HTMLInputElement>document.getElementById('email'));
      const phone: HTMLInputElement = (<HTMLInputElement>document.getElementById('phone'));

    });

    footerContractorAdd?.appendChild(btnSave);
    

  });
}