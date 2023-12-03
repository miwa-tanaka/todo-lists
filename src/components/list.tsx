
import { Box, Button, Text, List, ListItem } from '@chakra-ui/react'
import { CheckIcon } from '@chakra-ui/icons'
import { useRecoilState, useRecoilValue } from "recoil";
import { formData } from "../atoms/dataAtom";
import type { taskObj } from "@/components/button"

export default function Lists() {

  const formInfo: taskObj[] = useRecoilValue(formData);
  const [input, setInput] = useRecoilState(formData)

  function checkoffTask (key: number) {
    const newArray = formInfo.filter(n => n.k !== key);
    console.log(newArray, "after new array")
    setInput(newArray);
  }

  return (
    <Box py={10} maxW="3xl" m="0 auto 30px" maxH="70vh" overflow="scroll">
      <List spacing={3} px={5}>
        {formInfo.map((value, i) =>
          <ListItem key={i} display="flex" justifyContent="space-between" mb={5}>
            <Text>{value.t}</Text>
            <Button
              onClick={() => checkoffTask(value.k)} colorScheme='pink' h='1.75rem' size='sm'
              borderRadius="full" _hover={{ bgColor: "pink.300" }}>
              <CheckIcon />
            </Button>
          </ListItem>
        )}
      </List>
    </Box>
  );
}
