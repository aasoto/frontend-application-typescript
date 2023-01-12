import { makeTableEmployees } from './forms/employee/table-employees';
import { showModalAddEmployee } from './forms/employee/modal-add-employee';

/** CARGAR TABLA GENERAL DE EMPLEADOS */
makeTableEmployees();

const closeShowEmployee: Element | null = document.querySelector('#close-show-employee');
const modalInfoEmployee: Element | null = document.querySelector('#modal-info-employee');
const cardEmployeeInfo: Element | null = document.querySelector('#card-employee-info');
const closeEditEmployee = document.querySelector('#close-edit-employee');
const modalEditEmployee = document.querySelector('#modal-edit-employee');
const cardEmployeeEdit = document.querySelector('#card-employee-edit');

/** MOSTRAR MODAL PARA AGREGAR NUEVO EMPLEADO */
showModalAddEmployee();


modalInfoEmployee?.addEventListener('click', event => {
  modalInfoEmployee?.classList.toggle('hidden');
  cardEmployeeInfo?.classList.toggle('hidden');
});

closeShowEmployee?.addEventListener('click', event => {
  modalInfoEmployee?.classList.toggle('hidden');
  cardEmployeeInfo?.classList.toggle('hidden');
});

closeEditEmployee?.addEventListener('click', event => {
  modalEditEmployee?.classList.toggle('hidden');
  cardEmployeeEdit?.classList.toggle('hidden');
});

modalEditEmployee?.addEventListener('click', event => {
  modalEditEmployee?.classList.toggle('hidden');
  cardEmployeeEdit?.classList.toggle('hidden');
});

