import { useState } from "react";
import { useNavigate } from "react-router";
import { MonumentData } from "../types";
import { UseMonumentForm } from "./types";
import useMonuments from "./useMonuments";

const useMonuentForm = (): UseMonumentForm => {
  const { addMonument } = useMonuments();
  const navigate = useNavigate();

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

    addMonument(monumentData);
    navigate("/home");
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
