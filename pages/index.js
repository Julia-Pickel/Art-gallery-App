import Spotlight from "@/components/Spotlight";

export default function SpotlightPage({ apiData }) {
  let randomPiece = {};

  function getrandomPiece() {
    return apiData[Math.floor(Math.random() * apiData.length)];
  }

  if (apiData) {
    randomPiece = getrandomPiece();
  }
  return (
    <>
      <h1>Art Gallery</h1>
      <Spotlight
        image={randomPiece?.imageSource}
        artist={randomPiece?.artist}
      />
    </>
  );
}
