export interface IPokemon {
  name: string;
  sprites: { other: { "official-artwork": { front_default: string } } };
  types: [{ type: { name: string; url: string } }];
}

const PokemonCard = ({ name, sprites, types }: IPokemon) => {
  const imgSrc = sprites.other["official-artwork"].front_default;

  return (
    <article className="flex flex-col justify-center items-center gap-2 lg:gap-4 p-2 lg:p-4 border-transparent border-solid shadow-sm rounded-xl bg-white">
      <img src={imgSrc} alt={name} />
      <h5 className="capitalize">{name}</h5>
      <ul className="flex gap-x-1">
        {types.map((item, index) => (
          <li key={index}>
            <img
              src={`/icons/type-${item.type.name}.svg`}
              alt={`Pokemon type ${item.type.name}`}
            />
          </li>
        ))}
      </ul>
    </article>
  );
};

export default PokemonCard;
