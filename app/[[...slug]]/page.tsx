import { builder } from '@/lib/builder';
import { Content } from '@/components/builder-registry';

interface PageProps {
  params: {
    slug: string[];
  };
}

export default async function Page({ params }: PageProps) {
  const content = await builder
    .get('page', {
      userAttributes: {
        urlPath: '/' + (params?.slug?.join('/') || ''),
      },
    })
    .toPromise();

  // The apiKey prop is mandatory for the visual editor to connect correctly.
  // The non-null assertion (!) is safe because a missing key is a fatal configuration error.
  return <Content content={content} apiKey={builder.apiKey!} />;
}
