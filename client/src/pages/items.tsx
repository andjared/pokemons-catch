import React from "react";
import { useItemsData, useItemsList } from "../hooks/useQuery";

export const Items = () => {
  const { data: list } = useItemsList();

  const { data } = useItemsData(list);
  console.log(data);
  return (
    <div>
      {data?.map((item) => (
        <p>{item.name}</p>
      ))}
    </div>
  );
};
