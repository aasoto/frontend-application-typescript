import { Project } from "../../classes/Project";
import { Project as ProjectInterface } from "../../interfaces/project";
import { formProject } from "./form-project";

export const showModalEditProject = (data: ProjectInterface) => {
  formProject('project-edit', data);

  const footerEdit = document.querySelector('#footer-project-edit');

  /** Borrar elementos del footer de la card */
  while (footerEdit?.firstChild) {
    footerEdit.removeChild(footerEdit.firstChild);
  }
  const btnUpdate = document.createElement('button');
  btnUpdate.classList.add('btn-footer-warning');
  btnUpdate.id = 'update-project';
  btnUpdate.textContent = 'Actualizar';

  btnUpdate.addEventListener('click', event => {
    const sent: HTMLInputElement = (<HTMLInputElement>document.getElementById('sent'));
    if (sent?.value == 'false') {
      sent.value = 'true';

      btnUpdate.classList.remove('btn-footer-warning');
      btnUpdate.classList.add('btn-footer-warning-disable');

      const id: number = <number>data.id;
      const title: HTMLInputElement = (<HTMLInputElement>document.getElementById('title'));
      const description: HTMLInputElement = (<HTMLInputElement>document.getElementById('description'));
      const startExecution: HTMLInputElement = (<HTMLInputElement>document.getElementById('start_execution'));
      const endExecution: HTMLInputElement = (<HTMLInputElement>document.getElementById('end_execution'));
      const contractorCompanyID: HTMLSelectElement = (<HTMLSelectElement>document.getElementById('contractor_company_id'));
      
      
      const project = new Project(
        title.value, 
        description.value, 
        startExecution.value, 
        parseInt(contractorCompanyID.value), 
        endExecution.value
      );
      
      project.update(id);
    }
  });
  
  footerEdit?.appendChild(btnUpdate);

}
