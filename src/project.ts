import { showModalAddProject } from './forms/projects/modal-add-project';
import { makeTableProjects } from './forms/projects/table-projects';

export const startModuleProjects = () => {

  makeTableProjects();

  showModalAddProject();

  
}