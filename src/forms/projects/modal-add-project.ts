import { formProject } from './form-project';

export const showModalAddProject = (): void => {
  const addProject: HTMLButtonElement = (<HTMLButtonElement>document.getElementById('add-project'));

  const modalAddProject = document.getElementById('modal-add-project');
  const cardProjectAdd = document.getElementById('card-project-add');

  addProject?.addEventListener('click', event => {
    formProject(undefined, null);
    modalAddProject?.classList.toggle('hidden');
    cardProjectAdd?.classList.toggle('hidden');
  });
}
