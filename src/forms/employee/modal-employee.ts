import { Employee } from "../../interfaces/employee";
import { makeTableEmployee, projectsAssigned } from "./table-employee";


export const showModalEmployee = (data: Employee): void => {
  console.log(data);
  const employeeInfo: HTMLDivElement = <HTMLDivElement>document.getElementById('employee-info');

  while (employeeInfo?.firstChild) {
    employeeInfo.removeChild(employeeInfo.firstChild);
  }

  employeeInfo?.appendChild(makeTableEmployee(data));

  projectsAssigned(data, employeeInfo);
}