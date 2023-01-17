import { fieldsContractor } from "../../prelim-data/data";

type Errors = {
  nit?: string[];
  business_name?: string[];
  address?: string[];
  country_id?: string[];
  responsable?: string[];
  email?: string[];
  phone?: string[];
  tags?: string[];
}

export const showErrors = (data: Errors) => {
  const keys = Object.keys(data);
  fieldsContractor.forEach(element => {
    const { id } = element;
    keys.forEach(element => {
      const errorField: HTMLLabelElement = (<HTMLLabelElement>document.getElementById(`${id}-error`));
      const errorInput: HTMLLabelElement = (<HTMLLabelElement>document.getElementById(id));
      if (id == element) {
        ableSendButton();
        switch (id) {
          case 'nit':
            errorInput.classList.replace('input-normal', 'input-error');
            data['nit']?.forEach(element => {
              errorField.textContent = element;
            });
          break;
          case 'business_name':  
            errorInput.classList.replace('input-normal', 'input-error');
            data['business_name']?.forEach(element => {
              errorField.textContent = element;
            });
          break;
          case 'address':
            errorInput.classList.replace('input-normal', 'input-error');
            data['address']?.forEach(element => {
              errorField.textContent = element;
            });
          break;
          case 'country_id':
            errorInput.classList.replace('input-normal', 'input-error');
            data['country_id']?.forEach(element => {
              errorField.textContent = element;
            });
          break;
          case 'responsable':
            errorInput.classList.replace('input-normal', 'input-error');
            data['responsable']?.forEach(element => {
              errorField.textContent = element;
            });
          break;
          case 'email':
            errorInput.classList.replace('input-normal', 'input-error');
            data['email']?.forEach(element => {
              errorField.textContent = element;
            });
          break;
          case 'phone':
            errorInput.classList.replace('input-normal', 'input-error');
            data['phone']?.forEach(element => {
              errorField.textContent = element;
            });
          break;
          case 'tags':
            errorInput.classList.replace('input-normal', 'input-error');
            data['tags']?.forEach(element => {
              errorField.textContent = element;
            });
          break;
        }
      }
    });
  });
}

const ableSendButton = (): void => {
  const btnSave: HTMLButtonElement = (<HTMLButtonElement>document.getElementById('send-new-contractor'));
  const btnUpdate: HTMLButtonElement = (<HTMLButtonElement>document.getElementById('update-contractor'));
  const sent: HTMLInputElement = (<HTMLInputElement>document.getElementById('sent'));
  sent.value = 'false';
  btnSave?.classList.replace('btn-footer-success-disable', 'btn-footer-success');
  btnUpdate?.classList.replace('btn-footer-warning-disable', 'btn-footer-warning');
}