import axios from "axios";
import { sendSuccess, updateSuccess } from "../forms/contractor_company/alertsContractor";
import { showErrors } from "../forms/contractor_company/errors-contractor";
import { Contractor } from "../interfaces/contractor";
import { ContractorCompany } from "../interfaces/contractor-company";
import { Country } from '../interfaces/country';
import { StatusDeleted } from "../interfaces/statusEmployee";

type Countries = {
  id:   number;
  name: string;
}[];
export class ContractorRequest {
  
  async getCountries(): Promise<Countries> {

    const response = await axios.get<Countries>('http://127.0.0.1:8000/api/countries');
    return response.data;
  }

  async getCountry(id: number): Promise<Country> {

    const response = await axios.get<Country>(`http://127.0.0.1:8000/api/countries/${id}`);
    return response.data;
  }

  async get(url: string = 'http://127.0.0.1:8000/api/contractor-company'): Promise<ContractorCompany> {

    const response = await axios.get<ContractorCompany>(url);
    return response.data;
  }

  async getContractor (id: number): Promise<Contractor> {
    const { data } = await axios.get<Contractor>(`http://127.0.0.1:8000/api/contractor-company/${id}`);

    return data;
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

  async update (
    id: number,
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
  
    console.log(data);
    await axios.put(
      `http://127.0.0.1:8000/api/contractor-company/${id}`,
      JSON.stringify(data),
      {
        headers: {
          "content-type": "application/json, multipart/form-data"
        }
      }
    ).then( resp => {
      if (resp.status == 200) {
        updateSuccess();
      } else {
        console.log(resp);
      }
    }).catch( error => {
      if (error.response.status == 422) {
        showErrors(error.response.data);
      }
      console.error(error);
    }).finally( () => {
      console.log('Guardado terminado');
    });
  }

  async delete (id: number): Promise<StatusDeleted> {
    const {data} = await axios.delete<StatusDeleted>(`http://127.0.0.1:8000/api/contractor-company/${id}`);
  
    return data;
  }
}