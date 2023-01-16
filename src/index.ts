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

const showEmployeePage = document.getElementById('show-employee-page');
showEmployeePage?.addEventListener('click', event => {
  const employeePage = document.getElementById('employee-page');
  employeePage?.classList.replace('hidden', 'block');

  startModuleEmployee();
});
