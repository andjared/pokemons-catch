import { MouseEventHandler, useState } from "react";
import { Pokemon } from "../../services/pokedex/model";
import { useSpeciesData } from "../../hooks/useQuery";
import { PokemonHero } from "../pokemonHero";
import { Button } from "../button";
import { Loader } from "../loader/loader";

export interface IPokemonWrapper {
  pokemon: Pokemon;
}

export const PokemonWrapper = ({ pokemon }: IPokemonWrapper) => {
  const {
    // weight,
    // height,
    // abilities,
    // stats,
    species,
    types,
    sprites,
    id,
    name,
  } = pokemon;
  const [activeTab, setActiveTab] = useState<number>(1);
  const { data: speciesData, isLoading } = useSpeciesData(species.url);

  const toggleTabs = (e: React.MouseEvent<HTMLElement>) => {
    const element = e.target as HTMLButtonElement;
    setActiveTab(Number(element.id));
  };

  console.log("active", activeTab);

  if (isLoading) {
    return (
      <section className="flex justify-center m-auto">
        <Loader />
      </section>
    );
  }

  const imgSrc = sprites.other["official-artwork"].front_shiny;
  const description = speciesData?.flavor_text_entries.filter(
    (entry) => entry.language.name === "en"
  )[0].flavor_text;

  const tabs = [
    { name: "about", id: 1 },
    { name: "base stats", id: 2 },
    { name: "evolution", id: 3 },
    { name: "moves", id: 4 },
  ];

  return (
    <section className="flex flex-col gap-y-4 px-4 py-4 md:px-4 lg:px-16">
      <div className="border-b-2 border-gray-100 flex flex-col gap-y-2">
        <PokemonHero
          imgSrc={imgSrc}
          name={name}
          types={types}
          id={id}
          description={description}
        />
        <div className="flex gap-x-2 sm:gap-x-4 w-full ">
          {tabs.map((tab) => {
            const { name, id } = tab;
            return (
              <Button
                className="flex capitalize text-base sm:text-md  md:text-lg text-gray-700 font-semibold py-4"
                id={String(id)}
                key={id}
                onClick={toggleTabs}
              >
                {name}
              </Button>
            );
          })}
        </div>
      </div>
    </section>
  );
};
