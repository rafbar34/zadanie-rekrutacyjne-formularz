import axios from 'axios';
import { FormInterface } from '../interfaces/formInterface';

const client = axios.create({
  baseURL: 'https://swapi.py4e.com/',
});
const formClient = axios.create({
  baseURL: ' https://example/',
});



export const getPeoples = (peopleIndex:number) => {
  const response = client.get(`api/people/${peopleIndex}/`);

  return response;
};

export const sendForm = (data:any) => {
  const response = client.get(`.`, data);
  return response;
};

