import {getAlls} from "@/services/api.service";
import {IUser} from "@/model/IUser";
import {UserComp} from "@/components/user/UserComp";

export const UsersComp = async () => {

    const users = await getAlls<IUser[]>("users");

    return (
        <>
            {users.map((user) => <UserComp key={user.id} user={user}/>)}
        </>
    );
};