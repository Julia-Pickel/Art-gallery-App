import Image from "next/image";

export default function ArtPiecePreview({ image, title, artist }) {
  return (
    <li>
      <Image src={image} alt={title} width={200} height={200} />
      <p>
        <strong>{artist}: </strong>
        {title}
      </p>
    </li>
  );
}

// Image is missing required "alt" property.
// Please add Alternative Text to describe the image for screen readers and search engines.
