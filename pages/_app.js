import useSWR from "swr";
import GlobalStyle from "../styles";

import Layout from "@/components/Layout";
import { useState } from "react";

export default function App({ Component, pageProps }) {
  const [artPiecesInfo, setArtPiecesInfo] = useState([]);

  function handleToggleFavorite(slug) {
    const artPiece = artPiecesInfo.find((artPiece) => artPiece.slug === slug);
    if (artPiece) {
      setArtPiecesInfo(
        artPiecesInfo.map((artPiece) =>
          artPiece.slug === slug
            ? { slug, isFavorite: !artPiece.isFavorite }
            : artPiece
        )
      );
    } else {
      setArtPiecesInfo([...artPiecesInfo, { slug: slug, isFavorite: true }]);
    }
  }

  const URL = "https://example-apis.vercel.app/api/art";
  const fetcher = (...args) =>
    fetch(...args).then((response) => response.json());

  const { data, error, isLoading } = useSWR(URL, fetcher);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>There is an Error. Try again later.</h1>;
  }

  if (data) {
    //console.log(artPiecesInfo);
  }

  return (
    <>
      <GlobalStyle />
      <Component
        {...pageProps}
        apiData={data}
        artPiecesInfo={artPiecesInfo}
        onToggleFavorite={handleToggleFavorite}
      />
      <Layout />
    </>
  );
}
