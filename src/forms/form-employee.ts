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

export const formEmployee = (): HTMLDivElement => {

  const grid: HTMLDivElement = document.createElement('div');
  grid.classList.add('grid-form');

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

  return grid;
}

const inputElement = (cols: number, id: string, placeholder: string, type: string): HTMLDivElement => {

  const cell: HTMLDivElement = document.createElement('div');
  cell.classList.add(`col-span-${cols}`);

  const input: HTMLInputElement = document.createElement('input');
  input.classList.add('input-normal');
  input.id = id;
  input.name = id;
  if (type == 'date' || type == 'file') {
    input.title = placeholder;
  } else {
    input.placeholder = placeholder;
  }
  input.type = type;
  cell.appendChild(input);
  return cell;
}

const selectElement = (cols: number, id: string, placeholder: string, options: Genders): HTMLDivElement => {
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
    select.appendChild(option);
  });

  return cell;
}