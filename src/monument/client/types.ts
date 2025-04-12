import { Monument, MonumentData } from "../types";

export interface MonumentClientStructure {
  getAllMonuments: () => Promise<Monument[]>;
  createMonument: (monumentData: MonumentData) => Promise<Monument>;
}
