import React from "react";
import { HiOutlineTrash } from "react-icons/hi";

function RemoveBtn({ id }) {
  const removeTopic = async () => {
    console.log(id);
    const confirmed = confirm("Are you sure you want to delete");
    if (confirmed) {
      const res = await fetch(`http://localhost:3001/api/topics?id=${id}`, {
        method: "DELETE",
      });
    }
  };
  return (
    <button className="text-red-400" onClick={removeTopic}>
      <HiOutlineTrash size={24} />
    </button>
  );
}

export default RemoveBtn;
