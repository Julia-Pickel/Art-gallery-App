import Image from "next/image";
import { useRouter } from "next/router";
import FavoriteButton from "../FavoriteButton";

export default function ArtPiecePreview({ image, title, artist, slug }) {
  const router = useRouter();
  return (
    <li>
      <FavoriteButton />
      <Image
        src={image}
        alt={title}
        width={200}
        height={200}
        onClick={() => router.push(`art-pieces/${slug}`)}
      />
      <p>
        <strong>{artist}: </strong>
        {title}
      </p>
    </li>
  );
}
