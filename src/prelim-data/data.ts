
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