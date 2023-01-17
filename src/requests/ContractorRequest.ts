import axios from "axios";
import { sendSuccess } from "../forms/contractor_company/alertsContractor";
import { showErrors } from "../forms/contractor_company/errors-contractor";
import { Contractor } from "../interfaces/contractor";
// import { Countries } from "../interfaces/country";

type Countries = {
  id:   number;
  name: string;
}[];
export class ContractorRequest {
  
  async getCountries(): Promise<Countries> {

    const response = await axios.get<Countries>('http://127.0.0.1:8000/api/countries');
    return response.data;
  }

  async save (
    nit: string,
    businessName: string,
    address: string,
    countryID: number,
    responsable: string,
    email: string,
    phone: string,
    tags: string
  ) {
    
    const data: Contractor = {
      nit: nit,
      business_name: businessName,
      address: address,
      country_id: countryID,
      responsable: responsable,
      email: email,
      phone: phone,
      tags: tags
    }
  
    await axios.post(
      'http://127.0.0.1:8000/api/contractor-company',
      data,
      {
        headers: {
          "content-type": "application/json, multipart/form-data"
        }
      }
    ).then( resp => {
      if (resp.status == 200) {
        sendSuccess();
      } else {
        console.log(resp);
      }
    }).catch( error => {
      if (error.response.status == 422) {
        showErrors(error.response.data);
      }
      console.error(error);
    }).finally( () => {
      console.log('Guardado terminado')
    });
  }

}