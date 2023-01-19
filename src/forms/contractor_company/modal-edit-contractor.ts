import { ContractorCompany } from "../../classes/ContractorCompany";
import { Contractor } from "../../interfaces/contractor";
import { formContractor, tagsArray } from './form-contractor';

export const showModalEditContractor = (data: Contractor) => {

  formContractor('contractor-edit', data);

  const footerEdit = document.querySelector('#footer-contractor-edit');

  /** Borrar elementos del footer de la card */
  while (footerEdit?.firstChild) {
    footerEdit.removeChild(footerEdit.firstChild);
  }
  const btnUpdate = document.createElement('button');
  btnUpdate.classList.add('btn-footer-warning');
  btnUpdate.id = 'update-contractor';
  btnUpdate.textContent = 'Actualizar';

  btnUpdate.addEventListener('click', event => {
    const sent: HTMLInputElement = (<HTMLInputElement>document.getElementById('sent'));
    if (sent?.value == 'false') {
      sent.value = 'true';

      btnUpdate.classList.remove('btn-footer-warning');
      btnUpdate.classList.add('btn-footer-warning-disable');

      const id: number = <number>data.id;
      const nit: HTMLInputElement = (<HTMLInputElement>document.getElementById('nit'));
      const businessName: HTMLInputElement = (<HTMLInputElement>document.getElementById('business_name'));
      const address: HTMLInputElement = (<HTMLInputElement>document.getElementById('address'));
      const countryID: HTMLSelectElement = (<HTMLSelectElement>document.getElementById('country_id'));
      const responsable: HTMLInputElement = (<HTMLInputElement>document.getElementById('responsable'));
      const email: HTMLInputElement = (<HTMLInputElement>document.getElementById('email'));
      const phone: HTMLInputElement = (<HTMLInputElement>document.getElementById('phone'));
      
      console.log(id, nit.value, businessName.value, address.value, countryID.value, responsable.value, email.value, phone.value, tagsArray);
      
      
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
      
      contractorCompany.update(id);
    }
  });

  footerEdit?.appendChild(btnUpdate);

}