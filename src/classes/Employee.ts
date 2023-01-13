import { EmployeeRequest } from "../requests/EmployeeRequest";

export class Employee {

  protected request = new EmployeeRequest();

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
    this.request.saveEmployee(this.cc, this.firstName, this.secondName, this.lastName, this.secondLastName, this.gender, this.birthdate, this.profilePhoto);
  }

  editEmployee (id: number): void {
    this.request.updateProfilePhotoEmployee(id, this.cc, this.firstName, this.secondName, this.lastName, this.secondLastName, this.gender, this.birthdate, this.profilePhoto);
  }
}