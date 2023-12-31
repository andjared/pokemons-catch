import { PokemonAbility, ResponseShort } from "../../../services/pokedex/model";
import {
  decimeterToFeets,
  decimeterstToMeters,
  feetToInch,
  hectogramsToKilograms,
  kilogramsToPounds,
} from "../../../utils/helpers";

export interface IAboutTab {
  height: number;
  weight: number;
  abilities: PokemonAbility[];
  egg_groups: ResponseShort[];
  shape: ResponseShort;
  habitat: ResponseShort;
}

const AboutTab = ({
  height,
  weight,
  abilities,
  egg_groups,
  shape,
  habitat,
}: IAboutTab) => {
  const heightInFeets = decimeterToFeets(height);
  const heightInchesReminder = feetToInch(heightInFeets);
  const heightInMeters = decimeterstToMeters(height);

  const weightInKilograms = hectogramsToKilograms(weight);
  const weightInPounds = kilogramsToPounds(weightInKilograms);

  const displayHeightInFeets = `${Math.round(
    heightInFeets
  )}' ${heightInchesReminder}''`;

  return (
    <section className="flex flex-col gap-y-4 lg:gap-y-6">
      <article className="flex flex-col gap-y-2 lg:gap-y-4">
        <h5 className="text-gray-700">Basic Info</h5>
        <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
          <div className="flex flex-col gap-y-2">
            <h6 className="text-gray-500">Height</h6>
            <p>
              {displayHeightInFeets} / {heightInMeters} m
            </p>
          </div>
          <div className="flex flex-col gap-y-2">
            <h6 className="text-gray-500">Weight</h6>
            <p>
              {weightInKilograms} kg / {weightInPounds} lbs
            </p>
          </div>
          <div className="flex flex-col gap-y-2">
            <h6 className="text-gray-500">Shape</h6>
            <p className="capitalize">{shape.name}</p>
          </div>
        </div>
      </article>

      <article className="flex flex-col gap-y-2 lg:gap-y-4">
        <h5 className="text-gray-700">Additional</h5>
        <div className="flex flex-col sm:flex-row justify-between gap-y-4">
          <div className="flex flex-col gap-y-2">
            <h6 className="text-gray-500">Abilities</h6>
            <ul className="flex flex-col gap-y-2">
              {abilities?.map((item, index) => (
                <li key={index} className="capitalize">
                  {item.ability.name}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-y-2">
            <h6 className="text-gray-500">Egg groups</h6>
            <ul>
              {egg_groups.map((group, index) => (
                <li key={index} className="capitalize">
                  {group.name}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-y-2">
            <h6 className="text-gray-500">Habitat</h6>
            <p className="capitalize">{habitat ? habitat.name : "Unkownn"}</p>
          </div>
        </div>
      </article>
    </section>
  );
};

export default AboutTab;
