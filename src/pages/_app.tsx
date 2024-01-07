import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

function MyApp({ Component, pageProps }: AppProps) {
  const theme = extendTheme({
    config: {
      initialColorMode: "system",
      useSystemColorMode: true,
    },
    styles: {
      global: (props: any) => ({
        ".bgColor": {
          bg: mode("white", "gray.700")(props),
        },
        ".fontColor": {
          color: mode("white", "gray.700")(props),
        },
        ".hoverButtonColor": {
          color: mode("pink.300", "pink.600")(props),
        },
        ".borderColor": {
          _focusVisible: {
            borderColor: mode(
              "pink.400",
              "pink.700",
            )(props),
            boxShadow: mode(
              "0 0 0 1px #ED64A6",
              "0 0 0 1px #97266D",
            )(props),
          },
        },
        ".buttonColor": {
          bg: mode("pink.400", "pink.700")(props),
          _hover: {
            bg: mode("pink.300", "pink.600")(props),
          },
        },
      }),
    },
  });

  return (
    <RecoilRoot>
      <CacheProvider>
        <ChakraProvider theme={theme}>
          <Component {...pageProps} />
        </ChakraProvider>
      </CacheProvider>
    </RecoilRoot>
  );
}

export default MyApp;
