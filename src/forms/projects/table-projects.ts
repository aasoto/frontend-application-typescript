import { Projects } from "../../interfaces/projects";
import { tHeadersProject } from "../../prelim-data/data";
import { eye, pencilSquare, trash } from "../../prelim-data/icons";
import { ProjectRequest } from "../../requests/ProjectRequest";
import { showModalDelete } from "./modal-delete-project";
import { showModalEditProject } from "./modal-edit-project";
import { showModalProject } from "./modal-info-project";

export const makeTableProjects = (url: string = 'http://127.0.0.1:8000/api/projects') => {
  const request = new ProjectRequest();
  request.get(url)
  .then(resp => {
    showProjects(resp);
  }).catch(error => {
    console.error(error);
  }).finally(() => {
    console.log('Consulta terminada...');
  });
}

const showProjects = (data: Projects):void => {
  
  const cardBodyProjects = document.getElementById('projects-list');

  /** Borrar elementos del cuerpo de la card */
  while (cardBodyProjects?.firstChild) {
    cardBodyProjects.removeChild(cardBodyProjects.firstChild);
  }

  /** ARMAR TABLA */
  /** Cabecera de la tabla */
  const tableProjects = document.createElement('table');
  cardBodyProjects?.appendChild(tableProjects);

  const tHead = document.createElement('thead');
  tableProjects.appendChild(tHead);

  tHeadersProject.forEach(element => {
    const tHeadCol = document.createElement('th');
    tHeadCol.textContent = element;
    tHead.appendChild(tHeadCol);
  });

  /** Cuerpo de la tabla */
  const tBody = document.createElement('tbody');
  tableProjects.appendChild(tBody);

  data.data.forEach(element => {
    const {
      id,
      title,
      start_execution,
      end_execution,
      contractor_company
    } = element;

    const tRow = document.createElement('tr');
    tBody.appendChild(tRow);

    const colTitle = document.createElement('td');
    colTitle.textContent = title;

    const colStartExecution = document.createElement('td');
    colStartExecution.textContent = start_execution.toString();

    const colEndExecution = document.createElement('td');
    end_execution ? colEndExecution.textContent = end_execution?.toString() : colEndExecution.textContent = '';

    const colContractorCompany = document.createElement('td');
    colContractorCompany.textContent = contractor_company.business_name;

    const colActions = document.createElement('td');
    const divActions = document.createElement('div');
    const divActionsFull = createBtnActions(divActions, id);
    colActions.appendChild(divActionsFull);
    tRow.append(colTitle, colStartExecution, colEndExecution, colContractorCompany, colActions);
  });

  /** Opciones de paginación */
  const pagination = document.createElement('div');
  pagination.classList.add('line-center-items');
  pagination.classList.add('mt-5')
  cardBodyProjects?.appendChild(pagination);
  
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
        makeTableProjects(url);
      }
    });
  });
}

const createBtnActions = (action: HTMLDivElement, id: number): HTMLDivElement => {
  action.classList.add('td-actions');

  const request = new ProjectRequest();


  /**
   * BOTÓN VER MÁS
   */
  const btnWatch = document.createElement('button');
  btnWatch.classList.add('btn-primary');
  btnWatch.innerHTML = eye;
  //btnWatch.setAttribute('id-employee', `${id}`);
  btnWatch.addEventListener('click', event => {
    const modalInfoProject: Element | null = document.querySelector('#modal-info-project');
    const cardProjectInfo: Element | null = document.querySelector('#card-project-info');
    modalInfoProject?.classList.toggle('hidden');
    cardProjectInfo?.classList.toggle('hidden');

    request.getProject(id)
      .then( resp => {
        showModalProject(resp);
      }).catch( error => {
        console.error(error);
      }).finally( () => {
        console.log('Proyecto consultado');
      });
  });

  /**
   * BOTÓN EDITAR
   */
  const btnEdit = document.createElement('button');
  btnEdit.classList.add('btn-warning');
  btnEdit.innerHTML = pencilSquare;

  btnEdit.addEventListener('click', event => {
    const projectEdit = document.getElementById('project-edit');

    /** Borrar elementos del cuerpo de la card */
    while (projectEdit?.firstChild) {
      projectEdit.removeChild(projectEdit.firstChild);
    }

    const modalEditProject: Element | null = document.querySelector('#modal-edit-project');
    const cardProjectEdit: Element | null = document.querySelector('#card-project-edit');
    modalEditProject?.classList.toggle('hidden');
    cardProjectEdit?.classList.toggle('hidden');

    request.getProject(id)
      .then( resp => {
        showModalEditProject(resp);
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
    showModalDelete(id);
  });

  action.append(btnWatch, btnEdit, btnDelete);

  return action;
}