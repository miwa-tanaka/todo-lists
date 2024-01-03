import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";

function MyApp({ Component, pageProps }: AppProps) {
  const theme = extendTheme({
    config: {
      initialColorMode: "system",
      useSystemColorMode: true,
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
