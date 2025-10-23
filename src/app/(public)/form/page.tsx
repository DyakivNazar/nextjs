import './form.css'
import Form from "next/form";
import {saveCar} from "@/server/serverActions";

const FormPage = () => {

    return (
        <div>
            <Form action={saveCar}>
                <label>
                    <input type={"text"} name={'brand'} placeholder={'Brand'} />
                </label>
                <label>
                    <input type={"number"} name={'price'} placeholder={'price'}/>
                </label>
                <label>
                    <input type={"number"} name={'year'} placeholder={'year'}/>
                </label>
                <button>Add Car</button>
            </Form>
        </div>
    );
};

export default FormPage
