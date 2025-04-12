import { PropsWithChildren, useCallback, useMemo, useState } from "react";
import { Monument } from "../types";
import MonumentsClient from "../client/MonumentsClient";
import { MonumentsContextStructure } from "./types";
import MonumentsContext from "./MonumentsContext";

const MonumentsContextProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const [monuments, setMonuments] = useState<Monument[]>([]);
  const monumentsClient = useMemo(() => new MonumentsClient(), []);

  const loadMonuments = useCallback(async (): Promise<void> => {
    const apiMonuments = await monumentsClient.getAllMonuments();

    setMonuments(apiMonuments);
  }, [monumentsClient]);

  const monumentsContextValue: MonumentsContextStructure = {
    monuments,
    loadMonuments,
  };

  return (
    <MonumentsContext.Provider value={monumentsContextValue}>
      {children}
    </MonumentsContext.Provider>
  );
};

export default MonumentsContextProvider;
