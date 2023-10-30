import Image from "next/image";

export default function ArtPiecePreview({ image, title, artist }) {
  return (
    <li>
      <Image alt="" src={image} width="300" height="200">
        {image}
      </Image>
      <p>
        {artist}:{title}
      </p>
    </li>
  );
}
