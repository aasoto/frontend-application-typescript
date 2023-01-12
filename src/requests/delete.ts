import axios from "axios"
import { StatusDeleted } from "../interfaces/statusEmployee";

export const deleteEmployee = async(id: number): Promise<StatusDeleted> => {
  const {data} = await axios.delete<StatusDeleted>(`http://127.0.0.1:8000/api/employee/${id}`);

  return data;
}