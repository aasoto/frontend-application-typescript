import { Employee } from "../interfaces/employee";
import { makeTableEmployee } from "./table-employee";

export const showModalEmployee = (data: Employee): void => {
  console.log(data);
  const employeeInfo = document.querySelector('#employee-info');
  employeeInfo?.appendChild(makeTableEmployee(data));
}