import "@/styles/globals.scss";
import "@/styles/svgs.scss";

import type { AppProps } from "next/app";
import { ChakraBaseProvider, extendTheme } from "@chakra-ui/react";

import Footer from "@/components/footer/Footer";
import Head from "next/head";
import Navbar from "@/components/navbar/Navbar";

export default function App({ Component, pageProps }: AppProps) {
  const theme = extendTheme({
    colors: {
      primary: {
        50: "#ead1ee",
        100: "#d5a4de",
        200: "#ce95d8",
        300: "#c786d3",
        400: "#c077cd",
        500: "#BA68C8",
        600: "#82488c",
        700: "#6f3e78",
        800: "#5d3464",
        900: "#371f3c",
      },
      secondary: {
        50: "#c7cdd0",
        100: "#8f9ca2",
        200: "#7c8b92",
        300: "#6a7a83",
        400: "#576a73",
        500: "#455A64",
        600: "#374850",
        700: "#29363c",
        800: "#1b2428",
        900: "#141b1e",
      },
    },
  });

  return (
    <>
      <Head>
        <title>Rohith Remesh | DevOps Engineer  | Portfolio</title>
        <meta name="description" content="Hey there! I'm a DevOps Engineer  specialized in CI/CD, cloud infrastructure." key="desc" />
        <meta
          name="keywords"
          content="DevOps Engineer, CI/CD, Linux, Docker, Kubernetes, Ansible, Git, AWS, Terraform, Monitoring, Automation"
        />
        <meta name="robots" content="index, follow" />
      </Head>

      <ChakraBaseProvider theme={theme} resetCSS>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </ChakraBaseProvider>
    </>
  );
}
