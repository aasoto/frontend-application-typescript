import { fieldsProject } from "../../prelim-data/data";

type Errors = {
  title?: string[];
  description?: string[];
  start_execution?: string[];
  end_execution?: string[];
  contractor_company_id?: string[];
}

export const showErrors = (data: Errors) => {
  const keys = Object.keys(data);
  fieldsProject.forEach(element => {
    const { id } = element;
    keys.forEach(element => {
      const errorField: HTMLLabelElement = (<HTMLLabelElement>document.getElementById(`${id}-error`));
      const errorInput: HTMLLabelElement = (<HTMLLabelElement>document.getElementById(id));
      if (id == element) {
        ableSendButton();
        switch (id) {
          case 'title':
            errorInput.classList.replace('input-normal', 'input-error');
            data['title']?.forEach(element => {
              errorField.textContent = element;
            });
          break;
          case 'description':  
            errorInput.classList.replace('input-normal', 'input-error');
            data['description']?.forEach(element => {
              errorField.textContent = element;
            });
          break;
          case 'start_execution':
            errorInput.classList.replace('input-normal', 'input-error');
            data['start_execution']?.forEach(element => {
              errorField.textContent = element;
            });
          break;
          case 'end_execution':
            errorInput.classList.replace('input-normal', 'input-error');
            data['end_execution']?.forEach(element => {
              errorField.textContent = element;
            });
          break;
          case 'contractor_company_id':
            errorInput.classList.replace('input-normal', 'input-error');
            data['contractor_company_id']?.forEach(element => {
              errorField.textContent = element;
            });
          break;
        }
      }
    });
  });
}

const ableSendButton = (): void => {
  const btnSave: HTMLButtonElement = (<HTMLButtonElement>document.getElementById('send-new-project'));
  const btnUpdate: HTMLButtonElement = (<HTMLButtonElement>document.getElementById('update-project'));
  const sent: HTMLInputElement = (<HTMLInputElement>document.getElementById('sent'));
  sent.value = 'false';
  btnSave?.classList.replace('btn-footer-success-disable', 'btn-footer-success');
  btnUpdate?.classList.replace('btn-footer-warning-disable', 'btn-footer-warning');
}