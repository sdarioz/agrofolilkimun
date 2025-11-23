import Image from 'next/image';
import Link from 'next/link';

export interface CTA {
  href: string;
  text: string;
}

export interface Props {
  title?: string;
  /** @format rich-text */
  description?: string;
  image?: string;
  placement?: 'left' | 'right';
  cta?: CTA;
}

export default function ImageWithParagraph({
  title = "Section Title",
  description = "<p>An engaging description of the feature, product, or service goes here.</p>",
  image,
  placement = 'left',
  cta,
}: Props) {
  const order = placement === 'left' ? 'lg:flex-row' : 'lg:flex-row-reverse';

  return (
    <div className="container mx-auto p-8 lg:p-16">
      <div className={`flex flex-col ${order} items-center gap-8 lg:gap-16`}>
        {image ? (
          <div className="relative w-full lg:w-1/2 h-96">
            <Image
              src={image}
              alt={title}
              layout="fill"
              objectFit="contain"
              className="rounded-lg"
            />
          </div>
        ) : (
          <div className="skeleton w-full lg:w-1/2 h-96 rounded-lg"></div>
        )}
        <div className="lg:w-1/2 text-center lg:text-left flex flex-col items-center lg:items-start">
          <h2 className="text-3xl font-bold mb-4">{title}</h2>
          <div className="prose max-w-md" dangerouslySetInnerHTML={{ __html: description }} />
          {cta && (
            <Link href={cta.href} className="btn btn-outline btn-primary mt-6">
              {cta.text}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
