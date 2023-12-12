import { useEffect, useState } from "react";
import { Text } from "@chakra-ui/react";

const DaysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

export default function Day(): JSX.Element {
  const [day, setDay] = useState<string>("");

  useEffect(() => {
    const now = new Date();
    setDay(DaysOfWeek[now.getDay()]);
  }, []);

  return <Text fontSize="md">{`${day}`}</Text>;
}
