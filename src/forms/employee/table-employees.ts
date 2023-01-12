import { Employees } from "../../interfaces/employees";
import { genders, tHeaders } from "../../prelim-data/data";
import { eye, pencilSquare, trash } from "../../prelim-data/icons";
import { deleteSuccess } from "../alerts";
import { showModalEditEmployee } from "./modal-edit-employee";
import { showModalEmployee } from "./modal-employee";
import { EmployeeRequest } from '../../requests/EmployeeRequest';

const request = new EmployeeRequest();

export const makeTableEmployees = (url: string = 'http://127.0.0.1:8000/api/employee') => {
  request.getEmployees(url)
  .then(resp => {
    showEmployees(resp);
  }).catch(error => {
    console.error(error);
  }).finally(() => {
    console.log('Consulta terminada...');
  });
}

const showEmployees = (data: Employees):void => {
  
  const cardBodyEmployees = document.getElementById('employees-list');

  /** Borrar elementos del cuerpo de la card */
  while (cardBodyEmployees?.firstChild) {
    cardBodyEmployees.removeChild(cardBodyEmployees.firstChild);
  }

  /** ARMAR TABLA */
  /** Cabecera de la tabla */
  const tableEmployees = document.createElement('table');
  cardBodyEmployees?.appendChild(tableEmployees);

  const tHead = document.createElement('thead');
  tableEmployees.appendChild(tHead);

  tHeaders.forEach(element => {
    const tHeadCol = document.createElement('th');
    tHeadCol.textContent = element;
    tHead.appendChild(tHeadCol);
  });

  /** Cuerpo de la tabla */
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

  /** Opciones de paginación */
  const pagination = document.createElement('div');
  pagination.classList.add('line-center-items');
  pagination.classList.add('mt-5')
  cardBodyEmployees?.appendChild(pagination);
  
  data.links.forEach(element => {
    const {url, label, active} = element;

    const button: HTMLButtonElement = document.createElement('button');
    pagination.appendChild(button);

    button.innerHTML = label;
    button.classList.add('btn-pagination');
    if (active) {
      button.setAttribute('status', 'true');
    } else {
      button.setAttribute('status', 'false');
    }

    button.addEventListener('click', event => {
      if (url) {
        makeTableEmployees(url);
      }
    });
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

  /**
   * BOTÓN VER MÁS
   */
  const btnWatch = document.createElement('button');
  btnWatch.classList.add('btn-primary');
  btnWatch.innerHTML = eye;
  //btnWatch.setAttribute('id-employee', `${id}`);
  btnWatch.addEventListener('click', event => {
    const modalInfoEmployee: Element | null = document.querySelector('#modal-info-employee');
    const cardEmployeeInfo: Element | null = document.querySelector('#card-employee-info');
    modalInfoEmployee?.classList.toggle('hidden');
    cardEmployeeInfo?.classList.toggle('hidden');

    request.getEmployee(id)
      .then( resp => {
        showModalEmployee(resp);
      }).catch( error => {
        console.error(error);
      }).finally( () => {
        console.log('Empleado consultado');
      });
  });

  /**
   * BOTÓN EDITAR
   */
  const btnEdit = document.createElement('button');
  btnEdit.classList.add('btn-warning');
  btnEdit.innerHTML = pencilSquare;

  btnEdit.addEventListener('click', event => {
    const employeeEdit = document.getElementById('employee-edit');

    /** Borrar elementos del cuerpo de la card */
    while (employeeEdit?.firstChild) {
      employeeEdit.removeChild(employeeEdit.firstChild);
    }

    const modalEditEmployee: Element | null = document.querySelector('#modal-edit-employee');
    const cardEmployeeEdit: Element | null = document.querySelector('#card-employee-edit');
    modalEditEmployee?.classList.toggle('hidden');
    cardEmployeeEdit?.classList.toggle('hidden');

    request.getEmployee(id)
      .then( resp => {
        showModalEditEmployee(resp);
      }).catch( error => {
        console.error(error);
      }).finally( () => {
        console.log('Empleado consultado');
      });
  });

  /**
   * BOTÓN ELIMINAR
   */
  const btnDelete = document.createElement('button');
  btnDelete.classList.add('btn-danger');
  btnDelete.innerHTML = trash;

  btnDelete.addEventListener('click', event => {
    request.deleteEmployee(id)
    .then( resp => {
      console.log(resp);
      if (resp.status == 'delete') {
        deleteSuccess();
      }
    }).catch( error => {
      console.error(error);
    }).finally( () => {
      console.log('Eliminación empleado finalizada...');
    });
  });

  action.append(btnWatch, btnEdit, btnDelete);

  return action;
}
