import { PokemonStats } from "../../../services/pokedex/model";
import ProgressBar from "../../progressBar";

export interface IBaseStats {
  stats: PokemonStats[];
}

const BaseStatsTab = ({ stats }: IBaseStats) => {
  console.log(stats);
  return (
    <section className="flex flex-col gap-y-4">
      {stats.map((item, index) => {
        const { stat, base_stat } = item;
        return (
          <div key={index} className="flex flex-col gap-y-4">
            <h6 className="capitalize">{stat.name}</h6>
            <div className="flex items-center gap-x-2 gap-y-4">
              <span>{base_stat}</span> <ProgressBar progress={base_stat} />
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default BaseStatsTab;
