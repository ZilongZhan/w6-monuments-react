import { useState } from "react";
import { MonumentData } from "../types";
import { UseMonumentForm } from "./types";

const useMonuentForm = (): UseMonumentForm => {
  const initialMonumentData: MonumentData = {
    name: "",
    description: "",
    imageUrl: "",
    city: "",
    country: "",
  };

  const [monumentData, setMonument] =
    useState<MonumentData>(initialMonumentData);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
  };

  const handleOnChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const newMonumentData = {
      ...monumentData,
      [event.target.id]: event.target.value,
    };

    setMonument(newMonumentData);
  };

  const isValidData =
    monumentData.name !== "" &&
    monumentData.description !== "" &&
    monumentData.city !== "" &&
    monumentData.imageUrl !== "" &&
    monumentData.country !== "";

  return {
    monumentData,
    handleSubmit,
    handleOnChange,
    isValidData,
  };
};

export default useMonuentForm;
