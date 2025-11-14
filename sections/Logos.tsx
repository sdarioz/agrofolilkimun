import Image from "apps/website/components/Image.tsx";
import type { ImageWidget } from "apps/admin/widgets.ts";

export interface Logo {
  src?: ImageWidget;
  /** @description text alternative */
  altText?: string;
}

export interface Props {
  title?: string;
  logos?: Logo[];
}

const IMG_PLACEHODLER = Array(3).fill(0).map(() => ({
  src:
    "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1527/03fbcc78-ca86-4616-a59a-b8aa18331a9c",
  altText: "Logo",
}));

export default function Logos({
  title = "Edit this heading however you want",
  logos = IMG_PLACEHODLER,
}: Props) {
  const slideContent = (
    <div className="flex items-center gap-10 animate-sliding">
      {logos?.map((logo, index) => (
        <Image
          key={index}
          src={logo.src || ""}
          alt={logo.altText || ""}
          className="h-20 md:h-24 lg:h-28 w-auto object-contain"
        />
      ))}
    </div>
  );

  return (
    <div className="container lg:mx-auto mx-10 lg:py-20">
      <div className="flex flex-col gap-12">
        <p className="text-center text-lg">{title}</p>
        <div className="relative w-full h-auto overflow-hidden">
          {slideContent}
        </div>
      </div>
    </div>
  );
}
