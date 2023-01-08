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
const modalInfoEmployee: Element | null = document.querySelector('#modal-info-employee');

addEmployee?.addEventListener('click', event => {
  modalInfoEmployee?.classList.toggle('hidden');
});

modalInfoEmployee?.addEventListener('click', event => {
  modalInfoEmployee?.classList.toggle('hidden');
});
