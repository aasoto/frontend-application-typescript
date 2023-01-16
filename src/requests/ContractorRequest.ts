import axios from "axios";
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

}