import {getAlls} from "@/services/api.service";
import {IComment} from "@/model/IComment";
import {CommentComp} from "@/components/comment/CommentComp";

export const CommentsComp = async () => {

    const comments = await getAlls<IComment[]>('comments');

    return (
        <>
            {comments.map((comment) => <CommentComp key={comment.id} comment={comment} />)}
        </>
    );
};