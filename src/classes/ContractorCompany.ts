import { ContractorRequest } from "../requests/ContractorRequest";

export class ContractorCompany {

  protected request = new ContractorRequest;

  constructor(
    protected nit: string,
    protected businessName: string,
    protected address: string,
    protected countryID: number,
    protected responsable: string,
    protected email: string,
    protected phone: string,
    protected tags: string
  ) {}

  save() {
    this.request.save(this.nit, this.businessName, this.address, this.countryID, this.responsable, this.email, this.phone, this.tags);
  }

  update(id: number) {
    this.request.update(id, this.nit, this.businessName, this.address, this.countryID, this.responsable, this.email, this.phone, this.tags);
  }
}