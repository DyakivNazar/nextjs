import {getAlls} from "@/services/api.service";
import {IPost} from "@/model/IPost";
import {PostComp} from "@/components/post/PostComp";

export const PostsComp = async () => {
    const posts = await getAlls<IPost[]>("posts")
    return (
        <>
            {posts.map((post) => <PostComp key={post.id} post={post} />)}
        </>
    );
};