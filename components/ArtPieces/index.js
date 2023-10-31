import ArtPiecePreview from "@/components/ArtPiecePreview";

export default function ArtPieces({ pieces }) {
  return (
    <ul>
      {pieces.map(({ slug, name, imageSource, artist }) => (
        <ArtPiecePreview
          key={slug}
          image={imageSource}
          title={name}
          artist={artist}
        ></ArtPiecePreview>
      ))}
    </ul>
  );
}
