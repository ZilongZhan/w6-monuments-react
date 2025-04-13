import { Monument, MonumentData } from "../types";

export interface MonumentsContextStructure {
  monuments: Monument[];
  loadMonuments: () => Promise<void>;
  addMonument: (monumentData: MonumentData) => Promise<void>;
  removeMonument: (monumentId: string) => Promise<void>;
}
