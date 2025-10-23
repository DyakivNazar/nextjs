'use server';
import { addCar } from '@/services/api.service';
import { ICar } from '@/models/ICar';
import { revalidatePath } from 'next/cache';

export const addCarByServer = async (car: ICar) => {
    await addCar(car); // додає авто через API
    revalidatePath('/'); // оновлює головну сторінку після сабміту
};
