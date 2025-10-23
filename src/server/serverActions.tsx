'use server';

import {addCar} from "@/services/api.service";

export const saveCar = async (formData: FormData) => {
    const brand = formData.get("brand") as string;
    const price = Number(formData.get("price"));
    const year = Number(formData.get("year"));

    const carData = { brand, price, year };
    await addCar(carData);
}