"use client";
import { useState } from "react";

export default function UpvoteBtn() {
  const [vote, setVote] = useState(0);

  function handleClick() {
    setVote(vote + 1);
  }

  return (
    <div>
      <div>{vote}</div>
      <button
        onClick={handleClick}
        className="bg-blue-600 text-white p-1 rounded-md"
      >
        Upvote
      </button>
    </div>
  );
}
