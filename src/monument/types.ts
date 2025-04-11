export interface Monument {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  city: string;
  country: string;
}

export type MonumentData = Omit<Monument, "id" | "imageAlt">;
