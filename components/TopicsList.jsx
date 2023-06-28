"use client";

import React, { useEffect, useState } from "react";
import RemoveBtn from "./RemoveBtn";
import Link from "next/link";
import { HiPencilAlt } from "react-icons/hi";
import axios from "axios";

// const getTopics = async () => {
//   try {
//     const res = await fetch("http://localhost:3001/api/topics", {
//       cache: "no-store",
//     });
//     if (!res.ok) {
//       throw new Error("failed to fetch");
//     }
//     return res.json();
//   } catch (err) {
//     console.log(err);
//   }
// };

function TopicsList() {
  const [topics, setTopics] = useState([]);

  useEffect(async () => {
    try {
      const res = await axios.get(`nextjs13-crud.vercel.app/api/topics`);
      setTopics(res.data.topics);
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <>
      {topics.map((topic, i) => {
        return (
          <div
            className="p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start"
            key={i}
          >
            <div>
              <h2 className="font-bold text-2xl ">{topic.title}</h2>
              <div>hiiii{topic.description}</div>
            </div>
            <div className="flex gap-2 ">
              <RemoveBtn id={topic._id} />
              <Link href={`/editTopic/${topic._id}`}>
                <HiPencilAlt size={24} />
              </Link>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default TopicsList;
