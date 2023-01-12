
export const sendSuccess = (): void => {
  const employeeAdd = document.getElementById('employee-add');
  while (employeeAdd?.firstChild) {
    employeeAdd.removeChild(employeeAdd.firstChild);
  }

  const alertSuccess = `
  <div class="flex flex-col justify-center items-center gap-7">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-40 h-40 text-green-600">
      <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
    <div class="flex flex-col justify-center items-center gap-4">
      <h1 class="text-gray-900 font-bold text-3xl text-center">
        El empleado ha sido guardado correctamente.
      </h1>
      <p class="text-center text-gray-600">
        Para seguir añadiendo más empleados cierre este modal y cliquee el botón nuevamente.
      </p>
    </div>                 
  </div>
  `;

  if (employeeAdd) {
    employeeAdd.innerHTML = alertSuccess;
  }

  const footerAdd = document.getElementById('footer-add');
  while (footerAdd?.firstChild) {
    footerAdd.removeChild(footerAdd.firstChild);
  }

  const btnClose = `<button id="close-add-employee-button" class="px-5 py-3 rounded-md bg-red-600 text-white font-bold">
    Cerrar
  </button>
  `;

  if (footerAdd) {
    footerAdd.innerHTML = btnClose;
  }

  const btnCloseCreated: Element | null = document.querySelector('#close-add-employee-button');
  btnCloseCreated?.addEventListener('click', event => {
    const modalAddEmployee: Element | null = document.querySelector('#modal-add-employee');
    const cardEmployeeAdd: Element | null = document.querySelector('#card-employee-add');
    modalAddEmployee?.classList.toggle('hidden');
    cardEmployeeAdd?.classList.toggle('hidden');
  });
}


export const editSuccess = (): void => {
  const employeeEdit = document.getElementById('employee-edit');
  while (employeeEdit?.firstChild) {
    employeeEdit.removeChild(employeeEdit.firstChild);
  }

  const alertSuccess = `
  <div class="flex flex-col justify-center items-center gap-7">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-40 h-40 text-green-600">
      <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
    <div class="flex flex-col justify-center items-center gap-4">
      <h1 class="text-gray-900 font-bold text-3xl text-center">
        El empleado ha sido editado con exito.
      </h1>
      <p class="text-center text-gray-600">
        Para seguir editando más empleados cierre este modal y cliquee el botón nuevamente.
      </p>
    </div>                 
  </div>
  `;

  if (employeeEdit) {
    employeeEdit.innerHTML = alertSuccess;
  }

  const footerEdit = document.getElementById('footer-edit');
  while (footerEdit?.firstChild) {
    footerEdit.removeChild(footerEdit.firstChild);
  }

  const btnClose = `
  <button id="close-edit-employee-button" class="px-5 py-3 rounded-md bg-red-600 text-white font-bold">
    Cerrar
  </button>
  `;

  if (footerEdit) {
    footerEdit.innerHTML = btnClose;
  }

  const btnCloseUpdated: Element | null = document.querySelector('#close-edit-employee-button');
  btnCloseUpdated?.addEventListener('click', event => {
    const modalEditEmployee: Element | null = document.querySelector('#modal-edit-employee');
    const cardEmployeeEdit: Element | null = document.querySelector('#card-employee-edit');
    modalEditEmployee?.classList.toggle('hidden');
    cardEmployeeEdit?.classList.toggle('hidden');
  });
}

export const deleteSuccess = (): void => {
  const modalDeletedEmployee: Element | null = document.querySelector('#modal-deleted-employee');
  const cardEmployeeDeleted: Element | null = document.querySelector('#card-employee-deleted');

  modalDeletedEmployee?.classList.toggle('hidden');
  cardEmployeeDeleted?.classList.toggle('hidden');
  
  const employeeDeleted = document.getElementById('employee-deleted');
  while (employeeDeleted?.firstChild) {
    employeeDeleted.removeChild(employeeDeleted.firstChild);
  }

  const alertSuccess = `
  <div class="flex flex-col justify-center items-center gap-7">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-40 h-40 text-green-600">
      <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
    <div class="flex flex-col justify-center items-center gap-4">
      <h1 class="text-gray-900 font-bold text-3xl text-center">
        El empleado ha sido eliminado con exito.
      </h1>
    </div>
  </div>
  `;

  if (employeeDeleted) {
    employeeDeleted.innerHTML = alertSuccess;
  }

  const footerDeleted = document.getElementById('footer-deleted');
  while (footerDeleted?.firstChild) {
    footerDeleted.removeChild(footerDeleted.firstChild);
  }

  const btnClose = `
  <button id="close-deleted-employee-button" class="px-5 py-3 rounded-md bg-red-600 text-white font-bold">
    Cerrar
  </button>
  `;

  if (footerDeleted) {
    footerDeleted.innerHTML = btnClose;
  }

  const btnCloseDeleted: Element | null = document.querySelector('#close-deleted-employee-button');
  btnCloseDeleted?.addEventListener('click', event => {
    modalDeletedEmployee?.classList.toggle('hidden');
    cardEmployeeDeleted?.classList.toggle('hidden');
  });
}
