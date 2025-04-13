import { MemoryRouter } from "react-router";
import { ReactNode } from "react";
import MonumentsContextProvider from "../../monument/context/MonumentsContextProvider";

interface AllContextsProviderProps {
  children: ReactNode;
}

const AllContextsProvider: React.FC<AllContextsProviderProps> = ({
  children,
}) => {
  return (
    <MonumentsContextProvider>
      <MemoryRouter>{children}</MemoryRouter>
    </MonumentsContextProvider>
  );
};

export default AllContextsProvider;
