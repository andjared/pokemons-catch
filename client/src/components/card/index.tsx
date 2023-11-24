export interface ICard {
  name: string;
}

const Card = ({ name }: ICard) => {
  return (
    <article className="text-center p-4 lg:p-4 border-transparent border-solid shadow-sm rounded-xl bg-gray-50">
      <h5 className="capitalize">{name}</h5>
    </article>
  );
};

export default Card;
