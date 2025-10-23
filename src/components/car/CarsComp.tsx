import {getAllCars} from "@/services/api.service";
import {CarComp} from "@/components/car/CarComp";
import './cars.css'

export const CarsComp = async () => {
    const cars = await getAllCars()
    return (
        <div className={"grid"}>
            {cars.map((car) => <CarComp key={car.id} car={car} />)}
        </div>
    );
};