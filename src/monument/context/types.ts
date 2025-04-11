import { Monument } from "../types";

export interface MonumentsContextStructure {
  monuments: Monument[];
  loadMonuments: () => Promise<void>;
}
