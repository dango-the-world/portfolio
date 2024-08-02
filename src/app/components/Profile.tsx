import { Box, Text, Image } from "@yamada-ui/react";
import React from "react";

export const Profile = () => {
  return (
    <>
      <Box
        display={"flex"}
        gap={"40px"}
        alignItems={"center"}
        justifyContent={"center"}
        p={"40px"}
      >
        <Box w={"50%"}>
          <Text fontSize={"1.6rem"}>Dango the World</Text>
          <Text>
            専門学生3年、21歳。とても弱い。フロントエンドエンジニアを目指して迷走中。
            デザインと睡魔と腹痛には勝てない。呼び方はそのまま「団子」で問題ないです。
          </Text>
        </Box>
        <Box>
          <Image
            src="dango_icon_mu.jpg"
            w={"200px"}
            border={"1px solid #888"}
            rounded={"100%"}
            alt="Dango the Worldのアイコン"
          />
        </Box>
      </Box>
    </>
  );
};
