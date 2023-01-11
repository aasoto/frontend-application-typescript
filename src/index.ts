import { getEmployees } from './requests/get';
import { makeTableEmployees } from './forms/table-employees';
import { saveNewEmployee } from './requests/post';
import { Employee } from './classes/Employee';
import { formEmployee } from './forms/form-employee';

makeTableEmployees();

const addEmployee: Element | null = document.querySelector('#add-employee');
const modalAddEmployee: Element | null = document.querySelector('#modal-add-employee');
const cardEmployeeAdd: Element | null = document.querySelector('#card-employee-add');
const closeAddEmployee: Element | null = document.querySelector('#close-add-employee');
const closeShowEmployee: Element | null = document.querySelector('#close-show-employee');
const modalInfoEmployee: Element | null = document.querySelector('#modal-info-employee');
const cardEmployeeInfo: Element | null = document.querySelector('#card-employee-info');

addEmployee?.addEventListener('click', event => {
  const employeeAdd = document.getElementById('employee-add');
  while (employeeAdd?.firstChild) {
    employeeAdd.removeChild(employeeAdd.firstChild);
  }

  employeeAdd?.appendChild(formEmployee(null));

  const footerAdd = document.getElementById('footer-add');
  while (footerAdd?.firstChild) {
    footerAdd.removeChild(footerAdd.firstChild);
  }
  
  const btnSave: HTMLButtonElement = document.createElement('button');
  btnSave.classList.add('btn-footer-success');
  btnSave.id = 'send-new-employee';
  btnSave.textContent = 'Guardar';

  actionSend(btnSave);
  
  footerAdd?.appendChild(btnSave);

  modalAddEmployee?.classList.toggle('hidden');
  cardEmployeeAdd?.classList.toggle('hidden');
});

closeAddEmployee?.addEventListener('click', event => {
  modalAddEmployee?.classList.toggle('hidden');
  cardEmployeeAdd?.classList.toggle('hidden');
});

modalAddEmployee?.addEventListener('click', event => {
  modalAddEmployee?.classList.toggle('hidden');
  cardEmployeeAdd?.classList.toggle('hidden');
});

modalInfoEmployee?.addEventListener('click', event => {
  modalInfoEmployee?.classList.toggle('hidden');
  cardEmployeeInfo?.classList.toggle('hidden');
});

closeShowEmployee?.addEventListener('click', event => {
  modalInfoEmployee?.classList.toggle('hidden');
  cardEmployeeInfo?.classList.toggle('hidden');
});

const actionSend = (btn: HTMLButtonElement) => {

  btn.addEventListener('click', event => {
    
    const cc: HTMLInputElement = (<HTMLInputElement>document.getElementById('cc'));
    const firstName: HTMLInputElement = (<HTMLInputElement>document.getElementById('first_name'));
    const secondName: HTMLInputElement = (<HTMLInputElement>document.getElementById('second_name'));
    const lastName: HTMLInputElement = (<HTMLInputElement>document.getElementById('last_name'));
    const secondLastName: HTMLInputElement = (<HTMLInputElement>document.getElementById('second_last_name'));
    const gender: HTMLSelectElement = (<HTMLSelectElement>document.getElementById('gender'));
    const birthdate: HTMLInputElement = (<HTMLInputElement>document.getElementById('birthdate'));
    const profilePhoto: HTMLInputElement = (<HTMLInputElement>document.getElementById('profile_photo'));
    const fileProfilePhoto = profilePhoto.files;
    
    console.log(fileProfilePhoto?.[0]);
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
  
    employee.saveEmployee();
  });
}