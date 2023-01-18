import { ContractorCompany } from "../../interfaces/contractor-company";
import { Country } from "../../interfaces/country";
import { tHeadersContractor } from "../../prelim-data/data";
import { eye, pencilSquare, trash } from "../../prelim-data/icons";
import { ContractorRequest } from "../../requests/ContractorRequest";
import { showModalContractor } from "./modal-info-contractor";

const request = new ContractorRequest();

export const makeTableContractor = (url: string = 'http://127.0.0.1:8000/api/contractor-company') => {
  request.get(url)
  .then(resp => {
    showContractors(resp);
  }).catch(error => {
    console.error(error);
  }).finally(() => {
    console.log('Consulta terminada...');
  });
}


const showContractors = (data: ContractorCompany):void => {
  
  const cardBodyContractors = document.getElementById('contractors-list');

  /** Borrar elementos del cuerpo de la card */
  while (cardBodyContractors?.firstChild) {
    cardBodyContractors.removeChild(cardBodyContractors.firstChild);
  }

  /** ARMAR TABLA */
  /** Cabecera de la tabla */
  const tableEmployees = document.createElement('table');
  cardBodyContractors?.appendChild(tableEmployees);

  const tHead = document.createElement('thead');
  tableEmployees.appendChild(tHead);

  tHeadersContractor.forEach(element => {
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
      nit,
      business_name,
      country_id,
      tags,
      phone
    } = element;

    const tRow = document.createElement('tr');
    tBody.appendChild(tRow);

    const colNIT = document.createElement('td');
    colNIT.textContent = nit.toString();
    const colBusinessName = document.createElement('td');
    colBusinessName.textContent = business_name;
    const colCountryID = document.createElement('td');
    colCountryID.textContent = getCountry(country_id);
    const colTags = document.createElement('td');
    if (tags) {
      colTags.textContent = printTags(JSON.parse(tags));
    }
    const colPhone = document.createElement('td');
    colPhone.textContent = phone;
    const colActions = document.createElement('td');
    const divActions = document.createElement('div');
    const divActionsFull = createBtnActions(divActions, id);
    colActions.appendChild(divActionsFull);
    tRow.append(colNIT, colBusinessName, colCountryID, colTags, colPhone, colActions);
  });

  /** Opciones de paginación */
  const pagination = document.createElement('div');
  pagination.classList.add('line-center-items');
  pagination.classList.add('mt-5')
  cardBodyContractors?.appendChild(pagination);
  
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
        makeTableContractor(url);
      }
    });
  });
}

const getCountry = (id: number): string => {
  let country: Country | undefined;

  request.getCountry(id)
  .then( resp => {
    country = resp;
  }).catch( error => {
    console.error(error);
  });

  if (country?.name) {
    return country?.name;
  } else {
    return '';
  }
}

const printTags = (tags: string[]): string => {
  let tagsString: string = '';

  tags.forEach(element => {
    tagsString = tagsString + element + ', ';
  });

  return tagsString;
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
    const modalInfoContractor: Element | null = document.querySelector('#modal-info-contractor');
    const cardContractorInfo: Element | null = document.querySelector('#card-contractor-info');
    modalInfoContractor?.classList.toggle('hidden');
    cardContractorInfo?.classList.toggle('hidden');

    request.getContractor(id)
      .then( resp => {
        showModalContractor(resp);
      }).catch( error => {
        console.error(error);
      }).finally( () => {
        console.log('Empresa contratista consultada');
      });
  });

  /**
   * BOTÓN EDITAR
   */
  const btnEdit = document.createElement('button');
  btnEdit.classList.add('btn-warning');
  btnEdit.innerHTML = pencilSquare;

  btnEdit.addEventListener('click', event => {
    // const employeeEdit = document.getElementById('employee-edit');

    // /** Borrar elementos del cuerpo de la card */
    // while (employeeEdit?.firstChild) {
    //   employeeEdit.removeChild(employeeEdit.firstChild);
    // }

    // const modalEditEmployee: Element | null = document.querySelector('#modal-edit-employee');
    // const cardEmployeeEdit: Element | null = document.querySelector('#card-employee-edit');
    // modalEditEmployee?.classList.toggle('hidden');
    // cardEmployeeEdit?.classList.toggle('hidden');

    // request.getEmployee(id)
    //   .then( resp => {
    //     showModalEditEmployee(resp);
    //   }).catch( error => {
    //     console.error(error);
    //   }).finally( () => {
    //     console.log('Empleado consultado');
    //   });
  });

  /**
   * BOTÓN ELIMINAR
   */
  const btnDelete = document.createElement('button');
  btnDelete.classList.add('btn-danger');
  btnDelete.innerHTML = trash;

  btnDelete.addEventListener('click', event => {
    // showModalDelete(id);
  });

  action.append(btnWatch, btnEdit, btnDelete);

  return action;
}