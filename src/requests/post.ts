import axios from "axios"
import { sendSuccess } from "../forms/alerts";
import { NewEmployee } from "../interfaces/newEmployee";

export const saveNewEmployee = async(
  cc: string,
  firstName: string,
  secondName: string | null,
  lastName: string,
  secondLastName: string | null,
  gender: string | null,
  birthdate: string,
  profile: File | undefined
) => {
  
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