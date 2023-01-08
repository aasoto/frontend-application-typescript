import axios from "axios";
import { Employee } from "../interfaces/employee";
import { Employees } from "../interfaces/employees";

export const getEmployees = async(): Promise<Employees> => {
  const { data } = await axios.get<Employees>('http://127.0.0.1:8000/api/employee');

  return data;
}

export const getEmployee = async(id: number): Promise<Employee> => {
  const { data } = await axios.get<Employee>(`http://127.0.0.1:8000/api/employee/${id}`);

  return data;
}