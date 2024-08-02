import { Box } from "@yamada-ui/react";
import React from "react";
import { products } from "../utils/productData";
import { productInterface } from "../types/productInterface";
import { ProductDetail } from "./atoms/ProductDetail";

export const Products = () => {
  return (
    <>
      <Box w={"100%"} py={"40px"}>
        {products.map((product: productInterface) => (
          <ProductDetail
            key={product.id}
            id={product.id}
            product_name={product.product_name}
            product_member={product.product_member}
            product_detail={product.product_detail}
            product_image={product.product_image}
          />
        ))}
      </Box>
    </>
  );
};
