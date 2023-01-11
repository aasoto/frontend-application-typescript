
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
  value: string | null;
}[]

export const fields: FormEmployee = [{
  cols: 2,
  id: 'cc',
  placeholder: 'Num. identificación',
  type: 'number',
  value: ''
},{
  cols: 1,
  id: 'first_name',
  placeholder: 'Primer nombre',
  type: 'text',
  value: ''
},{
  cols: 1,
  id: 'second_name',
  placeholder: 'Segundo nombre',
  type: 'text',
  value: ''
},{
  cols: 1,
  id: 'last_name',
  placeholder: 'Primer apellido',
  type: 'text',
  value: ''
},{
  cols: 1,
  id: 'second_last_name',
  placeholder: 'Segundo apellido',
  type: 'text',
  value: ''
},{
  cols: 1,
  id: 'gender',
  placeholder: 'genero',
  type: 'select',
  value: ''
},{
  cols: 1,
  id: 'birthdate',
  placeholder: 'Fecha de nacimiento',
  type: 'date',
  value: ''
},{
  cols: 2,
  id: 'profile_photo',
  placeholder: 'Foto de perfil',
  type: 'file',
  value: ''
}]
