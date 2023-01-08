import { Employees } from "../interfaces/employees";
import { genders, tHeaders } from "../prelim-data/data";
import { eye, pencilSquare, trash } from "../prelim-data/icons";
import { getEmployee } from '../requests/get';
import { showModalEmployee } from "./modal-employee";

export const showEmployees = (data: Employees):void => {
  
  const cardBodyEmployees = document.querySelector('#employees-list')
  const tableEmployees = document.createElement('table');
  cardBodyEmployees?.appendChild(tableEmployees);

  const tHead = document.createElement('thead');
  tableEmployees.appendChild(tHead);

  tHeaders.forEach(element => {
    const tHeadCol = document.createElement('th');
    tHeadCol.textContent = element;
    tHead.appendChild(tHeadCol);
  });

  const tBody = document.createElement('tbody');
  tableEmployees.appendChild(tBody);

  data.data.forEach(element => {
    const {
      id, 
      cc,
      first_name, 
      second_name, 
      last_name, 
      second_last_name, 
      gender, 
      birthdate
    } = element;

    const tRow = document.createElement('tr');
    tBody.appendChild(tRow);

    const colId = document.createElement('td');
    colId.textContent = id.toString();
    const colCC = document.createElement('td');
    colCC.textContent = cc;
    const colName = document.createElement('td');
    colName.textContent = `${first_name} ${second_name} ${last_name} ${second_last_name}`;
    const colGender = document.createElement('td');
    colGender.textContent = getGender(gender);
    const colBirthdate = document.createElement('td');
    colBirthdate.textContent = birthdate.toString();
    const colActions = document.createElement('td');
    const divActions = document.createElement('div');
    const divActionsFull = createBtnActions(divActions, id);
    colActions.appendChild(divActionsFull);
    tRow.append(colId, colCC, colName, colGender, colBirthdate, colActions);
  });
  
}

const getGender = (gender: string): string => {
  let found: string = '';
  genders.forEach(element => {
    const {value, text} = element;
    if (value == gender) {
      found = text;
    }
  })
  return found;
}

const createBtnActions = (action: HTMLDivElement, id: number): HTMLDivElement => {
  action.classList.add('td-actions');
  const btnWatch = document.createElement('button');
  btnWatch.classList.add('btn-primary');
  btnWatch.innerHTML = eye;
  //btnWatch.setAttribute('id-employee', `${id}`);
  btnWatch.addEventListener('click', event => {
    const modalInfoEmployee: Element | null = document.querySelector('#modal-info-employee');
    modalInfoEmployee?.classList.toggle('hidden');
    
    getEmployee(id)
      .then( resp => {
        showModalEmployee(resp);
      }).catch( error => {
        console.error(error);
      }).finally( () => {
        console.log('Empleado consultado');
      });
  });

  const btnEdit = document.createElement('button');
  btnEdit.classList.add('btn-warning');
  btnEdit.innerHTML = pencilSquare;

  const btnDelete = document.createElement('button');
  btnDelete.classList.add('btn-danger');
  btnDelete.innerHTML = trash;

  action.append(btnWatch, btnEdit, btnDelete);

  return action;
}
