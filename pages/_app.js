import "../styles/globals.css";
import { ThemeProvider } from "@mui/material";
import createEmotionCache from "../utils/createEmotionCache";
import { CacheProvider } from "@emotion/react";
import { theme } from "../utils/theme";
import { Layout } from "../src/components/Layout/Layout";

const clientSideEmotionCache = createEmotionCache();

function MyApp({
  Component,
  emotionCache = clientSideEmotionCache,
  pageProps,
}) {
  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </CacheProvider>
  );
}

export default MyApp;
