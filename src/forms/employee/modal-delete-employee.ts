import { EmployeeRequest } from '../../requests/EmployeeRequest';
import { deleteSuccess } from '../alerts';
import { makeTableEmployees } from './table-employees';

export const showModalDelete = (id: number) => {
  const modalDeletedEmployee: Element | null = document.querySelector('#modal-deleted-employee');
  const cardEmployeeDeleted: Element | null = document.querySelector('#card-employee-deleted');

  modalDeletedEmployee?.classList.toggle('hidden');
  cardEmployeeDeleted?.classList.toggle('hidden');

  
  const employeeDeleted = document.getElementById('employee-deleted');
  while (employeeDeleted?.firstChild) {
    employeeDeleted.removeChild(employeeDeleted.firstChild);
  }

  const alertSuccess = `
  <div class="flex flex-col justify-center items-center gap-7">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-40 h-40 text-blue-600">
      <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
    </svg>
    <div class="flex flex-col justify-center items-center gap-4">
      <h1 class="text-gray-900 font-bold text-3xl text-center">
        ¿Está seguro que desea eliminar este empleado?
      </h1>
    </div>
  </div>
  `;

  if (employeeDeleted) {
    employeeDeleted.innerHTML = alertSuccess;
  }

  const footerDeleted = document.getElementById('footer-deleted');
  while (footerDeleted?.firstChild) {
    footerDeleted.removeChild(footerDeleted.firstChild);
  }

  const btnFooter = `
  <button id="close-deleted-employee-button" class="px-5 py-3 rounded-md bg-gray-300 text-black font-bold">
    Cerrar
  </button>
  <button id="delete-employee-button" class="px-5 py-3 rounded-md bg-red-600 text-white font-bold">
    Eliminar
  </button>
  `;

  if (footerDeleted) {
    footerDeleted.innerHTML = btnFooter;
  }

  const btnCloseDeleted: Element | null = document.querySelector('#close-deleted-employee-button');
  btnCloseDeleted?.addEventListener('click', event => {
    modalDeletedEmployee?.classList.toggle('hidden');
    cardEmployeeDeleted?.classList.toggle('hidden');
  });

  const request = new EmployeeRequest();

  const btnDelete: Element | null = document.querySelector('#delete-employee-button');
  btnDelete?.addEventListener('click', event => {
    request.deleteEmployee(id)
    .then( resp => {
      console.log(resp);
      if (resp.status == 'delete') {
        deleteSuccess();
        makeTableEmployees();
      }
    }).catch( error => {
      console.error(error);
    }).finally( () => {
      console.log('Eliminación empleado finalizada...');
    });
  });
}