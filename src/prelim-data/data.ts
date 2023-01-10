
export const tHeaders = ['ID', 'Num. Identificación', 'Nombres', 'Genero', 'Fec. Nacimiento', 'Acciones'];

type Genders = {
  value: string;
  text: string;
}[];

export const genders: Genders = [
  {
    value: 'm',
    text: 'Másculino'
  },{
    value: 'f',
    text: 'Femenino'
  },{
    value: 'o',
    text: 'Otro'
  },{
    value: 'ne',
    text: 'No especifico'
  }
]

export type FormEmployee = {
  cols: number;
  id: string;
  placeholder: string;
  type: string;
}[]

export const fields: FormEmployee = [{
  cols: 2,
  id: 'cc',
  placeholder: 'Num. identificación',
  type: 'number'
},{
  cols: 1,
  id: 'first-name',
  placeholder: 'Primer nombre',
  type: 'text'
},{
  cols: 1,
  id: 'second-name',
  placeholder: 'Segundo nombre',
  type: 'text'
},{
  cols: 1,
  id: 'last-name',
  placeholder: 'Primer apellido',
  type: 'text'
},{
  cols: 1,
  id: 'second-last-name',
  placeholder: 'Segundo apellido',
  type: 'text'
},{
  cols: 1,
  id: 'gender',
  placeholder: 'genero',
  type: 'select'
},{
  cols: 1,
  id: 'birthdate',
  placeholder: 'Fecha de nacimiento',
  type: 'date'
},{
  cols: 2,
  id: 'profile-photo',
  placeholder: 'Foto de perfil',
  type: 'file'
}]
