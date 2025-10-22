import {FC} from "react";
import {Metadata} from "next";
import {getAll} from "@/services/api.service";
import {IComment} from "@/model/IComment";

type PropsType = {
    params:{id:string}
}
export const generateMetadata = async ({params}: PropsType): Promise<Metadata> => {
    const {id} = await params;

    return {
        title: `Post ${id}`,
    }
}
const CommentPage:FC<PropsType> = async ({params}) => {
    const {id} = await params;
    const comment = await getAll<IComment>(`comments/${id}`);
    return (
        <div>
            <p>{comment.id}</p>
            <p>email {comment.email}</p>
            <p>name {comment.name}</p>
            <p>body {comment.body}</p>
        </div>
    );
};

export default CommentPage