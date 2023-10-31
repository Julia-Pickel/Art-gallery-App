import useSWR from "swr";
import ArtPieces from "@/components/ArtPieces";
import Spotlight from "@/components/Spotlight";

export default function HomePage() {
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

  function getrandomPiece() {
    return data[Math.floor(Math.random() * data.length)];
  }

  let randomPiece = {};
  if (data) {
    randomPiece = getrandomPiece();
  }

  return (
    <div>
      <h1>Art Gallery</h1>
      <Spotlight
        image={randomPiece?.imageSource}
        artist={randomPiece?.artist}
      />
      <ArtPieces pieces={data} />
    </div>
  );
}
