"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

function AddTopic() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    console.log("click");
    e.preventDefault();
    if (!title || !description) {
      alert("title and description are required");
      return;
    }
    try {
      const res = await fetch("https://nextjs13-crud.vercel.app/api/topics", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ title, description }),
      });

      if (res.ok) {
        router.push("/");
      } else {
        throw new Error("failed to create topics");
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <form className="flex flex-col  gap-3" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Topic Title"
        className="border border-slate-500 px-8 py-2"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        value={title}
      />
      <input
        type="text"
        placeholder="Topic Description"
        className="border border-slate-500 px-8 py-2"
        onChange={(e) => {
          setDescription(e.target.value);
        }}
        value={description}
      />
      <button
        type="submit"
        className="bg-green-400 font-bold text-white py-3 px-6"
      >
        Add Topic
      </button>
    </form>
  );
}

export default AddTopic;
