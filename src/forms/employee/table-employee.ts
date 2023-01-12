import { Employee } from "../../interfaces/employee";

export const makeTableEmployee = (data: Employee): HTMLTableElement => {
  const {
    cc, 
    first_name, 
    second_name, 
    last_name, 
    second_last_name, 
    gender, 
    birthdate, 
    profile_photo
  } = data;

  const table: HTMLTableElement = document.createElement('table');
  table.classList.add('table-employee');

  const tbody: HTMLTableSectionElement = document.createElement('tbody');
  table.appendChild(tbody);

  const row1: HTMLTableRowElement = tr();
  table.appendChild(row1);

  const cellPhoto: HTMLTableCellElement = td();
  cellPhoto.classList.add('cell');
  cellPhoto.colSpan = 2;
  cellPhoto.rowSpan = 4;
  cellPhoto.id = 'employee-photo';
  const photo: HTMLImageElement = document.createElement('img');
  photo.src = '';
  cellPhoto.appendChild(photo);

  const cellTFirstName: HTMLTableCellElement = td();
  cellTFirstName.classList.add('cell-head');
  cellTFirstName.textContent = 'Primer nombre';

  const cellTSecondName: HTMLTableCellElement = td();
  cellTSecondName.classList.add('cell-head');
  cellTSecondName.textContent = 'Segundo nombre';

  row1.append(cellPhoto, cellTFirstName, cellTSecondName);

  const row2: HTMLTableRowElement = tr();
  table.appendChild(row2);

  const cellFirstName: HTMLTableCellElement = td();
  cellFirstName.classList.add('cell');
  cellFirstName.id = 'employee-first-name';
  cellFirstName.textContent = first_name;

  const cellSecondName: HTMLTableCellElement = td();
  cellSecondName.classList.add('cell');
  cellSecondName.id = 'employee-second-name';
  cellSecondName.textContent = second_name;

  row2.append(cellFirstName, cellSecondName);

  const row3: HTMLTableRowElement = tr();
  table.appendChild(row3);

  const cellTLastName: HTMLTableCellElement = td();
  cellTLastName.classList.add('cell-head');
  cellTLastName.textContent = 'Primer apellido';

  const cellTSecondLastName: HTMLTableCellElement = td();
  cellTSecondLastName.classList.add('cell-head');
  cellTSecondLastName.textContent = 'Segundo apellido';

  row3.append(cellTLastName, cellTSecondLastName);

  const row4: HTMLTableRowElement = tr();
  table.appendChild(row4);

  const cellLastName: HTMLTableCellElement = td();
  cellLastName.classList.add('cell');
  cellLastName.id = 'employee-last-name';
  cellLastName.textContent = last_name;

  const cellSecondLastName: HTMLTableCellElement = td();
  cellSecondLastName.classList.add('cell');
  cellSecondLastName.id = 'employee-second-last-name';
  cellSecondLastName.textContent = second_last_name;

  row4.append(cellLastName, cellSecondLastName);

  const row5: HTMLTableRowElement = tr();
  table.appendChild(row5);

  const cellTCC: HTMLTableCellElement = td();
  cellTCC.classList.add('cell-head');
  cellTCC.textContent = 'Num. identificación';

  const cellTGender: HTMLTableCellElement = td();
  cellTGender.classList.add('cell-head');
  cellTGender.textContent = 'Genero';

  const cellTBirthdate: HTMLTableCellElement = td();
  cellTBirthdate.classList.add('cell-head');
  cellTBirthdate.textContent = 'Fec. nacimiento';

  const cellTAge: HTMLTableCellElement = td();
  cellTAge.classList.add('cell-head');
  cellTAge.textContent = 'Edad';

  row5.append(cellTCC, cellTGender, cellTBirthdate, cellTAge);

  const row6: HTMLTableRowElement = tr();
  table.appendChild(row6);

  const cellCC: HTMLTableCellElement = td();
  cellCC.classList.add('cell');
  cellCC.id = 'employee-cc';
  cellCC.textContent = cc;

  const cellGender: HTMLTableCellElement = td();
  cellGender.classList.add('cell');
  cellGender.id = 'employee-gender';
  cellGender.textContent = gender;
  
  const cellBirthdate: HTMLTableCellElement = td();
  cellBirthdate.classList.add('cell');
  cellBirthdate.id = 'employee-birthdate';
  cellBirthdate.textContent = birthdate.toString();

  const cellAge: HTMLTableCellElement = td();
  cellAge.classList.add('cell');
  cellAge.id = 'employee-age';
  cellAge.textContent = 'nn';

  row6.append(cellCC, cellGender, cellBirthdate, cellAge);
  
  return table;
}

const tr = (): HTMLTableRowElement => {
  return document.createElement('tr');
}

const td = (): HTMLTableCellElement => {
  return document.createElement('td');
}