import {
  EggGroup,
  PokemonAbility,
  PokemonShape,
} from "../../../services/pokedex/model";
import {
  convertToFeets,
  decimeterstToMeters,
  feetToInch,
  hectogramsToKilograms,
  kilogramsToPounds,
} from "../../../utils/helpers";

export interface IAboutTab {
  height: number;
  weight: number;
  abilities: PokemonAbility[];
  egg_groups: EggGroup[];
  shape: PokemonShape;
}

const AboutTab = ({
  height,
  weight,
  abilities,
  egg_groups,
  shape,
}: IAboutTab) => {
  const heightInFeets = convertToFeets(height) * 10;
  const heightInchesReminder = feetToInch(heightInFeets);
  const heightInMeters = decimeterstToMeters(height);

  const weightInKilograms = hectogramsToKilograms(weight);
  const weightInPounds = kilogramsToPounds(weightInKilograms);

  const displayHeightInFeets = `${Math.round(
    heightInFeets
  )}' ${heightInchesReminder}''`;

  return (
    <section className="flex flex-col">
      <article className="flex flex-col gap-y-2">
        <h5 className="font-semibold">Basic Info</h5>
        <div>
          <h6 className="text-gray-500">Height</h6>
          <p>
            {displayHeightInFeets} / {heightInMeters} m
          </p>
        </div>
        <div>
          <h6 className="text-gray-500">Weight</h6>
          <p>
            {weightInKilograms} kg / {weightInPounds} lbs
          </p>
        </div>
        <div>
          <h6 className="text-gray-500">Shape</h6>
          <p className="capitalize">{shape.name}</p>
        </div>
      </article>

      <article className="flex flex-col gap-y-2">
        <h5 className="font-semibold">Additional</h5>
        <div>
          <h6 className="text-gray-500">Abilities</h6>
          <ul>
            {abilities.map((item, index) => (
              <li key={index} className="capitalize">
                {item.ability.name}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h6 className="text-gray-500">Egg groups</h6>
          <ul>
            {egg_groups.map((group, index) => (
              <li key={index} className="capitalize">
                {group.name}
              </li>
            ))}
          </ul>
        </div>
      </article>
    </section>
  );
};

export default AboutTab;
