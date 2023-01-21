import { ProjectRequest } from "../../requests/ProjectRequest";
import { deleteSuccess } from "./alertsProjects";

export const showModalDelete = (id: number) => {
  const modalDeletedProject: Element | null = document.querySelector('#modal-deleted-project');
  const cardProjectDeleted: Element | null = document.querySelector('#card-project-deleted');

  modalDeletedProject?.classList.toggle('hidden');
  cardProjectDeleted?.classList.toggle('hidden');

  
  const projectDeleted = document.getElementById('project-deleted');
  while (projectDeleted?.firstChild) {
    projectDeleted.removeChild(projectDeleted.firstChild);
  }

  const message = `
  <div class="flex flex-col justify-center items-center gap-7">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-40 h-40 text-blue-600">
      <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
    </svg>
    <div class="flex flex-col justify-center items-center gap-4">
      <h1 class="text-gray-900 font-bold text-3xl text-center">
        ¿Está seguro que desea eliminar este proyecto?
      </h1>
    </div>
  </div>
  `;

  if (projectDeleted) {
    projectDeleted.innerHTML = message;
  }

  const footerDeleted = document.getElementById('footer-project-deleted');
  while (footerDeleted?.firstChild) {
    footerDeleted.removeChild(footerDeleted.firstChild);
  }

  const btnFooter = `
  <button id="close-deleted-project-button" class="px-5 py-3 rounded-md bg-gray-300 text-black font-bold">
    Cerrar
  </button>
  <button id="delete-project-button" class="px-5 py-3 rounded-md bg-red-600 text-white font-bold">
    Eliminar
  </button>
  `;

  if (footerDeleted) {
    footerDeleted.innerHTML = btnFooter;
  }

  const btnCloseDeleted: Element | null = document.querySelector('#close-deleted-project-button');
  btnCloseDeleted?.addEventListener('click', event => {
    modalDeletedProject?.classList.toggle('hidden');
    cardProjectDeleted?.classList.toggle('hidden');
  });

  const request = new ProjectRequest();

  const btnDelete: Element | null = document.querySelector('#delete-project-button');
  btnDelete?.addEventListener('click', event => {
    request.delete(id)
    .then( resp => {
      console.log(resp);
      if (resp.status == 'delete') {
        deleteSuccess();
      }
    }).catch( error => {
      console.error(error);
    }).finally( () => {
      console.log('Eliminación proyecto finalizada...');
    });
  });
}