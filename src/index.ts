import { startModuleContractor } from "./contractor";
import { startModuleEmployee } from "./employee";

const showSideBar = document.getElementById('show-sidebar');
const sidebar = document.getElementById('menu-sidebar');

showSideBar?.addEventListener('mouseenter', event => {
  event.preventDefault();
  console.log('show sidebar...');

  sidebar?.classList.replace('-translate-x-[100%]', 'translate-x-0');
});

sidebar?.addEventListener('mouseleave', event => {
  sidebar?.classList.replace('translate-x-0', '-translate-x-[100%]');
});

const employeePage = document.getElementById('employee-page');
const contractorPage = document.getElementById('contractor-page');
const projectPage = document.getElementById('project-page');

let open: string = 'none';

const showEmployeePage = document.getElementById('show-employee-page');
showEmployeePage?.addEventListener('click', event => {
  employeePage?.classList.replace('hidden', 'block');
  open = 'employee';
  closeModules();
  startModuleEmployee();
});

const showContractorPage = document.getElementById('show-contractor-page');
showContractorPage?.addEventListener('click', event => {
  contractorPage?.classList.replace('hidden', 'block');
  open = 'contractor';
  closeModules();
  startModuleContractor();
});

const showProjectPage = document.getElementById('show-project-page');
showProjectPage?.addEventListener('click', event => {
  projectPage?.classList.replace('hidden', 'block');
  open = 'project';
  closeModules();
  // startModuleEmployee();
});

const closeModules = () => {
  switch (open) {
    case 'employee':
      contractorPage?.classList.replace('block', 'hidden');
      projectPage?.classList.replace('block', 'hidden');
      break;
    case 'contractor':
      employeePage?.classList.replace('block', 'hidden');
      projectPage?.classList.replace('block', 'hidden');
      break;
    case 'project':
      contractorPage?.classList.replace('block', 'hidden');
      employeePage?.classList.replace('block', 'hidden');
      break;
  }
}
