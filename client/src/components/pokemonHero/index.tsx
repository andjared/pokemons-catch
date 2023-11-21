import { PokemonType } from "../../services/pokedex/model";

export interface IPokemonHero {
  imgSrc: string;
  name: string;
  types: PokemonType[];
  description?: string;
  id: number;
}
export const PokemonHero = ({
  imgSrc,
  name,
  types,
  id,
  description,
}: IPokemonHero) => {
  return (
    <header className="flex flex-col justify-between md:flex-row-reverse md:items-center md:gap-x-2 md:py-4">
      <img src={imgSrc} alt={name} />
      <div className="flex flex-col gap-y-2">
        <span>#{id}</span>
        <div className="flex flex-col gap-y-2 md:flex-row md:items-center md:gap-x-4">
          <h1 className="capitalize">{name}</h1>
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
        </div>
        <p className="text-justify text-gray-500">{description}</p>
      </div>
    </header>
  );
};
