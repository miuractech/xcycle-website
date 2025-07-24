import { Header } from '../Header';
import { Cursor } from '../Cursor';
import { CTASvg } from '../CTASvg';

interface PageLayoutProps {
  children: React.ReactNode;
  title: string;
  category?: string;
}

export const PageLayout = ({ children, title, category }: PageLayoutProps) => {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50 pt-20">
        <div className="max-w-6xl mx-auto px-8 py-12">
          {category && (
            <div className="mb-4">
              <span className="text-blue-500 text-sm font-medium uppercase tracking-wide">
                {category}
              </span>
            </div>
          )}
          <h1 className="text-4xl font-bold text-gray-900 mb-8">{title}</h1>
          <div className="prose prose-lg max-w-none">
            {children}
          </div>
        </div>
      </main>
      <Cursor />
      <CTASvg />
    </>
  );
}; 