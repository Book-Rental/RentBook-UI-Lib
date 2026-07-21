export interface BreadcrumbItem {
  label: string;
  path?: string;
}

interface Props {
  items: BreadcrumbItem[];
  onNavigate?: (path: string) => void;
}

export default function RbBreadcrumb({
  items,
  onNavigate,
}: Props) {
  return (
    <nav className="flex items-center text-sm">
      {items.map((item, index) => (
        <div key={index} className="flex items-center">
          {item.path ? (
            <button
              onClick={() => onNavigate?.(item.path!)}
              className="text-blue-600 hover:underline"
            >
              {item.label}
            </button>
          ) : (
            <span className="font-medium">
              {item.label}
            </span>
          )}

          {index !== items.length - 1 && (
            <span className="mx-2">/</span>
          )}
        </div>
      ))}
    </nav>
  );
}