import axios from "axios";
import { editSuccess } from "../forms/alerts";
import { UpdateEmployee } from "../interfaces/updateEmployee";

export const updateEmployee = async(
  id: number,
  cc: string,
  firstName: string,
  secondName: string | null,
  lastName: string,
  secondLastName: string | null,
  gender: string | null,
  birthdate: string,
  profile: string | undefined
) => {
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

export const putHTTPFunction = async(
  id: number,
  cc: string,
  firstName: string,
  secondName: string | null,
  lastName: string,
  secondLastName: string | null,
  gender: string | null,
  birthdate: string,
  profile: File | undefined
) => {
  await axios({
    method: 'put',
    url: `http://127.0.0.1:8000/api/employee/${id}`,
    data: {
      cc: cc,
      first_name: firstName,
      second_name: secondName,
      last_name: lastName,
      second_last_name: secondLastName,
      gender: gender,
      birthdate: birthdate,
      profile_photo: profile
    },
    headers: {
      "content-type": "application/json, multipart/form-data"
    }
  }).then( resp => {
    if (resp.status == 200) {
      // sendSuccess();
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