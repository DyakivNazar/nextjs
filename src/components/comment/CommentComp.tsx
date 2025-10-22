import {IComment} from "@/model/IComment";
import Link from "next/link";

interface CommentCompProps {
    comment: IComment;
}

export const CommentComp = ({comment}: CommentCompProps) => {
    return (
        <div>
            <p>{comment.id}</p>
            <Link href={"/comments/" + comment.id.toString()}>{comment.email}</Link>
        </div>
    );
};