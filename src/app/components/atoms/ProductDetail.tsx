import { Box, Image, Text } from "@yamada-ui/react";
import React from "react";

type props = {
  id: number;
  product_name: string;
  product_member: number;
  product_detail: string;
  product_image: string;
};

export const ProductDetail = ({
  id,
  product_name,
  product_member,
  product_detail,
  product_image,
}: props) => {
  return (
    <>
      <Box
        display={"flex"}
        alignItems={"end"}
        justifyContent={"center"}
        gap={"40px"}
        p={"40px"}
      >
        <Image src={product_image} w={"350px"} alt="Product image" />
        <Box>
          <Image src={product_name} h={"50px"} alt={product_name} />
          <Box px={"5px"}>
            <Text>作成メンバー数:{product_member}人</Text>
            <Text m={"0"} w={"400px"}>
              概要:
              <br />
              {product_detail}
            </Text>
          </Box>
        </Box>
      </Box>
    </>
  );
};
