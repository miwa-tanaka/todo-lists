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
import type { taskObj } from "@/components/form";

export default function Lists() {
  const formInfo: taskObj[] = useRecoilValue(formData);
  const [input, setInput] = useRecoilState(formData);

  function checkoffTask(key: number) {
    const newArray = formInfo.filter((n) => n.k !== key);
    setInput(newArray);
  }

  const listBorderColor = useColorModeValue(
    "gray.200",
    "gray.700",
  );

  const listEvenBgColor = useColorModeValue(
    "gray.50",
    "gray.600",
  );

  const listHoverBgColor = useColorModeValue(
    "yellow.50",
    "blackAlpha.300",
  );

  return (
    <Box
      py={10}
      h="calc(100vh - 180px)"
      overflow="scroll"
      className="bgColor"
    >
      {formInfo.length < 1 ? (
        <Text textAlign="center">
          Hooray &#128588; no task here!
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
              borderColor={listBorderColor}
              _even={{ backgroundColor: listEvenBgColor }}
              _hover={{ backgroundColor: listHoverBgColor }}
            >
              <Text overflow="auto">{value.t}</Text>
              <Button
                onClick={() => checkoffTask(value.k)}
                h="1.75rem"
                size="sm"
                ml={3}
                borderRadius="full"
                className="buttonColor"
              >
                <CheckIcon className="fontColor" />
              </Button>
            </ListItem>
          ))}
        </List>
      )}
    </Box>
  );
}
