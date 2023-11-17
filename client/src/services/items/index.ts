import axios from "axios";

class ItemsService {
  async getItemsList() {
    const { data } = await axios.get(
      `https://pokeapi.co/api/v2/item?limit=151`
    );
    const response = data.results;
    return response;
  }

  async getItemsData(list: any) {
    const promises = list.map((item: any) => axios.get(item.url));
    const response = await Promise.all(promises);
    const data = response.map((res) => res.data);

    return data;
  }
}

export default ItemsService;
