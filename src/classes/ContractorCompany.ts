
export class ContractorCompany {
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

  show() {
    console.log(this.nit, this.businessName, this.address, this.countryID, this.responsable, this.email, this.phone, this.tags);
  }
}