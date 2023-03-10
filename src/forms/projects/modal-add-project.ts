import { Project } from '../../classes/Project';
import { formProject } from './form-project';

export const showModalAddProject = (): void => {
  const addProject: HTMLButtonElement = (<HTMLButtonElement>document.getElementById('add-project'));

  const modalAddProject = document.getElementById('modal-add-project');
  const cardProjectAdd = document.getElementById('card-project-add');
  const closeAddProject = document.getElementById('close-add-project');

  modalAddProject?.addEventListener('click', event => {
    modalAddProject.classList.toggle('hidden');
    cardProjectAdd?.classList.toggle('hidden');
  });

  closeAddProject?.addEventListener('click', event => {
    modalAddProject?.classList.toggle('hidden');
    cardProjectAdd?.classList.toggle('hidden');
  });

  addProject?.addEventListener('click', event => {
    formProject(undefined, null);
    modalAddProject?.classList.toggle('hidden');
    cardProjectAdd?.classList.toggle('hidden');

    const footerProjectAdd: HTMLElement | null = document.getElementById('footer-project-add');
    while (footerProjectAdd?.firstChild) {
      footerProjectAdd.removeChild(footerProjectAdd.firstChild);
    }
    
    const btnSave: HTMLButtonElement = document.createElement('button');
    btnSave.classList.add('btn-footer-success');
    btnSave.id = 'send-new-project';
    btnSave.textContent = 'Guardar';

    btnSave.addEventListener('click', event => {
      const sent: HTMLInputElement = (<HTMLInputElement>document.getElementById('sent'));

      if (sent?.value == 'false') {
        sent.value = 'true';

        btnSave.classList.remove('btn-footer-success');
        btnSave.classList.add('btn-footer-success-disable');

        const title: HTMLInputElement = (<HTMLInputElement>document.getElementById('title'));
        const description: HTMLTextAreaElement = (<HTMLTextAreaElement>document.getElementById('description'));
        const startExecution: HTMLInputElement = (<HTMLInputElement>document.getElementById('start_execution'));
        const endExecution: HTMLInputElement = (<HTMLInputElement>document.getElementById('end_execution'));
        const contractorCompanyID: HTMLSelectElement = (<HTMLSelectElement>document.getElementById('contractor_company_id'));


        const project = new Project(title.value, description.value, startExecution.value, parseInt(contractorCompanyID.value), endExecution.value);

        project.save();
        
      }
    });

    footerProjectAdd?.appendChild(btnSave);

  });
}
