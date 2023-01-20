import { Project } from "../../interfaces/project";

const projectInfo = document.getElementById('project-info');

export const showModalProject = (data: Project) => {

  while (projectInfo?.firstChild) {
    projectInfo.removeChild(projectInfo.firstChild);
  }

  makeTableContractor(data);
}


const makeTableContractor = (data: Project): void => {
  const {
    title,
    description,
    start_execution,
    contractor_company,
    end_execution
  } = data;

  const table: HTMLTableElement = document.createElement('table');
  table.classList.add('table-employee');

  const tbody: HTMLTableSectionElement = document.createElement('tbody');
  table.appendChild(tbody);

  const row1: HTMLTableRowElement = tr();
  table.appendChild(row1);

  const cellTTitle: HTMLTableCellElement = td();
  cellTTitle.classList.add('cell-head');
  cellTTitle.textContent = 'Título';
  cellTTitle.colSpan = 3;

  row1.appendChild(cellTTitle);

  const row2: HTMLTableRowElement = tr();
  table.appendChild(row2);

  const cellTitle: HTMLTableCellElement = td();
  cellTitle.classList.add('cell');
  cellTitle.id = 'project-title';
  cellTitle.colSpan = 3;
  cellTitle.textContent = title;

  row2.appendChild(cellTitle);

  const row3: HTMLTableRowElement = tr();
  table.appendChild(row3);

  const cellTDescription: HTMLTableCellElement = td();
  cellTDescription.classList.add('cell-head');
  cellTDescription.textContent = 'Descripción';
  cellTDescription.colSpan = 3;

  row3.appendChild(cellTDescription);

  const row4: HTMLTableRowElement = tr();
  table.appendChild(row4);

  const cellDescription: HTMLTableCellElement = td();
  cellDescription.classList.add('cell');
  cellDescription.id = 'project-description';
  cellDescription.colSpan = 3;
  cellDescription.textContent = description;

  row4.appendChild(cellDescription);

  const row5: HTMLTableRowElement = tr();
  table.appendChild(row5);

  const cellTStartExecution: HTMLTableCellElement = td();
  cellTStartExecution.classList.add('cell-head');
  cellTStartExecution.textContent = 'Inicio de ejecución';

  const cellTEndExecution: HTMLTableCellElement = td();
  cellTEndExecution.classList.add('cell-head');
  cellTEndExecution.textContent = 'Final de ejecución';

  const cellTContractorCompany: HTMLTableCellElement = td();
  cellTContractorCompany.classList.add('cell-head');
  cellTContractorCompany.textContent = 'Empresa contratista';

  row5.append(cellTStartExecution, cellTEndExecution, cellTContractorCompany);

  const row6: HTMLTableRowElement = tr();
  table.appendChild(row6);

  const cellStartExecution: HTMLTableCellElement = td();
  cellStartExecution.classList.add('cell');
  cellStartExecution.id = 'project-start-execution';
  cellStartExecution.textContent = start_execution;

  const cellEndExecution: HTMLTableCellElement = td();
  cellEndExecution.classList.add('cell');
  cellEndExecution.id = 'project-end-execution';
  end_execution? cellEndExecution.textContent = end_execution : cellEndExecution.textContent = '';

  const cellContractorCompany: HTMLTableCellElement = td();
  cellContractorCompany.classList.add('cell');
  cellContractorCompany.id = 'project-contractor-company';
  contractor_company? cellContractorCompany.textContent = contractor_company.business_name : cellContractorCompany.textContent = '';

  row6.append(cellStartExecution, cellEndExecution, cellContractorCompany);

  projectInfo?.appendChild(table);
}

const tr = (): HTMLTableRowElement => {
  return document.createElement('tr');
}

const td = (): HTMLTableCellElement => {
  return document.createElement('td');
}
