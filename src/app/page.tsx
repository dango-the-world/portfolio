import React from "react";
import { Profile } from "./components/Profile";
import { Box } from "@yamada-ui/react";
import { Products } from "./components/Products";
import { Skills } from "./components/Skills";

const page = () => {
  return (
    <>
      <Box w={"1200px"} m={"auto"}>
        <Profile />
        <Products />
        <Skills />
      </Box>
    </>
  );
};

export default page;
