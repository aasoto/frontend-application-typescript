import { Employee } from "../../interfaces/employee";
import { fieldsEmployee } from "../../prelim-data/data";

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
  
  /**Campo de enviado */
  const sent: HTMLInputElement = document.createElement('input');
  sent.id = 'sent';
  sent.type = 'hidden';
  sent.value = 'false';
  grid.appendChild(sent);

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
    fieldsEmployee.forEach(element => {
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
    fieldsEmployee.forEach(element => {
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

  const labelError = document.createElement('label');
  labelError.classList.add('text-error');
  labelError.setAttribute('for', id);
  labelError.id = `${id}-error`;

  const input: HTMLInputElement = document.createElement('input');
  input.classList.add('input-normal');
  input.id = id;
  input.name = id;
  if (type == 'date') {
    input.title = placeholder;
    input.value = value;
  } else if(type == 'file'){
    input.title = placeholder;
    const imgPhoto: HTMLImageElement = document.createElement('img');
    showTempImage(input, imgPhoto, value);
    cell.append(labelError, input, imgPhoto);
  } else {
    input.placeholder = placeholder;
    input.value = value;
  }

  input.type = type;

  if (type != 'file') {
    cell.append(labelError, input);
  }
  return cell;
}

const selectElement = (cols: number, id: string, placeholder: string, options: Genders, value: string = ''): HTMLDivElement => {
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

const showTempImage = (input: HTMLInputElement, img: HTMLImageElement, fileURL: string | null = null): void => {
  /** Configurar modal de editar para que pueda tener una imagen */
  const cardModalEdit: HTMLElement | null = document.getElementById('card-employee-edit');
  cardModalEdit?.classList.replace('fixed', 'absolute');
  cardModalEdit?.classList.add('top-10');
  
  if (fileURL) {
    img.classList.add('temp-photo');
    img.classList.add('mx-auto');
    
    img.src = `http://127.0.0.1:8000/profile-photos/${fileURL}`;
  }

  input.addEventListener('change', event => {
    /** Configurar modal de agregar para que pueda tener una imagen */
    const cardModalAdd: HTMLElement | null = document.getElementById('card-employee-add');
    cardModalAdd?.classList.replace('fixed', 'absolute');
    cardModalAdd?.classList.add('top-10');

    const fileInput: HTMLInputElement = (<HTMLInputElement>document.getElementById('profile_photo'));
    const file: File | undefined = fileInput?.files?.[0];
    img.classList.add('temp-photo');
    img.classList.add('mx-auto');

    img.src = URL.createObjectURL(<Blob>(file));
  })
}