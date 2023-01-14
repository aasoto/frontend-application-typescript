import { fields } from "../../prelim-data/data";

type Errors = {
  cc?: string[];
  first_name?: string[];
  second_name?: string[];
  last_name?: string[];
  second_last_name?: string[];
  gender?: string[];
  birthdate?: string[];
  profile_photo?: string[];
}

export const showErrors = (data: Errors) => {
  const keys = Object.keys(data);
  fields.forEach(element => {
    const { id } = element;
    keys.forEach(element => {
      const errorField: HTMLLabelElement = (<HTMLLabelElement>document.getElementById(`${id}-error`));
      const errorInput: HTMLLabelElement = (<HTMLLabelElement>document.getElementById(id));
      if (id == element) {
        ableSendButton();
        switch (id) {
          case 'cc':
            errorInput.classList.replace('input-normal', 'input-error');
            data['cc']?.forEach(element => {
              errorField.textContent = element;
            });
          break;
          case 'first_name':  
            errorInput.classList.replace('input-normal', 'input-error');
            data['first_name']?.forEach(element => {
              errorField.textContent = element;
            });
          break;
          case 'second_name':
            errorInput.classList.replace('input-normal', 'input-error');
            data['second_name']?.forEach(element => {
              errorField.textContent = element;
            });
          break;
          case 'last_name':
            errorInput.classList.replace('input-normal', 'input-error');
            data['last_name']?.forEach(element => {
              errorField.textContent = element;
            });
          break;
          case 'second_last_name':
            errorInput.classList.replace('input-normal', 'input-error');
            data['second_last_name']?.forEach(element => {
              errorField.textContent = element;
            });
          break;
          case 'gender':
            errorInput.classList.replace('input-normal', 'input-error');
            data['gender']?.forEach(element => {
              errorField.textContent = element;
            });
          break;
          case 'birthdate':
            errorInput.classList.replace('input-normal', 'input-error');
            data['birthdate']?.forEach(element => {
              errorField.textContent = element;
            });
          break;
          case 'profile_photo':
            errorInput.classList.replace('input-normal', 'input-error');
            data['profile_photo']?.forEach(element => {
              errorField.textContent = element;
            });
          break;
        }
      }
    });
  });
}

const ableSendButton = (): void => {
  const btnSave: HTMLButtonElement = (<HTMLButtonElement>document.getElementById('send-new-employee'));
  const btnUpdate: HTMLButtonElement = (<HTMLButtonElement>document.getElementById('update-employee'));
  const sent: HTMLInputElement = (<HTMLInputElement>document.getElementById('sent'));
  sent.value = 'false';
  btnSave?.classList.replace('btn-footer-success-disable', 'btn-footer-success');
  btnUpdate?.classList.replace('btn-footer-warning-disable', 'btn-footer-warning');
}