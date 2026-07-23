import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';
import { BreadcrumbsJsonLd } from '@/components/JsonLd';

type BreadcrumbItem = {
  name: string;
  url: string;
};

export default function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  // Prepend Home route automatically for the JSON-LD and UI
  const fullItems = [{ name: 'Home', url: '/' }, ...items];

  return (
    <>
      <BreadcrumbsJsonLd items={fullItems} />
      <nav aria-label="Breadcrumb" className="flex items-center text-sm text-gray-500 mb-6 overflow-x-auto whitespace-nowrap pb-2">
        <ol className="flex items-center space-x-2">
          {fullItems.map((item, index) => {
            const isLast = index === fullItems.length - 1;
            return (
              <li key={item.url} className="flex items-center">
                {index === 0 ? (
                  <Link href={item.url} className="hover:text-legal-accent transition-colors flex items-center gap-1">
                    <Home className="w-4 h-4" />
                    <span className="sr-only">Home</span>
                  </Link>
                ) : isLast ? (
                  <span className="text-gray-900 font-medium" aria-current="page">
                    {item.name}
                  </span>
                ) : (
                  <Link href={item.url} className="hover:text-legal-accent transition-colors">
                    {item.name}
                  </Link>
                )}
                {!isLast && <ChevronRight className="w-4 h-4 mx-2 text-gray-400 flex-shrink-0" />}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
