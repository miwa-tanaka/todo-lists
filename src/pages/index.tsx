import Header from "@/components/header";
import Lists from "@/components/list";
import Form from "@/components/form";
import { Box } from "@chakra-ui/react";

export default function Home(): JSX.Element {
  return (
    <Box bgColor="blackAlpha.50" minW="100vw">
      <Box
        bgColor="white"
        maxW="3xl"
        minH="100vh"
        m="0 auto"
      >
        <header>
          <Header />
        </header>
        <main>
          <Lists />
        </main>
        <footer>
          <Form />
        </footer>
      </Box>
    </Box>
  );
}
