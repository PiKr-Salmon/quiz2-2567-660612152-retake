"use client";

import { commentProps, ReplyProps } from "@/libs/types";
import { useState, useEffect, use } from "react";
import Reply from "./Reply";

export default function Comment({
  userImagePath,
  username,
  commentText,
  likeNum,
  replies,
} : commentProps ){

  const [islikes,setIslikes] = useState(false);

  useEffect(() => {
  if(likeNum !== 0){
    setIslikes(!islikes);
  }
  } , []);

  return (
    <div>
      <div className="d-flex gap-2 my-2">
          <img
            src={userImagePath}
            width="48"
            height="48"
            className="rounded-circle"
            style={{ objectFit: "cover" }}
          />
          <div
            className="rounded rounded-3 p-2"
            style={{ backgroundColor: "#454952 " }}
          >
            <span className="fw-semibold">{username}</span>
            <br />
            <span>{commentText}</span>
            {islikes ? <div className="d-flex align-items-center gap-1">
              <img src="/like.svg" width={20}></img>
              <span className="text-muted, white">{likeNum} คน</span>
            </div> : ""}
          </div>
        </div>
        {replies ? <div className="d">
              {replies.map((reply : ReplyProps) => (
                <Reply
                  key={reply.username.length}
                  userImagePath={reply.userImagePath}
                  username={reply.username}
                  replyText={reply.replyText}
                  likeNum={reply.likeNum}
                />
              ))}
            </div> : ""}
    </div>
  );
}
