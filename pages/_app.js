import useSWR from "swr";
import GlobalStyle from "../styles";
import { useState } from "react";
import Layout from "@/components/Layout";

export default function App({ Component, pageProps }) {
  const URL = "https://example-apis.vercel.app/api/art";
  const fetcher = (...args) =>
    fetch(...args).then((response) => response.json());

  const { data, error, isLoading } = useSWR(URL, fetcher, []);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>There is an Error. Try again later.</h1>;
  }

  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} apiData={data} />
      <Layout />
    </>
  );
}
