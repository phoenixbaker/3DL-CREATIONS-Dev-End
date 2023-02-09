import { Autocomplete, Chip, TextField } from "@mui/material";
import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { FilterType, getFilter } from "../../../api/filter";
import { uploadProduct } from "../../../api/product";
import DropDownSelector from "../../../components/MaterialUI/DropDownSelector";
type productType = {
  productName: string;
  productTags: string[];
  description: string;
  productStock: string;
  productSize: string;
  productPhotos: FileList | null;
  productPrice: string;
};

export interface FilterValueType {
  tags: string[] | string;
  inputValue?: string;
}

export default function ProductForm() {
  const [product, setProduct] = useState({} as productType);
  const [filter, setFilter] = useState({} as FilterType);

  useEffect(() => {
    handleTags();
  }, []);

  async function handleTags() {
    let res = await getFilter();
    if (res) setFilter(res);
  }

  function handleFiles(e: ChangeEvent<HTMLInputElement>) {
    setProduct((prev) => ({ ...prev, productPhotos: e.target.files }));
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!product.productPhotos?.length) return;

    const photos = product.productPhotos;
    const productPhotos = new FormData();

    for (var i = 0; i < photos.length; i++) {
      productPhotos.append("ProductPhotos", photos[i]);
    }

    uploadProduct({ ...product, productPhotos });
    setProduct({} as productType);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1 className="text-2xl font-bold">Add Products</h1>
        <div id="Dev-Products" className="grid grid-cols-5 gap-x-28">
          <div className="flex flex-col">
            <label className="text-lg pb-1">Product Name</label>
            <input
              type="text"
              value={product.productName}
              onChange={(e) =>
                setProduct((prev) => ({
                  ...prev,
                  productName: e.target.value,
                }))
              }
              placeholder="Product Name"
              className="shadow-md rounded-full p-2 px-4"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-lg pb-1">Price ($)</label>
            <input
              type="text"
              value={product.productPrice}
              onChange={(e) =>
                setProduct((prev) => ({
                  ...prev,
                  productPrice: e.target.value,
                }))
              }
              placeholder="Price"
              className="shadow-md rounded-full p-2 px-4"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-lg pb-1">Size (cm)</label>
            <input
              type="text"
              value={product.productSize}
              onChange={(e) =>
                setProduct((prev) => ({ ...prev, productSize: e.target.value }))
              }
              placeholder="Size"
              className="shadow-md rounded-full p-2 px-4"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-lg pb-1">Description</label>
            <input
              type="text"
              value={product.description}
              onChange={(e) =>
                setProduct((prev) => ({ ...prev, description: e.target.value }))
              }
              id="Description"
              name="Description"
              placeholder="Description"
              className="shadow-md rounded-full p-2 px-4"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-lg pb-1">Product Tags</label>
            {filter.tags && (
              <Autocomplete
                multiple
                id="tags-filled"
                value={product.productTags}
                onChange={(e, newValue) => {
                  setProduct((prev) => ({ ...prev, productTags: newValue }));
                }}
                options={filter.tags}
                freeSolo
                getOptionLabel={(option) => option}
                isOptionEqualToValue={(option, value) => option === value}
                renderTags={(value, getTagProps) => {
                  return value.map((option, index) => (
                    <Chip
                      variant="outlined"
                      label={typeof option === "string" ? option : option}
                      {...getTagProps({ index })}
                    />
                  ));
                }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    variant="filled"
                    label="Product Tags"
                    placeholder="Select Tags"
                  />
                )}
              />
            )}
          </div>
          <div className="flex flex-col">
            <label className="text-lg pb-1">Stock</label>
            <DropDownSelector
              selected={product.productSize}
              label="Stock"
              selectors={["In Stock", "Print On Demand"]}
              setSelected={(e) =>
                setProduct((prev) => ({ ...prev, productStock: e }))
              }
            />
          </div>
          <div className="flex flex-col">
            <label className="text-lg pb-1">Photos</label>
            <input
              type="file"
              onChange={handleFiles}
              id="Files"
              multiple
              name="ProductPhotos"
              placeholder="Files"
              className="shadow-md rounded-full p-2 px-4 bg-white"
            />
          </div>
          <button
            type="submit"
            className="bg-secondary-blue rounded-full font-bold text-xl text-white"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
