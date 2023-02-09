import { FilterValueType } from "../screens/Dev/components/ProductForm";
import apiClient from "./client";

let endPoint = "/filter";

export type FilterType = {
  price: number[];
  tags: string[];
  size: number[];
};

export async function getFilter(): Promise<FilterType | undefined> {
  let { data } = await apiClient.get<FilterType>(endPoint);
  return data;
}
