"use client";
import { useState } from "react";
import { mutate } from "swr";
import { track } from '@vercel/analytics';
import { RiSendPlaneFill } from "@react-icons/all-files/ri/RiSendPlaneFill";
import useRecipient from './recipient';
import type { FC } from "react";

const CommentsForm: FC = () => {
  const recipient = useRecipient();
  const [name, setName] = useState(recipient);
  const [comments, setComments] = useState("");
  const [sent, setSent] = useState(false);

  return (
    <div className="w-11/12 sm:w-9/12 md:w-7/12 lg:w-6/12 mx-auto">
      <input 
        className="w-full border-none py-2 px-3 rounded text-black focus:outline-none"
        placeholder="Name"
        value={name} 
        onChange={e => setName(e.target.value)} />
      <textarea 
        className="w-full border-none py-2 px-3 mt-4 resize-none rounded text-black focus:outline-none"
        placeholder="Message"
        value={comments} 
        onChange={e => setComments(e.target.value)} />
      {sent ? (
        <div className="text-center text-xl font-dance mt-4">Thank You for your Wishes</div>
      ) : (
        <button 
          disabled={sent}
          className="bg-olive block mt-4 mx-auto py-2 px-3 text-sm rounded"
          onClick={async () => {
            // Add to the database and revalidate the local cache.
            await fetch("/comments", { method: "POST", body: JSON.stringify({ name, comments }) });
            mutate("comments");
            track("Post Comment");

            // Empty the form.
            setName("");
            setComments("");
            setSent(true);
          }}>
          <RiSendPlaneFill className="inline mr-1" style={{ marginTop: -1 }} />
          <span>Send Your Wishes</span>
        </button>
      )}
    </div>
  );
}

export default CommentsForm;
