import { getEmployees } from './requests/get';
import { showEmployees } from './forms/table-employees';

getEmployees()
  .then(resp => {
    showEmployees(resp);
  }).catch(error => {
    console.error(error);
  }).finally(() => {
    console.log('Consulta terminada...');
  });

const addEmployee: Element | null = document.querySelector('#add-employee');
const modalAddEmployee: Element | null = document.querySelector('#modal-add-employee');

addEmployee?.addEventListener('click', event => {
  modalAddEmployee?.classList.toggle('hidden');
});

modalAddEmployee?.addEventListener('click', event => {
  modalAddEmployee?.classList.toggle('hidden');
});
