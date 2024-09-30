// You can define interfaces for all React components here.
// Do not forget to export properly.

interface ReplyProps {
    username: string;
    userImagePath: string;
    replyText: string;
    likeNum: number;
}
export type { ReplyProps };

interface postOwner{
    profileImgPath : string;
    profile: string;
    post: string;
    postlikes : number;
}
export type { postOwner }

interface commentProps {
    userImagePath : string;
    username : string;
    commentText : string;
    likeNum : number;
    replies : ReplyProps[];
}
export type { commentProps }