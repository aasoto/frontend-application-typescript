import axios from "axios";
import { Projects } from "../interfaces/projects";

export class EmployeeProjectRequest {
  
  async getProjects(url: string = 'http://127.0.0.1:8000/api/projects'): Promise<Projects> {

    const response = await axios.get<Projects>(url);
    return response.data;
  }
}