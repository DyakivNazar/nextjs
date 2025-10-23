'use server';

import {addCar} from "@/services/api.service";
import {redirect} from "next/navigation";
import {revalidatePath} from "next/cache";
import {carValidator} from "@/viladator/api.validator";

export const saveCar = async (formData: FormData) => {
    const brand = formData.get("brand") as string;
    const price = Number(formData.get("price"));
    const year = Number(formData.get("year"));

    const carData = { brand, price, year };
    const { error, value } = carValidator.validate(carData, { abortEarly: false });

    if (error) {
        return {
            success: false,
            errors: error.details.map((d) => d.message),
        };
    }

    await addCar(value);
    revalidatePath("/");
    redirect("/");

    return { success: true };

}