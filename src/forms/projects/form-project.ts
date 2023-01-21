import { ContractorOptions } from '../../interfaces/contractorsList';
import { Project } from "../../interfaces/project";
import { fieldsProject } from '../../prelim-data/data';
import { ContractorRequest } from "../../requests/ContractorRequest";


let contractorCompanies: ContractorOptions;

export const formProject = (element: string = 'project-add', data: Project | null) => {
  
  getContractorCompanies(element, data);
  
}

const getContractorCompanies = (element: string, data: Project | null) => {
  const contractor = new ContractorRequest();
  
  contractor.getCleanList()
  .then( resp => {
    setContractors(resp, element, data);
  }).catch( error => {
    console.error(error);
  });

}

const setContractors = (contractors: ContractorOptions, element: string, data: Project | null) => {
  // console.log(contractors);
  contractorCompanies = contractors;
  makeFormContractor(element, data);
}

const makeFormContractor = (element: string, data: Project | null) => {
  const projectAdd = document.getElementById(element);
  while (projectAdd?.firstChild) {
    projectAdd.removeChild(projectAdd.firstChild);
  }
    
  const grid: HTMLDivElement = document.createElement('div');
  grid.classList.add('grid-form');
  
  /**Campo de enviado */
  const sent: HTMLInputElement = document.createElement('input');
  sent.id = 'sent';
  sent.type = 'hidden';
  sent.value = 'false';
  grid.appendChild(sent);

  if (data) {
    const {title, description, start_execution, end_execution, contractor_company_id} = data;
    let dataFiltered: string[] = [];
    dataFiltered[0] = title;
    dataFiltered[1] = description;
    dataFiltered[2] = start_execution;
    dataFiltered[3] = end_execution ?  end_execution : '';
    dataFiltered[4] = contractor_company_id.toString();

    let index = 0; 
    fieldsProject.forEach(element => {
      const {cols, id, placeholder, type} = element;
        if (type == 'select') {
          const field = selectElement(cols, id, placeholder, contractorCompanies, dataFiltered[index]);
          grid.appendChild(field);
        } else if (type == 'textarea') {
          const field = textareaElement(cols, id, placeholder, type, dataFiltered[index]);
          grid.appendChild(field);
        } else {
          const field = inputElement(cols, id, placeholder, type, dataFiltered[index]);
          grid.appendChild(field);
        }
      index ++;
    });
    
  } else {

    fieldsProject.forEach(element => {
      const {cols, id, placeholder, type} = element;
      if (type == 'select') {
        const field = selectElement(cols, id, placeholder, contractorCompanies);
        grid.appendChild(field);
      } else if (type == 'textarea') {
        const field = textareaElement(cols, id, placeholder, type);
        grid.appendChild(field);
      } else {
        const field = inputElement(cols, id, placeholder, type);
        grid.appendChild(field);
      }
    });

  }


  projectAdd?.appendChild(grid);

}

const inputElement = (cols: number, id: string, placeholder: string, type: string, value: string = ''): HTMLDivElement => {

  const cell: HTMLDivElement = document.createElement('div');
  cell.classList.add(`col-span-${cols}`);

  const labelError = document.createElement('label');
  labelError.classList.add('text-error');
  labelError.setAttribute('for', id);
  labelError.id = `${id}-error`;

  const input: HTMLInputElement = document.createElement('input');
  input.classList.add('input-normal');
  input.id = id;
  input.name = id;
  input.value = value;
  input.placeholder = placeholder;

  input.type = type;
  
  cell.append(labelError, input);
  
  return cell;
}

const textareaElement = (cols: number, id: string, placeholder: string, type: string, value: string = ''): HTMLDivElement => {

  const cell: HTMLDivElement = document.createElement('div');
  cell.classList.add(`col-span-${cols}`);

  const labelError = document.createElement('label');
  labelError.classList.add('text-error');
  labelError.setAttribute('for', id);
  labelError.id = `${id}-error`;

  const textarea: HTMLTextAreaElement = document.createElement('textarea');
  textarea.classList.add('input-normal');
  textarea.id = id;
  textarea.name = id;
  textarea.value = value;
  textarea.placeholder = placeholder;
  textarea.rows = 6;
  
  cell.append(labelError, textarea);
  
  return cell;
}

const selectElement = (cols: number, id: string, placeholder: string, options: ContractorOptions, value: string = ''): HTMLDivElement => {
  const cell: HTMLDivElement = document.createElement('div');
  cell.classList.add(`col-span-${cols}`);

  const labelError = document.createElement('label');
  labelError.classList.add('text-error');
  labelError.setAttribute('for', id);
  labelError.id = `${id}-error`;

  const select: HTMLSelectElement = document.createElement('select');
  select.classList.add('input-normal');
  select.id = id;
  select.name = id;
  select.title = placeholder,
  cell.append(labelError, select);

  const optionEmpty = document.createElement('option');
  optionEmpty.value = '';
  optionEmpty.textContent = `${placeholder}...`;
  select.appendChild(optionEmpty);
  
  options.forEach(element => {
    const option = document.createElement('option');
    option.value = element.id.toString();
    option.textContent = element.business_name;
    if (element.id.toString() == value) {
      option.selected = true;
    }
    select.appendChild(option);
  });

  return cell;
}