export interface ICard {
  name: string;
}

export const Card = ({ name }: ICard) => {
  return (
    <article className="text-center p-2 sm:px-4 md:py-4 border-transparent border-solid shadow-sm rounded-xl bg-gray-50">
      <h5 className="capitalize">{name}</h5>
    </article>
  );
};
