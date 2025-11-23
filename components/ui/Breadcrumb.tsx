import Link from 'next/link';

export interface BreadcrumbItem {
  name: string;
  href?: string;
}

export interface Props {
  itemListElement: BreadcrumbItem[];
}

export default function Breadcrumb({ itemListElement = [] }: Props) {
  return (
    <div className="text-sm breadcrumbs">
      <ul>
        {itemListElement.map((item, index) => {
          const isLast = index === itemListElement.length - 1;

          return (
            <li key={index}>
              {isLast ? (
                // Current page, not linked
                <span>{item.name}</span>
              ) : (
                // Ancestor pages, linked
                <Link href={item.href ?? '#'}>
                  {item.name}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
