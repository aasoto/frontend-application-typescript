import { Employee } from "../../classes/Employee";
import { Employee as EmployeeInterface } from "../../interfaces/employee";
import { formEmployee } from "./form-employee";

export const showModalEditEmployee = (data: EmployeeInterface) => {

  const employeeEdit = document.querySelector('#employee-edit');

  const formEditEmployee: HTMLDivElement = formEmployee(data);

  employeeEdit?.appendChild(formEditEmployee);

  const footerEdit = document.querySelector('#footer-edit');

  /** Borrar elementos del footer de la card */
  while (footerEdit?.firstChild) {
    footerEdit.removeChild(footerEdit.firstChild);
  }
  const btnUpdate = document.createElement('button');
  btnUpdate.classList.add('btn-footer-warning');
  btnUpdate.id = 'update-employee';
  btnUpdate.textContent = 'Actualizar';

  btnUpdate.addEventListener('click', event => {
    const sent: HTMLInputElement = (<HTMLInputElement>document.getElementById('sent'));
    if (sent?.value == 'false') {
      sent.value = 'true';

      btnUpdate.classList.remove('btn-footer-warning');
      btnUpdate.classList.add('btn-footer-warning-disable');

      const id = data.id;
      const cc: HTMLInputElement = (<HTMLInputElement>document.getElementById('cc'));
      const firstName: HTMLInputElement = (<HTMLInputElement>document.getElementById('first_name'));
      const secondName: HTMLInputElement = (<HTMLInputElement>document.getElementById('second_name'));
      const lastName: HTMLInputElement = (<HTMLInputElement>document.getElementById('last_name'));
      const secondLastName: HTMLInputElement = (<HTMLInputElement>document.getElementById('second_last_name'));
      const gender: HTMLSelectElement = (<HTMLSelectElement>document.getElementById('gender'));
      const birthdate: HTMLInputElement = (<HTMLInputElement>document.getElementById('birthdate'));
      console.log(birthdate.value);
      const profilePhoto: HTMLInputElement = (<HTMLInputElement>document.getElementById('profile_photo'));
      const fileProfilePhoto = profilePhoto.files;
      
      const employee = new Employee(
        cc.value,
        firstName.value,
        secondName.value,
        lastName.value,
        secondLastName.value,
        gender.value,
        birthdate.value,
        fileProfilePhoto?.[0]
      );
  
      employee.editEmployee(id);
    }
  });

  footerEdit?.appendChild(btnUpdate);

}