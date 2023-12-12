import Dates from "@/components/date";
import Day from "@/components/day";
import Clock from "@/components/clock";
import { Flex } from "@chakra-ui/react";

export default function Header(): JSX.Element {
  return (
    <Flex
      maxW="3xl"
      h="100px"
      m="0 auto"
      px={5}
      bgColor="pink.500"
      alignItems="center"
      justifyContent="space-between"
      color="white"
    >
      <Dates />
      <Flex flexDirection="column">
        <Clock />
        <Day />
      </Flex>
    </Flex>
  );
}
