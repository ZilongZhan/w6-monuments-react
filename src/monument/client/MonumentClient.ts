import { mapMonumentsDtoToMonuments } from "../dto/mappers";
import { MonumentDto } from "../dto/types";
import { Monument } from "../types";
import { MonumentClientStructure } from "./types";

class MonumentClient implements MonumentClientStructure {
  private monumentAPI = `${import.meta.env.VITE_BASE_URL}/monuments`;

  async getAllMonuments(): Promise<Monument[]> {
    const response = await fetch(this.monumentAPI);

    if (!response.ok) {
      throw new Error("Error fetching monuments");
    }

    const { monuments: monumentsDto } = (await response.json()) as {
      monuments: MonumentDto[];
    };

    return mapMonumentsDtoToMonuments(monumentsDto);
  }
}

export default MonumentClient;
