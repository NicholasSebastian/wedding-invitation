"use client";
import { useSearchParams } from "next/navigation";

function useRecipient() {
  const params = useSearchParams();
  const recipient = params.get("recipient");

  if (!recipient) return "";
  return recipient
    .replace(/\-/g, " ")
    .replace(/\w\S*/g, text => text.charAt(0).toUpperCase() + text.slice(1));
}

export default useRecipient;
