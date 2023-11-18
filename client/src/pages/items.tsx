import { useItemsData, useItemsList } from "../hooks/useQuery";

export const Items = () => {
  const { data: list } = useItemsList();
  const { data } = useItemsData(list);
  return (
    <section className="grid grid-cols-list place-content-center gap-6 md:gap-4 py-6 px-8 md:px-6 lg:px-20 bg-slate-50 h-full">
      {data?.map((item) => {
        const { id, name, sprites } = item;
        return (
          <article
            key={id}
            className="flex flex-col justify-center border-transparent border-solid shadow-sm rounded-xl bg-white p-2"
          >
            <div className="flex justify-between items-center">
              <h5 className="capitalize">{name}</h5>
              <img src={sprites.default} alt={name} />
            </div>
          </article>
        );
      })}
    </section>
  );
};
