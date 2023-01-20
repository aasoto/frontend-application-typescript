import { showModalAddProject } from './forms/projects/modal-add-project';
import { makeTableProjects } from './forms/projects/table-projects';

export const startModuleProjects = () => {

  makeTableProjects();

  showModalAddProject();

  const modalInfoProject = document.getElementById('modal-info-project');
  const cardProjectInfo = document.getElementById('card-project-info');
  const closeShowProject = document.getElementById('close-show-project');

  modalInfoProject?.addEventListener('click', event => {
    modalInfoProject.classList.toggle('hidden');
    cardProjectInfo?.classList.toggle('hidden');
  });

  closeShowProject?.addEventListener('click', event => {
    modalInfoProject?.classList.toggle('hidden');
    cardProjectInfo?.classList.toggle('hidden');
  });
  
}