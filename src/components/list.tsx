import {
  Box,
  Button,
  Text,
  List,
  ListItem,
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

  return (
    <Box py={10} h="calc(100vh - 180px)" overflow="scroll">
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
              borderColor="gray.200"
              _even={{ backgroundColor: "gray.50" }}
              _hover={{ backgroundColor: "yellow.50" }}
            >
              <Text overflow="auto">{value.t}</Text>
              <Button
                onClick={() => checkoffTask(value.k)}
                colorScheme="pink"
                h="1.75rem"
                size="sm"
                ml={3}
                borderRadius="full"
                _hover={{ bgColor: "pink.300" }}
              >
                <CheckIcon />
              </Button>
            </ListItem>
          ))}
        </List>
      )}
    </Box>
  );
}
