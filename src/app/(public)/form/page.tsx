import './form.css'
import {useForm} from "react-hook-form";
import {ICar} from "@/models/ICar";
import {joiResolver} from "@hookform/resolvers/joi";
import {carValidator} from "@/viladator/api.validator";
import {useRouter} from "next/navigation";
import {addCar} from "@/services/api.service";

const FormPage = () => {
    const router = useRouter();
    const {handleSubmit, register, formState:{errors, isValid}}
        = useForm<ICar>({mode: 'all', resolver: joiResolver(carValidator)});

    const customHandler = async (data: ICar)=>{
        await addCar(data);
        router.push('/');
    }

    return (
        <div>
            <form onSubmit={handleSubmit(customHandler)}>
                <label>
                    <input type="text" {...register('brand')}/>
                    {errors.brand && <div>{errors.brand.message}</div>}
                </label>

                <label>
                    <input type="number" {...register('price')}/>
                    {errors.price && <div>{errors.price.message}</div>}
                </label>

                <label>
                    <input type="number" {...register('year')}/>
                    {errors.year && <div>{errors.year.message}</div>}
                </label>
                <button disabled={!isValid}>Add car</button>
            </form>
        </div>
    );
};

export default FormPage