'use server';
import { addCar } from '@/services/api.service';
import { ICar } from '@/models/ICar';
import { revalidatePath } from 'next/cache';
import {redirect} from "next/navigation";

export const addCarByServer = async (car: ICar) => {
    await addCar(car);
    revalidatePath('/');
    redirect('/');
};
