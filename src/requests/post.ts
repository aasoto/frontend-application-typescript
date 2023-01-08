import axios from "axios"

interface NewEmployee {
  cc: string;
  first_name: string;
  second_name: string | null;
  last_name: string;
  second_last_name: string | null;
  gender: string | null;
  birthdate: string | Date;
  profile: string | null;
}

export const saveNewEmployee = async() => {
  const data: NewEmployee = {
    cc: '23892183',
    first_name: 'Andrés',
    second_name: 'Alfredo',
    last_name: 'Soto',
    second_last_name: null,
    gender: 'm',
    birthdate: '1997-02-13',
    profile: null
  }
  await axios.post(
    'http://127.0.0.1:8000/api/employee',
    data,
    {
      headers: {
        "content-type": "application/json"
      }
    }
  )
}