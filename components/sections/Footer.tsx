import Link from 'next/link';
import Icon from '@/components/ui/Icon';

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterSection {
  label: string;
  items: FooterLink[];
}

export interface Props {
  sections?: FooterSection[];
}

const defaultSections: FooterSection[] = [
    {
        label: "Blog",
        items: [{ label: "Agroecología", href: "/blog/agroecologia" }],
    },
    {
        label: "Cultura",
        items: [{ label: "Innovación", href: "/cultura/innovacion" }],
    }
];

export default function Footer({ sections = defaultSections }: Props) {
  return (
    <footer className="w-full bg-base-200 text-base-content">
      <div className="container mx-auto p-10">
        <div className="footer justify-between">
          <div>
            <p className="font-bold text-xl">Agrofolilkimun</p>
            <p>Innovación y sustentabilidad.</p>
          </div>
          {sections.map((section) => (
            <div key={section.label}>
              <span className="footer-title">{section.label}</span>
              {section.items.map((item) => (
                <Link key={item.href} href={item.href} className="link link-hover">
                  {item.label}
                </Link>
              ))}
            </div>
          ))}
          <div>
            <span className="footer-title">Suscríbete a nuestra newsletter</span>
            <div className="form-control w-80">
              <label className="label">
                <span className="label-text">No defraudaremos a tu inbox ;)</span>
              </label>
              <div className="relative">
                <input type="text" placeholder="Escribe tu correo" className="input input-bordered w-full pr-16" />
                <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">Suscribirme</button>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 pt-8 border-t border-base-300 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>Con el apoyo de: <strong>CORFO</strong> | © 2025 Agrofolilkimun</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="https://instagram.com" aria-label="Instagram">
                <Icon id="Instagram" size={24} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
