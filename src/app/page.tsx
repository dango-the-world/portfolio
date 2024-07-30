import React from "react";
import { Profile } from "./components/Profile";
import { Box } from "@yamada-ui/react";

const page = () => {
  return (
    <>
      <Box w={"1200px"} m={"auto"}>
        <Profile />
      </Box>
    </>
  );
};

export default page;
