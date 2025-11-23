import Slider from '@/components/ui/Slider';
import Image from 'next/image';

export interface Testimonial {
  text?: string;
  author?: string;
  avatar?: string;
}

export interface Props {
  title?: string;
  testimonials?: Testimonial[];
}

export default function Testimonials({ title, testimonials = [] }: Props) {
  return (
    <div className="container mx-auto p-8">
      {title && <h2 className="text-center text-2xl font-bold mb-6">{title}</h2>}
      <Slider>
        {testimonials.map((item, index) => (
          <div key={index} className="text-center p-8">
            {item.avatar && <Image src={item.avatar} alt={item.author || ''} width={80} height={80} className="rounded-full mx-auto mb-4" />}
            <p className="italic">"{item.text}"</p>
            <p className="font-bold mt-4">- {item.author}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
}
