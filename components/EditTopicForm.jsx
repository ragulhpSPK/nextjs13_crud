"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

function EditTopicForm({ id, titles, descriptions }) {
  const [title, setTitle] = useState(titles);
  const [description, setDescription] = useState(descriptions);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(
        `https://nextjs13-crud.vercel.app/api/topics/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ title, description }),
        }
      );

      router.push("/");

      if (!res.ok) {
        throw new Error("failed to update");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form className="flex flex-col gap-3 " onSubmit={handleSubmit}>
      <input
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        type="text"
        placeholder="Topic Title"
        className="border border-slate-500 px-8 py-2"
      />
      <input
        value={description}
        onChange={(e) => {
          setDescription(e.target.value);
        }}
        type="text"
        placeholder="Topic Description"
        className="border border-slate-500 px-8 py-2"
      />
      <button
        type="submit"
        className="bg-green-400 font-bold text-white py-3 px-6"
      >
        Update Topic
      </button>
    </form>
  );
}

export default EditTopicForm;
