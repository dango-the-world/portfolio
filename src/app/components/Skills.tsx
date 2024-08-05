import { Box, Image } from "@yamada-ui/react";
import React from "react";
import { skills } from "../utils/skilData";
import { skillInterface } from "../types/skillInterface";

export const Skills = () => {
  return (
    <>
      <Box as="center" pb={"10px"}></Box>
      <Box
        display={"flex"}
        flexWrap={"wrap"}
        justifyContent={"center"}
        w={"100%"}
        gap={"16px"}
      >
        {skills.map((skill: skillInterface) => (
          <Image
            key={skill.id}
            src={skill.skill_logo}
            alt={skill.skill_name}
            h={"50px"}
          />
        ))}
      </Box>
    </>
  );
};
