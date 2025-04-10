import { Monument } from "../types";

export type MonumentDto = Omit<Monument, "imageAlt">;
