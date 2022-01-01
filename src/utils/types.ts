import { FormEvent } from "react";
interface ObjectWithStringIndex {
  [key: string]: any;
}
export interface Subscription extends ObjectWithStringIndex {
  _id?: string;
  firstname?: string;
  picture?: string | Blob;
  lastname?: string;
  gender?: string;
  dob?: Date | null;
  profession?: string;
  shoesize?: number | null;
  hairColor?: string;
  hairLength?: string;
  braSize?: string;
  waist?: number | null;
  height?: number | null;
  weight?: number | null;
  castings?: string;
}

export interface IfiltersContext {
  changeFilters: (values: Subscription) => void;
  filters: Subscription;
  clearFilters: () => void;
}
