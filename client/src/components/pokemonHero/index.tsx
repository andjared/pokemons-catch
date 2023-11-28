import { PokemonType } from "../../services/pokedex/model";
import { zeroPad } from "../../utils/helpers";

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
  const threeDigitsId = zeroPad(id, 3);

  return (
    <header className="flex flex-col justify-between sm:flex-row-reverse sm:items-center sm:gap-x-2 md:py-4">
      <div className="flex items-center justify-center flex-1">
        <img src={imgSrc} alt={name} />
      </div>
      <div className="flex flex-col gap-y-2 flex-1">
        <span className="text-gray-500">#{threeDigitsId}</span>
        <div className="flex flex-col gap-y-1 md:flex-row md:items-center md:gap-x-4">
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
        <div className="flex pr-10 lg:pr-32">
          <p className="text-gray-500 text-justify">{description}</p>
        </div>
      </div>
    </header>
  );
};
