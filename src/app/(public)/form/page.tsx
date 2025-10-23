'use client';
import './form.css'
import {saveCar} from "@/server/serverActions";
import {FormEvent, useState} from "react";

const FormPage = () => {
    const [errors, setErrors] = useState<string[]>([]);
    const [message, setMessage] = useState("");

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);

        const result = await saveCar(formData);

        if (!result.success) {
            setErrors(result.errors ?? []);
            setMessage("");
        } else {
            setErrors([]);
            setMessage("Car added successfully!");
            e.currentTarget.reset();
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
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

                {errors.length > 0 && (
                    <ul style={{ color: "red" }}>
                        {errors.map((err, i) => (
                            <li key={i}>{err}</li>
                        ))}
                    </ul>
                )}

                {message && <p style={{ color: "green" }}>{message}</p>}
            </form>
        </div>
    );
};

export default FormPage