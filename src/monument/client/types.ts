import { Monument } from "../types";

export interface MonumentClientStructure {
  getAllMonuments: () => Promise<Monument[]>;
}
