export interface NewEmployee {
  cc: string;
  first_name: string;
  second_name: string | null;
  last_name: string;
  second_last_name: string | null;
  gender: string | null;
  birthdate: string | Date;
  profile_photo: File | undefined;
}