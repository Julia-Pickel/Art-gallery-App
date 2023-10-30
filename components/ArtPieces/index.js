import ArtPiecePreview from "@/components/ArtPiecePreview";

export default function ArtPieces({ pieces }) {
  const createPiecesList = pieces.map((piece) => {
    return (
      <>
        <ArtPiecePreview
          image={piece.imageSource}
          title={piece.title}
          artist={piece.artist}
        />
      </>
    );
  });

  return (
    <>
      <ul>{createPiecesList}</ul>
    </>
  );
}
