import { Employee } from "../interfaces/employee";

export const showModalEmployee = (data: Employee): void => {
  console.log(data);
  const {
    cc, 
    first_name, 
    second_name, 
    last_name, 
    second_last_name, 
    gender, 
    birthdate, 
    profile_photo
  } = data;

  const ccField = document.querySelector('#employee-cc');
  ccField?.textContent = cc;

  const firstName = document.querySelector('#employee-first-name');
  firstName?.textContent = first_name;

  const secondName = document.querySelector('#employee-second-name');
  secondName?.textContent = second_name;

  const lastName = document.querySelector('#employee-last-name');
  lastName?.textContent = last_name;

  const secondLastName = document.querySelector('#employee-second-last-name');
  secondLastName?.textContent = second_last_name;

  const genderField = document.querySelector('#employee-gender');
  genderField?.textContent = gender;

  const birthdateField = document.querySelector('#employee-birthdate');
  birthdateField?.textContent = birthdate;

  const profilePhoto = document.querySelector('#employee-photo');
  profilePhoto?.src = profile_photo;
}