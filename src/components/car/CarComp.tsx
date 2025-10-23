import {ICar} from "@/models/ICar";

interface CarCompProps {
    car: ICar
}

export const CarComp = ({car}: CarCompProps) => {
    return (
        <div>
            <h2>{car.brand}</h2>
            <p>Price - {car.price}</p>
            <p>Year - {car.year}</p>
        </div>
    );
};