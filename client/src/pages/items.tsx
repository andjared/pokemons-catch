import { useItemsData, useItemsList } from "../hooks/useQuery";

export const Items = () => {
  const { data: list } = useItemsList();
  const { data } = useItemsData(list);
  return (
    <ul>
      {data?.map((item) => {
        const { id, name, sprites, effect_entries } = item;
        console.log(effect_entries);
        return (
          <li key={id}>
            <span>{name}</span>
            <img src={sprites.default} alt={name} />
          </li>
        );
      })}
    </ul>
  );
};
