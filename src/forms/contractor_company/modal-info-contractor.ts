import { Contractor } from "../../interfaces/contractor";
import { Country } from "../../interfaces/country";
import { ContractorRequest } from "../../requests/ContractorRequest";

const employeeInfo = document.getElementById('contractor-info');

export const showModalContractor = (data: Contractor): void => {
  console.log(data);

  while (employeeInfo?.firstChild) {
    employeeInfo.removeChild(employeeInfo.firstChild);
  }

  getCountry(data, data.country_id);

}

const getCountry = (data: Contractor, id: number): void => {
  let country: Country | undefined;
  const request = new ContractorRequest();

  request.getCountry(id)
  .then( resp => {
    makeTableContractor(data, resp.name);
  }).catch( error => {
    console.error(error);
  });
  
}

const makeTableContractor = (data: Contractor, country: string): void => {
  const {
    nit, 
    business_name, 
    address, 
    responsable, 
    email,
    phone, 
    tags
  } = data;

  const table: HTMLTableElement = document.createElement('table');
  table.classList.add('table-employee');

  const tbody: HTMLTableSectionElement = document.createElement('tbody');
  table.appendChild(tbody);

  const row1: HTMLTableRowElement = tr();
  table.appendChild(row1);

  const cellTNIT: HTMLTableCellElement = td();
  cellTNIT.classList.add('cell-head');
  cellTNIT.textContent = 'NIT';

  const cellTBusinessName: HTMLTableCellElement = td();
  cellTBusinessName.classList.add('cell-head');
  cellTBusinessName.textContent = 'Razón social';

  const cellTAddress: HTMLTableCellElement = td();
  cellTAddress.classList.add('cell-head');
  cellTAddress.textContent = 'Dirección';

  const cellTCountry: HTMLTableCellElement = td();
  cellTCountry.classList.add('cell-head');
  cellTCountry.textContent = 'País';

  row1.append(cellTNIT, cellTBusinessName, cellTAddress, cellTCountry);

  const row2: HTMLTableRowElement = tr();
  table.appendChild(row2);

  const cellNIT: HTMLTableCellElement = td();
  cellNIT.classList.add('cell');
  cellNIT.id = 'contractor-nit';
  cellNIT.textContent = nit;

  const cellBusinessName: HTMLTableCellElement = td();
  cellBusinessName.classList.add('cell');
  cellBusinessName.id = 'contractor-business-name';
  cellBusinessName.textContent = business_name;

  const cellAddress: HTMLTableCellElement = td();
  cellAddress.classList.add('cell');
  cellAddress.id = 'contractor-address';
  cellAddress.textContent = address;

  const cellCountry: HTMLTableCellElement = td();
  cellCountry.classList.add('cell');
  cellCountry.id = 'contractor-second-name';
  cellCountry.textContent = country;
  row2.append(cellNIT, cellBusinessName, cellAddress, cellCountry);

  const row3: HTMLTableRowElement = tr();
  table.appendChild(row3);

  const cellTResponsable: HTMLTableCellElement = td();
  cellTResponsable.classList.add('cell-head');
  cellTResponsable.textContent = 'Responsable';

  const cellTEmail: HTMLTableCellElement = td();
  cellTEmail.classList.add('cell-head');
  cellTEmail.textContent = 'Correo electronico';

  const cellTPhone: HTMLTableCellElement = td();
  cellTPhone.classList.add('cell-head');
  cellTPhone.textContent = 'Telefono';

  const cellTTags: HTMLTableCellElement = td();
  cellTTags.classList.add('cell-head');
  cellTTags.textContent = 'Etiquetas';

  row3.append(cellTResponsable, cellTEmail, cellTPhone, cellTTags);

  const row4: HTMLTableRowElement = tr();
  table.appendChild(row4);

  const cellResponsable: HTMLTableCellElement = td();
  cellResponsable.classList.add('cell');
  cellResponsable.id = 'employee-responsable';
  cellResponsable.textContent = responsable;

  const cellEmail: HTMLTableCellElement = td();
  cellEmail.classList.add('cell');
  cellEmail.id = 'employee-email';
  cellEmail.textContent = email;

  const cellPhone: HTMLTableCellElement = td();
  cellPhone.classList.add('cell');
  cellPhone.id = 'employee-phone';
  cellPhone.textContent = phone;

  const cellTags: HTMLTableCellElement = td();
  cellTags.classList.add('cell');
  cellTags.id = 'employee-tags';
  cellTags.textContent = printTags(JSON.parse(tags));

  row4.append(cellResponsable, cellEmail, cellPhone, cellTags);

  employeeInfo?.appendChild(table);
}

const tr = (): HTMLTableRowElement => {
  return document.createElement('tr');
}

const td = (): HTMLTableCellElement => {
  return document.createElement('td');
}


const printTags = (tags: string[]): string => {
  let tagsString: string = '';

  tags.forEach(element => {
    tagsString = tagsString + element + ', ';
  });

  return tagsString;
}
