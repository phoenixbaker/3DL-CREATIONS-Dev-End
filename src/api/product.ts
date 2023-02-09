import apiClient from "./client";

const endPoint = "/dev/upload/product";

interface uploadProductType extends uploadProductDetailsType {
  productPhotos: FormData;
}

type uploadProductDetailsType = {
  productName: string;
  productTags: string[];
  description: string;
  productPrice: string;
  productStock: string;
  productSize: string;
  idArr?: Array<string>;
};

export const uploadProduct = async (data: uploadProductType) => {
  let idArr = await uploadProductPhotos(data.productPhotos);
  await uploadProductDetails({ ...data, idArr });
};

const uploadProductDetails = async (data: uploadProductDetailsType) => {
  return apiClient.post(endPoint + "/details", data);
};

const uploadProductPhotos = async (
  productPhotos: FormData
): Promise<Array<string> | undefined> => {
  let { data } = await apiClient.post<Array<string>>(endPoint, productPhotos);
  return data;
};
