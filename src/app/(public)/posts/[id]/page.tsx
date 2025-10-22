import {FC} from "react";
import {getAll} from "@/services/api.service";
import {IPost} from "@/model/IPost";
import {Metadata} from "next";

type PropsType = {
    params: { id: string };
}

export const generateMetadata = async ({params}: PropsType): Promise<Metadata> => {
    const {id} = await params;

    return {
        title: `Post ${id}`,
    }
}

const PostPage: FC<PropsType> =  async ({params}) => {
    const {id} = await params;
    const post = await getAll<IPost>(`/posts/${id}`);
    return (
        <div>
            <p>{post.id}</p>
            <p>title {post.title}</p>
            <p>body {post.body}</p>
        </div>
    );
};

export default PostPage