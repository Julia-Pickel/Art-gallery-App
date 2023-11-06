import ArtPiecePreview from "@/components/ArtPiecePreview";

export default function ArtPieces({ pieces, onToggleFavorite, artPiecesInfo }) {
  return (
    <ul>
      {pieces.map(({ slug, name, imageSource, artist }) => (
        <ArtPiecePreview
          key={slug}
          image={imageSource}
          title={name}
          artist={artist}
          slug={slug}
          onToggleFavorite={() => onToggleFavorite(slug)}
          //To get the art pieces which have been marked as favorite
          isFavorite={
            artPiecesInfo?.find((artPiece) => artPiece.slug === slug)
              ?.isFavorite
          }
        ></ArtPiecePreview>
      ))}
    </ul>
  );
}
