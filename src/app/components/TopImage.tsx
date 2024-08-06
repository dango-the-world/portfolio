import { Box, Text } from "@yamada-ui/react";
import React from "react";

export const TopImage = () => {
  return (
    <>
      <Box
        h={"100vh"}
        m={"0"}
        backgroundImage={"url('dango_icon02.jpg')"}
        backgroundSize={"cover"}
        backgroundPosition={"50% 30%"}
        position={"relative"}
      >
        <Box
          h={"100vh"}
          backdropFilter={"blur(60px)"}
          backgroundColor={"rgba(255, 255, 255, 0.7)"}
          position={"absolute"}
          top={0}
          left={0}
          right={0}
          bottom={0}
        >
          <Box
            position={"absolute"}
            top={"30%"}
            left={"23%"}
            w={"200px"}
            p={"5px"}
          >
            <Text fontSize="3rem">Dango the World Portfolio</Text>
          </Box>
        </Box>
      </Box>
    </>
  );
};
