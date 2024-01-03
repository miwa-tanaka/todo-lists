import Dates from "@/components/date";
import Day from "@/components/day";
import Clock from "@/components/clock";
import SwitchMode from "@/components/switch";
import { Flex, useColorModeValue } from "@chakra-ui/react";

export default function Header(): JSX.Element {
  const bg = useColorModeValue("pink.500", "pink.700");
  const color = useColorModeValue(
    "white",
    "whiteAlpha.900",
  );

  return (
    <Flex
      maxW="3xl"
      h="100px"
      m="0 auto"
      px={5}
      bgColor={bg}
      alignItems="center"
      justifyContent="space-between"
      color={color}
    >
      <Dates />
      <Flex alignItems="center">
        <Flex flexDirection="column" mr={3}>
          <Clock />
          <Day />
        </Flex>
        <SwitchMode />
      </Flex>
    </Flex>
  );
}
