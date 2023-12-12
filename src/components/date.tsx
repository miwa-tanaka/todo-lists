import { useEffect, useState } from "react";
import { Text, Flex } from "@chakra-ui/react";

const Months = [
  "JAN",
  "FEB",
  "MAR",
  "APR",
  "MAY",
  "JUN",
  "JUL",
  "AUG",
  "SEP",
  "OCT",
  "NOV",
  "DEC",
];

export default function Dates(): JSX.Element {
  const [year, setYear] = useState<number>(NaN);
  const [month, setMonth] = useState<string>("");
  const [date, setDate] = useState<number>(NaN);

  useEffect(() => {
    const now = new Date();

    setYear(now.getFullYear());
    setMonth(Months[now.getMonth()]);
    setDate(now.getDate());
  }, []);

  return (
    <Flex alignItems="center">
      <Text
        fontSize="5xl"
        fontWeight={700}
      >{`${date}`}</Text>
      <Flex flexDirection="column" pl={2}>
        <Text
          fontSize="sm"
          fontWeight={700}
        >{`${month}`}</Text>
        <Text
          fontSize="sm"
          fontWeight={700}
        >{`${year}`}</Text>
      </Flex>
    </Flex>
  );
}
