import axios from "axios";
import { Item, ItemShort } from "./model";

class ItemsService {
  async getItemsList(): Promise<ItemShort[]> {
    const { data } = await axios.get(
      `https://pokeapi.co/api/v2/item?limit=151`
    );
    const response = data.results;
    return response;
  }

  async getItemsData(list: ItemShort[]): Promise<Item[]> {
    const promises = list.map((item: ItemShort) => axios.get(item.url));
    const response = await Promise.all(promises);
    const data = response.map((res) => res.data);

    return data;
  }
}

export default ItemsService;
