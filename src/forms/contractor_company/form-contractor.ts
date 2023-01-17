import { Contractor } from "../../interfaces/contractor";
import { fieldsContractor } from "../../prelim-data/data";
import { ContractorRequest } from '../../requests/ContractorRequest';
// import { Countries as CountriesInterface } from '../../interfaces/country';

type Countries = {
  id:   number;
  name: string;
}[];

let countries: Countries;
export let tagsArray: string[] = [];

const contractor = new ContractorRequest();

export const formContractor = (data: Contractor | null) => {

  getCountries();

}

const getCountries = () => {
  
  contractor.getCountries()
  .then( resp => {
    setCountries(resp);
  }).catch( error => {
    console.error(error);
  });

}

const setCountries = (data: Countries) => {
  countries = data;
  makeFormContractor();
}

const makeFormContractor = () => {
  const contractorAdd = document.getElementById('contractor-add');
  while (contractorAdd?.firstChild) {
    contractorAdd.removeChild(contractorAdd.firstChild);
  }
    

  const grid: HTMLDivElement = document.createElement('div');
  grid.classList.add('grid-form');
  
  /**Campo de enviado */
  const sent: HTMLInputElement = document.createElement('input');
  sent.id = 'sent';
  sent.type = 'hidden';
  sent.value = 'false';
  grid.appendChild(sent);

  fieldsContractor.forEach(element => {
    const {cols, id, placeholder, type} = element;
      if (type == 'select') {
        const field = selectElement(cols, id, placeholder, countries);
        grid.appendChild(field);
      } else {
        const field = inputElement(cols, id, placeholder, type);
        grid.appendChild(field);
      }
  });

  contractorAdd?.appendChild(grid);
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
  if (type == 'date') {
    input.title = placeholder;
  } else {
    input.placeholder = placeholder;
  }

  input.type = type;
  
  cell.append(labelError, input);
  
  if (id == 'tags') {
    cell.appendChild(saveTags(input, cell));
  }
  return cell;
}

const selectElement = (cols: number, id: string, placeholder: string, options: Countries, value: string = ''): HTMLDivElement => {
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
  optionEmpty.textContent = 'País...';
  select.appendChild(optionEmpty);

  options.forEach(element => {
    const option = document.createElement('option');
    option.value = element.id.toString();
    option.textContent = element.name;
    if (element.id.toString() == value) {
      option.selected = true;
    }
    select.appendChild(option);
  });

  return cell;
}

const saveTags = (input: HTMLInputElement, cell: HTMLDivElement): HTMLDivElement => {
  cell.classList.add('flex');
  cell.classList.add('flex-col');

  const spaceTags = document.createElement('div');
  spaceTags.classList.add('grid-3');
  spaceTags.classList.add('mt-5');

  input.addEventListener('keypress', event => {
    const tagsInput: HTMLInputElement = (<HTMLInputElement>document.getElementById('tags'));
    if (event.code == 'Enter') {

      const tagsCell = document.createElement('div');
      tagsCell.classList.add('col-span-1');

      const tag = document.createElement('div');
      tag.classList.add('tag-block');
      tag.id = `${tagsInput.value}-tag`;
      tag.textContent = tagsInput?.value;
      tag.title = 'Eliminar etiqueta';
      tag.addEventListener('click', event => {
        const target: HTMLDivElement = (<HTMLDivElement>event.target);

        const tagBlockSelected = document.getElementById(target.id);
        tagBlockSelected?.parentElement?.classList.add('hidden');

        const index = tagsArray.indexOf(<string>target.textContent);
        tagsArray.splice(index, 1);
      });
      tagsCell.appendChild(tag);
      spaceTags.appendChild(tagsCell);
      tagsArray.push(tagsInput?.value);
      tagsInput.value = '';
    }
  });

  return spaceTags;
}