import { makeTableProjects } from "./table-projects";

export const sendSuccess = (): void => {
  
  makeTableProjects();

  const projectAdd = document.getElementById('project-add');
  while (projectAdd?.firstChild) {
    projectAdd.removeChild(projectAdd.firstChild);
  }

  const alertSuccess = `
  <div class="flex flex-col justify-center items-center gap-7">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-40 h-40 text-green-600">
      <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
    <div class="flex flex-col justify-center items-center gap-4">
      <h1 class="text-gray-900 font-bold text-3xl text-center">
        El proyecto ha sido guardado correctamente.
      </h1>
      <p class="text-center text-gray-600">
        Para seguir añadiendo más proyectos cierre este modal y cliquee el botón nuevamente.
      </p>
    </div>                 
  </div>
  `;

  if (projectAdd) {
    projectAdd.innerHTML = alertSuccess;
  }

  const footerProjectAdd = document.getElementById('footer-project-add');
  while (footerProjectAdd?.firstChild) {
    footerProjectAdd.removeChild(footerProjectAdd.firstChild);
  }

  const btnClose = `<button id="close-add-project-button" class="px-5 py-3 rounded-md bg-red-600 text-white font-bold">
    Cerrar
  </button>
  `;

  if (footerProjectAdd) {
    footerProjectAdd.innerHTML = btnClose;
  }

  const btnCloseCreated: Element | null = document.querySelector('#close-add-project-button');
  btnCloseCreated?.addEventListener('click', event => {
    const modalAddProject: Element | null = document.querySelector('#modal-add-project');
    const cardProjectAdd: Element | null = document.querySelector('#card-project-add');
    modalAddProject?.classList.toggle('hidden');
    cardProjectAdd?.classList.toggle('hidden');

  });
}