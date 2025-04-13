import { MonumentData } from "../types";

export interface UseMonumentForm {
  monumentData: MonumentData;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  handleOnChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  isValidData: boolean;
}

export interface UseSidebarMenu {
  showSidebar: boolean;
  handleSetShowSidebar: () => void;
}
