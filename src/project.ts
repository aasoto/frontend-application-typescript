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
  
  const modalEditProject = document.getElementById('modal-edit-project');
  const cardProjectEdit = document.getElementById('card-project-edit');
  const closeEditProject = document.getElementById('close-edit-project');

  modalEditProject?.addEventListener('click', event => {
    modalEditProject.classList.toggle('hidden');
    cardProjectEdit?.classList.toggle('hidden');
  });

  closeEditProject?.addEventListener('click', event => {
    modalEditProject?.classList.toggle('hidden');
    cardProjectEdit?.classList.toggle('hidden');
  });

  const modalDeletedProject = document.getElementById('modal-deleted-project');
  const cardProjectDeleted = document.getElementById('card-project-deleted');
  const closeDeleteProject = document.getElementById('close-delete-project');

  modalDeletedProject?.addEventListener('click', event => {
    modalDeletedProject.classList.toggle('hidden');
    cardProjectDeleted?.classList.toggle('hidden');
  });

  closeDeleteProject?.addEventListener('click', event => {
    modalDeletedProject?.classList.toggle('hidden');
    cardProjectDeleted?.classList.toggle('hidden');
  });
}