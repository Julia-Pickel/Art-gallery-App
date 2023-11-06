import ArtPieces from "@/components/ArtPieces";

export default function ArtPiecesPage({
  apiData,
  onToggleFavorite,
  artPiecesInfo,
}) {
  return (
    <ArtPieces
      pieces={apiData}
      onToggleFavorite={onToggleFavorite}
      artPiecesInfo={artPiecesInfo}
    ></ArtPieces>
  );
}
