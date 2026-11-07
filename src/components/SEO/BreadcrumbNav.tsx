import { Link } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";
import {
  BreadcrumbStructuredData,
  type BreadcrumbItem,
} from "./StructuredData";

interface BreadcrumbNavProps {
  items: BreadcrumbItem[];
}

/**
 * Visual breadcrumb navigation + BreadcrumbList structured data.
 */
export default function BreadcrumbNav({ items }: BreadcrumbNavProps) {
  return (
    <>
      <BreadcrumbStructuredData items={items} />

      <nav
        aria-label="Breadcrumb"
        className="flex items-center gap-1.5 text-sm text-gray-500 flex-wrap"
      >
        <Link
          to="/"
          className="flex items-center gap-1 hover:text-green-700 transition-colors"
        >
          <Home className="h-3.5 w-3.5" />
          <span>Home</span>
        </Link>

        {items.slice(1).map((item, index) => {
          const isLast = index === items.length - 2;
          return (
            <span key={item.path} className="flex items-center gap-1.5">
              <ChevronRight className="h-3.5 w-3.5 text-gray-400" />
              {isLast ? (
                <span className="font-medium text-gray-900">{item.name}</span>
              ) : (
                <Link
                  to={item.path}
                  className="hover:text-green-700 transition-colors"
                >
                  {item.name}
                </Link>
              )}
            </span>
          );
        })}
      </nav>
    </>
  );
}
