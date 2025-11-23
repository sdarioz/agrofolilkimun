import Image from 'next/image';

export interface Author {
    name: string;
    avatarUrl?: string;
    position?: string;
}

export interface Props {
    title?: string;
    subtitle?: string;
    author?: Author;
    publishDate?: string;
    imageUrl?: string;
    content?: string; // Rich text from Builder.io
}

export default function MainPost({
    title = 'Default Post Title',
    subtitle,
    author = { name: 'Author Name' },
    publishDate,
    imageUrl,
    content = '<p>This is the default post content. Edit in Builder.io to see your article here.</p>',
}: Props) {
    return (
        <article className="container mx-auto px-4 py-8 max-w-4xl">
            <div className="text-center mb-8">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">{title}</h1>
                {subtitle && <p className="text-xl text-base-content/70">{subtitle}</p>}
            </div>

            {author && (
                 <div className="flex items-center justify-center gap-4 mb-8">
                    <div className="avatar">
                        <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            {author.avatarUrl ? (
                                <Image src={author.avatarUrl} alt={author.name} width={48} height={48} />
                            ) : (
                                <div className="skeleton w-12 h-12 rounded-full"></div>
                            )}
                        </div>
                    </div>
                    <div>
                        <p className="font-semibold">{author.name}</p>
                        {publishDate && <p className="text-sm text-base-content/60">{publishDate}</p>}
                    </div>
                 </div>
            )}

            {imageUrl ? (
                <figure className="mb-8 relative w-full h-96">
                    <Image
                        src={imageUrl}
                        alt={title || 'Blog post image'}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-lg shadow-lg"
                    />
                </figure>
            ) : (
                <div className="skeleton w-full h-96 mb-8 rounded-lg"></div>
            )}

            <div
                className="prose lg:prose-xl max-w-none mx-auto"
                dangerouslySetInnerHTML={{ __html: content }}
            />
        </article>
    );
}
