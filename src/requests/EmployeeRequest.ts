import axios from "axios";
import { editSuccess, sendSuccess } from "../forms/alerts";
import { makeTableEmployees } from "../forms/employee/table-employees";
import { Employee } from "../interfaces/employee";
import { Employees } from "../interfaces/employees";
import { NewEmployee } from "../interfaces/newEmployee";
import { StatusDeleted } from "../interfaces/statusEmployee";
import { UpdateEmployee } from "../interfaces/updateEmployee";

export class EmployeeRequest {
  async getEmployees (url: string = 'http://127.0.0.1:8000/api/employee'): Promise<Employees> {
    const { data } = await axios.get<Employees>(url);

    return data;
  }

  async getEmployee (id: number): Promise<Employee> {
    const { data } = await axios.get<Employee>(`http://127.0.0.1:8000/api/employee/${id}`);

    return data;
  }

  async saveEmployee (
    cc: string,
    firstName: string,
    secondName: string | null,
    lastName: string,
    secondLastName: string | null,
    gender: string | null,
    birthdate: string,
    profile: File | undefined
  ) {
    
    const data: NewEmployee = {
      cc: cc,
      first_name: firstName,
      second_name: secondName,
      last_name: lastName,
      second_last_name: secondLastName,
      gender: gender,
      birthdate: birthdate,
      profile_photo: profile
    }
  
    await axios.post(
      'http://127.0.0.1:8000/api/employee',
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
      console.error(error);
    }).finally( () => {
      console.log('Guardado terminado')
    });
  }
  
  async updateProfilePhotoEmployee (
    id: number,
    cc: string,
    firstName: string,
    secondName: string | null,
    lastName: string,
    secondLastName: string | null,
    gender: string | null,
    birthdate: string,
    profile: File | undefined
  ) {
    
    const data = {
      id: id,
      profile_photo: profile
    }
  
    await axios.post(
      'http://127.0.0.1:8000/api/update-profile-photo-employee',
      data,
      {
        headers: {
          "content-type": "application/json, multipart/form-data"
        }
      }
    ).then( resp => {
      if (resp.status == 200) {
        console.log(resp);
        this.updateEmployee(id, cc, firstName, secondName, lastName, secondLastName, gender, birthdate, resp.data);
      } else {
        console.log(resp);
      }
    }).catch( error => {
      console.error(error);
    }).finally( () => {
      console.log('Guardado terminado')
    });
  }

  async updateEmployee (
    id: number,
    cc: string,
    firstName: string,
    secondName: string | null,
    lastName: string,
    secondLastName: string | null,
    gender: string | null,
    birthdate: string,
    profile: string | undefined
  ) {
    const data: UpdateEmployee = {
      cc: cc,
      first_name: firstName,
      second_name: secondName,
      last_name: lastName,
      second_last_name: secondLastName,
      gender: gender,
      birthdate: birthdate,
      profile_photo: profile,
      escenario: 'app'
    }
    console.log('data: ', data);
    console.log(profile);
    await axios.put(
      `http://127.0.0.1:8000/api/employee/${id}`,
      JSON.stringify(data),
      {
        headers: {
          "content-type": "application/json, multipart/form-data"
        }
      }
    ).then( resp => {
      if (resp.status == 200) {
        editSuccess();
        console.log(resp);
      } else {
        console.log(resp);
      }
    }).catch( error => {
      console.error(error);
    }).finally( () => {
      console.log('Guardado terminado')
    });
  }

  async deleteEmployee (id: number): Promise<StatusDeleted> {
    const {data} = await axios.delete<StatusDeleted>(`http://127.0.0.1:8000/api/employee/${id}`);
  
    return data;
  }
}