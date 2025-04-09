import { Monument } from "../types";
import { MonumentDto } from "./types";

export const mapMonumentDtoToMonument = (
  monumentDto: MonumentDto,
): Monument => {
  return {
    ...monumentDto,
    imageAlt: `Iconic angle of ${monumentDto.name}`,
  };
};

export const mapMonumentsDtoToMonuments = (
  monumentsDto: MonumentDto[],
): Monument[] => {
  return monumentsDto.map(mapMonumentDtoToMonument);
};
