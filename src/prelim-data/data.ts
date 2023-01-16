
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

export type FormFields = {
  cols: number;
  id: string;
  placeholder: string;
  type: string;
  value: string | null;
}[]

export const fieldsEmployee: FormFields = [{
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
}];

export const fieldsContractor: FormFields = [{
  cols: 1,
  id: 'nit',
  placeholder: 'NIT',
  type: 'text',
  value: ''
},{
  cols: 1,
  id: 'business_name',
  placeholder: 'address',
  type: 'text',
  value: ''
},{
  cols: 1,
  id: 'address',
  placeholder: 'Dirección',
  type: 'text',
  value: ''
},{
  cols: 1,
  id: 'country_id',
  placeholder: 'País',
  type: 'select',
  value: ''
},{
  cols: 1,
  id: 'responsable',
  placeholder: 'Responsable',
  type: 'text',
  value: ''
},{
  cols: 1,
  id: 'email',
  placeholder: 'Correo electronico',
  type: 'email',
  value: ''
},{
  cols: 1,
  id: 'phone',
  placeholder: 'Telefono',
  type: 'text',
  value: ''
},{
  cols: 1,
  id: 'tags',
  placeholder: 'Etiquetas',
  type: 'text',
  value: ''
}];
