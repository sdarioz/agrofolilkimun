import Image from 'next/image';

export interface Props {
  imageUrl?: string;
  /**
   * @description Text content for the avatar, used to generate initials if no image is provided.
   */
  content?: string;
  variant?: 'normal' | 'offline' | 'online';
}

const getInitials = (name: string): string => {
  const [firstName, lastName] = name.split(' ');
  if (firstName && lastName) {
    return `${firstName.charAt(0)}${lastName.charAt(0)}`;
  }
  return firstName ? firstName.substring(0, 2) : '';
};

export default function Avatar({
  imageUrl,
  content = 'Anonymous',
  variant,
}: Props) {
  return (
    <div className="avatar placeholder">
      <div className={`w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 ${variant || ''}`}>
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={content}
            width={48}
            height={48}
            className="rounded-full"
          />
        ) : (
          <span className="text-xl font-bold">
            {getInitials(content).toUpperCase()}
          </span>
        )}
      </div>
    </div>
  );
}
