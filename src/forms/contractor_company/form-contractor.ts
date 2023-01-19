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


export const formContractor = (element: string = 'contractor-add', data: Contractor | null) => {
  
  getCountries(element, data);
  
}

const getCountries = (element: string, data: Contractor | null) => {
  const contractor = new ContractorRequest();
  
  contractor.getCountries()
  .then( resp => {
    setCountries(resp, element, data);
  }).catch( error => {
    console.error(error);
  });

}

const setCountries = (country: Countries, element: string, data: Contractor | null) => {
  countries = country;
  makeFormContractor(element, data);
}

const makeFormContractor = (element: string, data: Contractor | null) => {
  const contractorAdd = document.getElementById(element);
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

  if (data) {
    const {nit, business_name, address, country_id, responsable, email, phone, tags} = data;
    let dataFiltered: string[] = [];
    dataFiltered[0] = nit;
    dataFiltered[1] = business_name;
    dataFiltered[2] = address;
    dataFiltered[3] = country_id.toString();
    dataFiltered[4] = responsable;
    dataFiltered[5] = email;
    dataFiltered[6] = phone;
    dataFiltered[7] = tags? tags : '';

    let index = 0; 
    fieldsContractor.forEach(element => {
      const {cols, id, placeholder, type} = element;
        if (type == 'select') {
          const field = selectElement(cols, id, placeholder, countries, dataFiltered[index]);
          grid.appendChild(field);
        } else {
          const field = inputElement(cols, id, placeholder, type, dataFiltered[index]);
          grid.appendChild(field);
        }
      index ++;
    });
  } else {
    
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

  }

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
  if (id != 'tags') {
    input.value = value;
  }
  input.placeholder = placeholder;

  input.type = type;
  
  cell.append(labelError, input);
  
  if (id == 'tags') {
    if (value != '') {
      cell.appendChild(editTags(input, cell, value))
    } else {
      cell.appendChild(saveTags(input, cell));
    }
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

const editTags = (input: HTMLInputElement, cell: HTMLDivElement, dataTags: string): HTMLDivElement => {
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

  const tagsData: string[] = JSON.parse(dataTags);

  tagsData.forEach( element => {
    const tagsCell = document.createElement('div');
    tagsCell.classList.add('col-span-1');

    const tag = document.createElement('div');
    tag.classList.add('tag-block-edit');
    tag.id = `${element}-tag`;
    tag.textContent = element;
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
    tagsArray.push(element);
  })

  return spaceTags;
}

export const cleanTagsArray = () => {
  tagsArray = [];
}