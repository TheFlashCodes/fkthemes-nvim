import { useState, useEffect } from 'react';

interface TocProps {
  headings: { id: string; title: string }[];
}

const DocsToc = ({ headings }: TocProps) => {
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      for (const heading of headings) {
        const element = document.getElementById(heading.id);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveId(heading.id);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [headings]);

  return (
    <aside className="hidden lg:block w-64 border-l border-border fixed right-0 top-16 bottom-0 overflow-y-auto p-6 space-y-4">
      <h3 className="text-lg font-semibold">On this page</h3>
      <ul className="space-y-2">
        {headings.map((heading) => (
          <li key={heading.id}>
            <a
              href={`#${heading.id}`}
              className={`text-sm ${activeId === heading.id ? 'text-primary' : 'text-muted-foreground hover:text-foreground'}`}
            >
              {heading.title}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default DocsToc;
