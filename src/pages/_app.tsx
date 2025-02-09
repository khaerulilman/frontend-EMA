import Head from "next/head";
import "tailwindcss/tailwind.css";
import { AppProps } from "next/app";
import { useRouter } from "next/router";

function AppContent({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>My Next.js App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default AppContent;
