"use client";
import useSWR from "swr";
import type { FC } from "react";

type Comment = {
  id: number
  name: string
  comment: string
}

const Comments: FC = () => {
  const { data, error } = useSWR("comments", async () => {
    const response = await fetch("/comments", { method: "GET" });
    const data = await response.json();
    return data.payload.reverse() as Array<Comment>;
  });

  if (error) return <div>Oh no. An error occured...</div>;
  return (
    <div className="text-center h-full p-2 overflow-scroll">
      {data?.map(comment => (
        <div key={comment.id} className="mb-3">
          <div className="text-black font-semibold">{comment.name}</div>
          <div className="text-gray-700 leading-tight">{comment.comment}</div>
        </div>
      ))}
    </div>
  );
}

export default Comments;
