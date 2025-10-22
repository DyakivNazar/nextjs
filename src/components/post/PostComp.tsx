import {IPost} from "@/model/IPost";
import Link from "next/link";

interface PostCompProps {
    post: IPost;
}

export const PostComp = ({post}: PostCompProps) => {
    return (
        <div>
            <p>{post.id}</p>
            <Link href={'/posts/' + post.id.toString()}>{post.title}</Link>
        </div>
    );
};