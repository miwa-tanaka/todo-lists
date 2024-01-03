import {
  Box,
  IconButton,
  useColorMode,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

export default function SwitchMode() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box>
      <IconButton
        colorScheme={
          colorMode === "light"
            ? "blackAlpha"
            : "whiteAlpha"
        }
        aria-label="switch color mode"
        size="md"
        fontSize="20px"
        isRound={true}
        onClick={toggleColorMode}
        icon={
          colorMode === "light" ? (
            <MoonIcon />
          ) : (
            <SunIcon color="whiteAlpha.900" />
          )
        }
      />
    </Box>
  );
}
