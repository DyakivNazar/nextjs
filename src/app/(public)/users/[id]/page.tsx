import {FC} from "react";
import {Metadata} from "next";
import {getAll} from "@/services/api.service";
import {IUser} from "@/model/IUser";

type PropsType = {
    params: {id: string};
}
export const generateMetadata = async ({params}: PropsType): Promise<Metadata> => {
    const {id} = await params;

    return {
        title: `User ${id}`,
    }
}

const UserPage:FC<PropsType> = async ({params}) => {

    const {id} = await params;

    const user = await getAll<IUser>(`users/${id}`)

    return (
        <div>
            <p>{user.id}</p>
            <p>name {user.name}</p>
            <p>username {user.username}</p>
        </div>
    );
};

export default UserPage