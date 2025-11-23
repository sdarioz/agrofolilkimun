import Link from 'next/link';
import Image from 'next/image';
import Icon from '@/components/ui/Icon';

export interface NavItem {
  label: string;
  href: string;
}

export interface Props {
  navItems?: NavItem[];
  logo?: string;
  logoAlt?: string;
}

const defaultNavItems: NavItem[] = [
  { label: 'Blog', href: '/blog' },
  { label: 'Servicios', href: '/servicios' },
  { label: 'Productos', href: '/productos' },
];

export default function Header({ navItems = defaultNavItems, logo, logoAlt = 'Agrofolilkimun Logo' }: Props) {
  return (
    <header className="navbar bg-base-100 container mx-auto px-4 py-4 sticky top-0 z-50 shadow-md">
      <div className="navbar-start">
        <Link href="/" className="btn btn-ghost px-0">
            {logo ? (
                 <Image
                    src={logo}
                    alt={logoAlt}
                    width={150}
                    height={50}
                    className="h-auto"
                />
            ) : (
                <div className="skeleton w-36 h-12"></div>
            )}
        </Link>
      </div>
      <div className="navbar-end">
        <div className="hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
            {navItems.map((item) => (
                <li key={item.href}>
                <Link href={item.href} className="text-lg font-semibold">
                    {item.label}
                </Link>
                </li>
            ))}
            </ul>
        </div>
        <div className="dropdown dropdown-end lg:hidden">
            <label tabIndex={0} className="btn btn-ghost">
                <Icon id="Bars3" size={24} />
            </label>
            <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
                {navItems.map((item) => (
                <li key={item.href}>
                    <Link href={item.href}>{item.label}</Link>
                </li>
                ))}
            </ul>
        </div>
      </div>
    </header>
  );
}
