import {IUser} from "@/model/IUser";
import Link from "next/link";

interface UserCompProps {
    user: IUser
}

export const UserComp = ({user}: UserCompProps) => {
    return (
        <div>
            <Link href={'/users/' + user.id.toString()}>{user.name}</Link>
            <p>{user.username}</p>
        </div>
    );
};