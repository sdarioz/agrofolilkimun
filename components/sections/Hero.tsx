import Image from 'next/image';
import Link from 'next/link';

export interface CTA {
  href: string;
  text: string;
  variant?: 'primary' | 'outline';
}

export interface Props {
  title?: string;
  /** @format rich-text */
  description?: string;
  image?: string;
  placement?: 'left' | 'right';
  cta?: CTA[];
}

export default function Hero({
  title = "Innovación y Sustentabilidad para la Agricultura",
  description = "<p>Descubre cómo nuestras soluciones regenerativas pueden transformar tu cultivo y el planeta.</p>",
  image,
  placement = 'left',
  cta = [{ href: '/productos', text: 'Ver Productos', variant: 'primary' }],
}: Props) {
  const flexOrder = placement === 'right' ? 'lg:flex-row-reverse' : 'lg:flex-row';

  return (
    <div className="hero min-h-[70vh] bg-base-100">
      <div className={`hero-content flex-col ${flexOrder} container mx-auto gap-12`}>
        {image ? (
          <div className="relative w-full lg:w-1/2 h-80 lg:h-96">
            <Image
              src={image}
              alt={title}
              className="rounded-lg shadow-2xl object-cover"
              fill={true}
            />
          </div>
        ) : (
           <div className="skeleton w-full lg:w-1/2 h-80 lg:h-96 rounded-lg shadow-2xl"></div>
        )}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="text-5xl font-bold" dangerouslySetInnerHTML={{ __html: title }} />
          <div className="py-6 prose" dangerouslySetInnerHTML={{ __html: description }} />
          <div className="flex gap-4 justify-center lg:justify-start">
            {cta.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`btn ${item.variant === 'outline' ? 'btn-outline' : ''} btn-primary`}
              >
                {item.text}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
