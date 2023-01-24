import axios from "axios";
import { assigmentSuccess } from "../forms/employee/alertsEmployee";
import { interceptionEmployeeProject } from "../interfaces/interception-employee-project";
import { Projects } from "../interfaces/projects";
import { ProjectsAssigned } from "../interfaces/projectsAssigned";
import { StatusDeleted } from "../interfaces/statusEmployee";

export class EmployeeProjectRequest {
  
  async getProjects (url: string = 'http://127.0.0.1:8000/api/projects'): Promise<Projects> {

    const response = await axios.get<Projects>(url);
    return response.data;
  }

  async isAssigned(employeeID: number, projectID: number): Promise<boolean> {

    const ids: number[] = [employeeID, projectID];
    const response = await axios.get<boolean>(`http://127.0.0.1:8000/api/is-assigned/${JSON.stringify(ids)}`);
    return response.data;

  }

  async getProjectsAssigned (id: number): Promise<ProjectsAssigned> {

    const response = await axios.get<ProjectsAssigned>(`http://127.0.0.1:8000/api/employee-project/${id}`);
    return response.data;
  }

  async getEmployeesAssigned (id: number): Promise<ProjectsAssigned> {

    const response = await axios.get<ProjectsAssigned>(`http://127.0.0.1:8000/api/project-employee/${id}`);
    return response.data;
  }

  async saveAssigment(employeeID: number, projectID: number) {

    const data: interceptionEmployeeProject = {
      employee_id: employeeID,
      project_id: projectID
    }

    await axios.post(
      'http://127.0.0.1:8000/api/assing-employee-project',
      data,
      {
        headers: {
          "content-type": "application/json, multipart/form-data"
        }
      }
    ).then( resp => {
      if (resp.status == 200) {
        assigmentSuccess();
      } else {
        console.log(resp);
      }
    }).catch( error => {
      console.error(error);
    }).finally( () => {
      console.log('Guardado terminado')
    });
  
  }

  async delete (id: number): Promise<StatusDeleted> {
    const {data} = await axios.delete<StatusDeleted>(`http://127.0.0.1:8000/api/delete-assigment/${id}`);
  
    return data;
  }
}