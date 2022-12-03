import axios from 'axios';
import {FormInterface} from '../interfaces/formInterface';

const client = axios.create({
  baseURL: 'https://swapi.py4e.com/',
});
const formClient = axios.create({
  baseURL: ' https://example/',
});

export const getPeoples = (peopleIndex: number) => {
  const response = client.get(`api/people/${peopleIndex}/`);

  return response;
};

export const sendForm = (data: FormInterface) => {
  const response = formClient.get(`.`, {data});
  return response;
};
