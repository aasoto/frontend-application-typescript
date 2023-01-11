import { Employee } from "../interfaces/employee";
import { fields } from "../prelim-data/data";

type Genders = {
  value: string;
  text: string;
}[];

const genders: Genders = [
  {
    value: '',
    text: 'Genero...'
  },{
    value: 'm',
    text: 'Másculino'
  },{
    value: 'f',
    text: 'Femenino'
  },{
    value: 'o',
    text: 'Otro'
  },{
    value: 'ne',
    text: 'No especifico'
  }
]

export const formEmployee = (data: Employee | null): HTMLDivElement => {
  const grid: HTMLDivElement = document.createElement('div');
  grid.classList.add('grid-form');

  if (data) {
    const {cc, first_name, second_name, last_name, second_last_name, gender, birthdate, profile_photo} = data;
    let dataFiltered: string[] = [];
    dataFiltered[0] = cc;
    dataFiltered[1] = first_name;
    dataFiltered[2] = second_name? second_name : '';
    dataFiltered[3] = last_name;
    dataFiltered[4] = second_last_name? second_last_name : '';
    dataFiltered[5] = gender? gender : '';
    dataFiltered[6] = birthdate? birthdate.toString() : '';
    dataFiltered[7] = profile_photo;
    
    let index = 0; 
    fields.forEach(element => {
      const {cols, id, placeholder, type} = element;
      if (type == 'select') {
        const field = selectElement(cols, id, placeholder, genders, dataFiltered[index]);
        grid.appendChild(field);
      } else {
        const field = inputElement(cols, id, placeholder, type, dataFiltered[index]);
        grid.appendChild(field);
      }
      index ++;
    });
  } else {
    fields.forEach(element => {
      const {cols, id, placeholder, type} = element;
      if (type == 'select') {
        const field = selectElement(cols, id, placeholder, genders);
        grid.appendChild(field);
      } else {
        const field = inputElement(cols, id, placeholder, type);
        grid.appendChild(field);
      }
    });
  }

  return grid;
}

const inputElement = (cols: number, id: string, placeholder: string, type: string, value: string = ''): HTMLDivElement => {

  const cell: HTMLDivElement = document.createElement('div');
  cell.classList.add(`col-span-${cols}`);

  const input: HTMLInputElement = document.createElement('input');
  input.classList.add('input-normal');
  input.id = id;
  input.name = id;
  if (type == 'date') {
    input.title = placeholder;
    input.value = value;
  } else if(type == 'file'){
    input.title = placeholder;
  } else {
    input.placeholder = placeholder;
    input.value = value;
  }
  input.type = type;
  cell.appendChild(input);
  return cell;
}

const selectElement = (cols: number, id: string, placeholder: string, options: Genders, value: string = ''): HTMLDivElement => {
  const cell: HTMLDivElement = document.createElement('div');
  cell.classList.add(`col-span-${cols}`);

  const select: HTMLSelectElement = document.createElement('select');
  select.classList.add('input-normal');
  select.id = id;
  select.name = id;
  select.title = placeholder,
  cell.appendChild(select);

  options.forEach(element => {
    const option = document.createElement('option');
    option.value = element.value;
    option.textContent = element.text;
    if (element.value == value) {
      option.selected = true;
    }
    select.appendChild(option);
  });

  return cell;
}