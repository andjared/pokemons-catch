export interface ICard {
  name: string;
}

const Card = ({ name }: ICard) => {
  return (
    <article className="flex flex-col justify-center items-center gap-2 lg:gap-4 p-2 lg:p-4 border-transparent border-solid shadow-sm rounded-xl bg-white">
      <h5 className="capitalize">{name}</h5>
    </article>
  );
};

export default Card;
