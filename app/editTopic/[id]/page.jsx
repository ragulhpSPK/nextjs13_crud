/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import EditTopicForm from "@/components/EditTopicForm";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Page = ({ params }) => {
  const { id } = params;
  const [data, setData] = useState([]);

  useEffect(async () => {
    try {
      const res = await axios.get(`http://localhost:3001/api/topics/${id}`);
      setData(res.data.topic);
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <div>
      <EditTopicForm
        id={id}
        title={data.titles}
        descriptions={data.description}
      />
    </div>
  );
};

export default Page;
