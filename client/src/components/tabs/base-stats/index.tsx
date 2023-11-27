import { PokemonStats } from "../../../services/pokedex/model";
import { ProgressBar } from "../../progressBar";

export interface IBaseStats {
  stats: PokemonStats[];
}

const BaseStatsTab = ({ stats }: IBaseStats) => {
  return (
    <section className="flex flex-col gap-y-4">
      {stats.map((item, index) => {
        const { stat, base_stat } = item;
        return (
          <div key={index} className="flex flex-col gap-y-4">
            <h6 className="capitalize text-gray-500">{stat.name}</h6>
            <div className="flex items-center gap-x-2">
              <span className="font-bold">{base_stat}</span>{" "}
              <ProgressBar progress={base_stat} />
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default BaseStatsTab;
