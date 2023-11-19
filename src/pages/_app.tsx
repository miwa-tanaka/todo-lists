import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider } from '@chakra-ui/react'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <CacheProvider>
        <ChakraProvider>
          <Component {...pageProps} />
        </ChakraProvider>
      </CacheProvider>
    </RecoilRoot>
  );
}

export default MyApp;
