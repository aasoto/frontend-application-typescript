import { Projects } from "../../interfaces/projects";
import { tHeadersProject } from "../../prelim-data/data";
import { checkCircle } from "../../prelim-data/icons";
import { EmployeeProjectRequest } from "../../requests/EmployeeProjectRequest";
import { makeTableEmployees } from "./table-employees";

export const showModalAssignProject = (data: Projects, id: number): void => {

  const projectsListAssign = document.getElementById('projects-list-assign');

  while (projectsListAssign?.firstChild) {
    projectsListAssign.removeChild(projectsListAssign.firstChild);
  }


  /** ARMAR TABLA */
  /** Cabecera de la tabla */
  const tableProjects = document.createElement('table');
  projectsListAssign?.appendChild(tableProjects);

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
  projectsListAssign?.appendChild(pagination);

  data.links.forEach(element => {
    const { url, label, active } = element;

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


const createBtnActions = (action: HTMLDivElement, id: number): HTMLDivElement => {
  action.classList.add('td-actions');
  /**
   * BOTÓN ASIGNAR PROYECTO
   */
  const btnAddProject = document.createElement('button');
  btnAddProject.classList.add('btn-success');
  btnAddProject.innerHTML = checkCircle;
  btnAddProject.title = 'Asignar projecto a empleado';
  //btnWatch.setAttribute('id-employee', `${id}`);
  btnAddProject.addEventListener('click', event => {
    const modalAddEmployeeProject: Element | null = document.querySelector('#modal-add-employe-project');
    const cardEmployeeProjectAdd: Element | null = document.querySelector('#card-employee-project-add');
    modalAddEmployeeProject?.classList.toggle('hidden');
    cardEmployeeProjectAdd?.classList.toggle('hidden');

    const interception = new EmployeeProjectRequest();
    interception.getProjects()
      .then(resp => {
        showModalAssignProject(resp, id);
      }).catch(error => {
        console.error(error);
      }).finally(() => {
        console.log('Proyectos consultados');
      });
  });

  action.appendChild(btnAddProject);

  return action;
}