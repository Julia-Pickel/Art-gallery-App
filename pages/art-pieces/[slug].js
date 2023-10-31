import ArtPieceDetails from "../../components/ArtPieceDetails";
import { useRouter } from "next/router";

export default function ArtPieceDetailsPage({ apiData }) {
  const router = useRouter();
  const { slug } = router.query;

  const piece = apiData.find((piece) => piece.slug === slug);

  return (
    <>
      <ArtPieceDetails
        image={piece.imageSource}
        title={piece.name}
        artist={piece.artist}
        year={piece.year}
        genre={piece.genre}
        slug={piece.slug}
      ></ArtPieceDetails>
    </>
  );
}
