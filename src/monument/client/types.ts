import { Monument, MonumentData } from "../types";

export interface MonumentsClientStructure {
  getAllMonuments: () => Promise<Monument[]>;
  createMonument: (monumentData: MonumentData) => Promise<Monument>;
}
