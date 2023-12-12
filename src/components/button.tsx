import {
  Box,
  InputGroup,
  Input,
  InputRightElement,
  Button,
  FormControl,
  FormErrorMessage,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import { useForm } from "react-hook-form";
import { useRecoilState, useRecoilValue } from "recoil";
import { formData, totalTasks } from "../atoms/dataAtom";

type task = {
  task: string;
};

export type taskObj = {
  t: string;
  k: number;
};

export default function AddTasks() {
  const {
    handleSubmit,
    register,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<task>();
  const [input, setInput] = useRecoilState(formData);
  const [total, setTotal] = useRecoilState(totalTasks);

  const formInfo: taskObj[] = useRecoilValue(formData);
  const numOfTasks: number = useRecoilValue(totalTasks);

  function useOnSubmit(values: task) {
    const t: string = values.task;
    const k: number = numOfTasks;
    const task: taskObj = { t, k };
    const updatedFormInfo: taskObj[] = [...formInfo, task];
    setInput(updatedFormInfo);
    setTotal(numOfTasks + 1);
    setValue("task", "");
  }

  return (
    <form onSubmit={handleSubmit(useOnSubmit)}>
      <FormControl isInvalid={Boolean(errors.task)}>
        <Box h="30px">
          <FormErrorMessage
            m={0}
            justifyContent="center"
            fontWeight={700}
          >
            {errors.task && errors.task.message}
          </FormErrorMessage>
        </Box>
        <InputGroup maxW="2xl" h="50px" m="0 auto" px={2}>
          <Input
            pr="4.5rem"
            focusBorderColor="pink.400"
            placeholder="Type tasks"
            borderRadius="full"
            id="task"
            {...register("task", {
              required: "This is required",
            })}
          />
          <InputRightElement width="4.5rem">
            <Button
              h="1.75rem"
              size="sm"
              bgColor="pink.500"
              borderRadius="full"
              _hover={{ bgColor: "pink.300" }}
              isLoading={isSubmitting}
              type="submit"
            >
              <AddIcon color="white" fontWeight={700} />
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
    </form>
  );
}
