import {
  Box,
  Button,
  Text,
  List,
  ListItem,
  useColorModeValue,
} from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";
import { useRecoilState, useRecoilValue } from "recoil";
import { formData } from "../atoms/dataAtom";
import type { taskObj } from "@/components/button";

export default function Lists() {
  const formInfo: taskObj[] = useRecoilValue(formData);
  const [input, setInput] = useRecoilState(formData);

  function checkoffTask(key: number) {
    const newArray = formInfo.filter((n) => n.k !== key);
    setInput(newArray);
  }

  const bg = useColorModeValue("white", "gray.700");

  const buttonColor = useColorModeValue(
    "pink.400",
    "pink.700",
  );

  const hoverButtonColor = useColorModeValue(
    "pink.300",
    "pink.600",
  );

  const borderColor = useColorModeValue(
    "gray.200",
    "gray.700",
  );

  const evenBgColor = useColorModeValue(
    "gray.50",
    "gray.600",
  );

  const hoverBgColor = useColorModeValue(
    "yellow.50",
    "blackAlpha.300",
  );

  return (
    <Box
      py={10}
      h="calc(100vh - 180px)"
      overflow="scroll"
      bgColor={bg}
    >
      {formInfo.length < 1 ? (
        <Text textAlign="center">
          Hooray &#128588; There is no task!
        </Text>
      ) : (
        <List maxW="100%" px={5}>
          {formInfo.map((value, i) => (
            <ListItem
              key={i}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              py={3}
              px={2}
              borderBottom="1px"
              borderColor={borderColor}
              _even={{ backgroundColor: evenBgColor }}
              _hover={{ backgroundColor: hoverBgColor }}
            >
              <Text overflow="auto">{value.t}</Text>
              <Button
                onClick={() => checkoffTask(value.k)}
                bgColor={buttonColor}
                h="1.75rem"
                size="sm"
                ml={3}
                borderRadius="full"
                _hover={{ bgColor: hoverButtonColor }}
              >
                <CheckIcon color={bg} />
              </Button>
            </ListItem>
          ))}
        </List>
      )}
    </Box>
  );
}
