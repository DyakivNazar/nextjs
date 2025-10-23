import axios from 'axios';
import {ICar} from "@/models/ICar";

const axiosInstance = axios.create({
    baseURL: 'http://185.69.152.209/carsAPI/v1',
    headers: {'Content-Type': 'application/json'},
});

axiosInstance.interceptors.request.use((require) => {
    return require;
});

export const getAllCars = async ():Promise<ICar[]> => {
    const {data} = await axiosInstance.get<ICar[]>('/cars');
    return data
};

export const addCar = async (car: ICar) => {
    await axiosInstance.post('/cars', car);
}