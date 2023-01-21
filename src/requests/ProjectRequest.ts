import axios from "axios";
import { sendSuccess, updateSuccess } from "../forms/projects/alertsProjects";
import { showErrors } from "../forms/projects/errors-project";
import { Project } from "../interfaces/project";
import { Projects } from "../interfaces/projects";
import { StatusDeleted } from "../interfaces/statusEmployee";

export class ProjectRequest {

  async get(url: string = 'http://127.0.0.1:8000/api/projects'): Promise<Projects> {

    const response = await axios.get<Projects>(url);
    return response.data;
  }

  async getProject (id: number): Promise<Project> {
    const { data } = await axios.get<Project>(`http://127.0.0.1:8000/api/projects/${id}`);

    return data;
  }
  
  async save(
    title: string,
    description: string,
    startExecution: string,
    contractorCompanyID: number,
    endExecution?: string
  ) {
    const data: Project = {
      title: title,
      description: description,
      start_execution: startExecution,
      contractor_company_id: contractorCompanyID,
      end_execution: endExecution
    }

    await axios.post(
      'http://127.0.0.1:8000/api/projects',
      data,
      {
        headers: {
          "content-type": "application/json, multipart/form-data"
        }
      }
    ).then( resp => {
      if (resp.status == 200) {
        sendSuccess();
      } else {
        console.log(resp);
      }
    }).catch( error => {
      if (error.response.status == 422) {
        showErrors(error.response.data);
      }
      console.error(error);
    }).finally( () => {
      console.log('Guardado terminado')
    });
  }

  async update (
    id: number,
    title: string,
    description: string,
    startExecution: string,
    contractorCompanyID: number,
    endExecution?: string
  ) {
    
    const data: Project = {
      title: title,
      description: description,
      start_execution: startExecution,
      contractor_company_id: contractorCompanyID,
      end_execution: endExecution
    }
  
    console.log(data);
    await axios.put(
      `http://127.0.0.1:8000/api/projects/${id}`,
      JSON.stringify(data),
      {
        headers: {
          "content-type": "application/json, multipart/form-data"
        }
      }
    ).then( resp => {
      if (resp.status == 200) {
        updateSuccess();
      } else {
        console.log(resp);
      }
    }).catch( error => {
      if (error.response.status == 422) {
        showErrors(error.response.data);
      }
      console.error(error);
    }).finally( () => {
      console.log('Actualizar terminado');
    });
  }

  async delete (id: number): Promise<StatusDeleted> {
    const {data} = await axios.delete<StatusDeleted>(`http://127.0.0.1:8000/api/projects/${id}`);
  
    return data;
  }
}