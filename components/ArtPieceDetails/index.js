import Image from "next/image";
import { useRouter } from "next/router";

export default function ArtPieceDetails({ image, title, artist, year, genre }) {
  const router = useRouter();

  return (
    <>
      <h1>{title}</h1>

      <Image src={image} alt={title} width={200} height={200} />
      <p>
        <strong>Artist: </strong>
        {artist}
      </p>
      <p>
        <strong>Year: </strong>
        {year}
      </p>
      <p>
        <strong>Genre: </strong>
        {genre}
      </p>
      <button type="button" onClick={() => router.push("/art-pieces")}>
        ← Back
      </button>
    </>
  );
}
