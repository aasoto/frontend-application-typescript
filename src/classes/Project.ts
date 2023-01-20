import { ProjectRequest } from "../requests/ProjectRequest";

export class Project {

  protected request = new ProjectRequest();

  constructor(
    protected title: string,
    protected description: string,
    protected startExecution: string,
    protected contractorCompanyID: number,
    protected endExecution?: string
  ) {}

  save () {
    this.request.save(this.title, this.description, this.startExecution, this.contractorCompanyID, this.endExecution);
  }
}