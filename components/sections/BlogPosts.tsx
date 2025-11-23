import Image from 'next/image';
import Link from 'next/link';

export interface Post {
  href: string;
  imageUrl: string;
  imageAlt: string;
  title: string;
  excerpt: string;
  author: string;
  authorImageUrl?: string;
  date: string;
}

export interface Props {
  title?: string;
  posts?: Post[];
}

const defaultPosts: Post[] = [
  // Default data for previewing in Builder.io
  {
    href: '/blog/post-1',
    imageUrl: 'https://placehold.co/600x400/22c55e/white?text=Post+1',
    imageAlt: 'Description for image 1',
    title: 'First Blog Post',
    excerpt: 'This is a short excerpt for the first blog post, demonstrating the layout.',
    author: 'Jane Doe',
    date: 'Oct 20, 2024'
  },
  {
    href: '/blog/post-2',
    imageUrl: 'https://placehold.co/600x400/3b82f6/white?text=Post+2',
    imageAlt: 'Description for image 2',
    title: 'Second Blog Post',
    excerpt: 'This is a short excerpt for the second blog post, which is slightly longer.',
    author: 'John Smith',
    date: 'Oct 22, 2024'
  },
    {
    href: '/blog/post-3',
    imageUrl: 'https://placehold.co/600x400/f97316/white?text=Post+3',
    imageAlt: 'Description for image 3',
    title: 'Third Blog Post',
    excerpt: 'This is a short excerpt for the third blog post, showcasing another card.',
    author: 'Emily White',
    date: 'Oct 24, 2024'
  },
];

export default function BlogPosts({ title = "Latest Blog Posts", posts = defaultPosts }: Props) {
  return (
    <section className="bg-base-100 py-16 lg:py-24">
      <div className="container mx-auto px-4">
        {title && <h2 className="text-4xl font-bold text-center mb-12">{title}</h2>}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <div key={index} className="card bg-base-100 shadow-xl border border-base-200">
              <figure className="relative h-56 w-full">
                {post.imageUrl ? (
                  <Image
                    src={post.imageUrl}
                    alt={post.imageAlt}
                    layout="fill"
                    objectFit="cover"
                  />
                ) : (
                  <div className="skeleton w-full h-full"></div>
                )}
              </figure>
              <div className="card-body">
                <h3 className="card-title text-2xl font-bold">
                  <Link href={post.href}>{post.title}</Link>
                </h3>
                <p className="text-base-content/70">{post.excerpt}</p>
                <div className="card-actions justify-end mt-4">
                   <Link href={post.href} className="btn btn-primary">
                      Read More
                   </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
