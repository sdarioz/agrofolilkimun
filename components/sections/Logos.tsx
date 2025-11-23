import Image from 'next/image';

export interface Logo {
  src: string;
  alt: string;
}

export interface Props {
  title?: string;
  logos?: Logo[];
}

const defaultLogos: Logo[] = Array(10).fill(0).map((_, i) => ({
  src: `https://logo.clearbit.com/logo${i+1}.com`,
  alt: `Logo ${i + 1}`,
}));

export default function Logos({
  title = "Con el apoyo de",
  logos = defaultLogos,
}: Props) {
  const slideContent = logos.map((logo, index) => (
    <div key={index} className="flex-shrink-0 mx-8">
      <Image
        src={logo.src}
        alt={logo.alt}
        width={128}
        height={64}
        className="object-contain h-16 w-32 grayscale hover:grayscale-0 transition-all"
      />
    </div>
  ));

  return (
    <div className="bg-base-100 py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl font-semibold mb-8">{title}</h2>
        <div className="relative w-full overflow-hidden">
          <div className="flex w-max animate-sliding">
            {/* Render the logos twice for a seamless loop */}
            {slideContent}
            {slideContent}
          </div>
        </div>
      </div>
    </div>
  );
}
