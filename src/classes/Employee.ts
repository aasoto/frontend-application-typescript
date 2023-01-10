import { saveNewEmployee } from "../requests/post";

export class Employee {

  constructor(
    protected cc: string,
    protected firstName: string,
    protected secondName: string,
    protected lastName: string,
    protected secondLastName: string,
    protected gender: string,
    protected birthdate: string,
    protected profilePhoto: File | undefined
  ) {}

  saveEmployee (): void {
    console.log(this.cc, this.firstName, this.secondName, this.lastName, this.secondLastName, this.gender, this.birthdate, this.profilePhoto);
    saveNewEmployee(this.cc, this.firstName, this.secondName, this.lastName, this.secondLastName, this.gender, this.birthdate, this.profilePhoto);
  }
}