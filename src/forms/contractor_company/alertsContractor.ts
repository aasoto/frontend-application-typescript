
export const sendSuccess = (): void => {
  
  const contractorAdd = document.getElementById('contractor-add');
  while (contractorAdd?.firstChild) {
    contractorAdd.removeChild(contractorAdd.firstChild);
  }

  const alertSuccess = `
  <div class="flex flex-col justify-center items-center gap-7">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-40 h-40 text-green-600">
      <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
    <div class="flex flex-col justify-center items-center gap-4">
      <h1 class="text-gray-900 font-bold text-3xl text-center">
        La empresa contratista ha sido guardada correctamente.
      </h1>
      <p class="text-center text-gray-600">
        Para seguir añadiendo más empresas contratistas cierre este modal y cliquee el botón nuevamente.
      </p>
    </div>                 
  </div>
  `;

  if (contractorAdd) {
    contractorAdd.innerHTML = alertSuccess;
  }

  const footerContractorAdd = document.getElementById('footer-contractor-add');
  while (footerContractorAdd?.firstChild) {
    footerContractorAdd.removeChild(footerContractorAdd.firstChild);
  }

  const btnClose = `<button id="close-add-contractor-button" class="px-5 py-3 rounded-md bg-red-600 text-white font-bold">
    Cerrar
  </button>
  `;

  if (footerContractorAdd) {
    footerContractorAdd.innerHTML = btnClose;
  }

  const btnCloseCreated: Element | null = document.querySelector('#close-add-contractor-button');
  btnCloseCreated?.addEventListener('click', event => {
    const modalAddContractor: Element | null = document.querySelector('#modal-add-contractor');
    const cardContractorAdd: Element | null = document.querySelector('#card-contractor-add');
    modalAddContractor?.classList.toggle('hidden');
    cardContractorAdd?.classList.toggle('hidden');
  });
}
