import { useEffect, useState } from 'react';
import { Text } from '@chakra-ui/react'

export default function Clock(): JSX.Element {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const hours = currentTime.getHours();
  const minutes = currentTime.getMinutes();

  const formatTimeUnit = (unit:number) => (unit < 10 ? `0${unit}` : unit);

  const period = hours >= 12 ? 'pm' : 'am';

  const formattedHours = hours % 12 || 12;

  return (
    <Text fontSize="lg" fontWeight={700}>
      {`${formattedHours}:${formatTimeUnit(minutes)}${period}`}
    </Text>
  );
}
