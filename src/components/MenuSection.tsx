import { Link } from 'react-router-dom';
import { type MenuSection as MenuSectionType } from "../data/menuData";

interface MenuSectionProps {
  section: MenuSectionType;
  isOpen: boolean;
  onToggle: () => void;
}

export const MenuSection = ({ section, isOpen, onToggle }: MenuSectionProps) => {
  return (
    <div className="menu-section">
      <h4 
        className="text-lg font-semibold text-white mb-4 pb-2 border-b border-gray-100 transition-colors cursor-pointer hover:text-blue-500 flex items-center justify-between" 
        onClick={onToggle}
        data-hover=""
      >
        <span>{section.title}</span>
        <svg 
          className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
        <div data-hover-bounds=""></div>
      </h4>
      
      <div className={`overflow-y-auto overflow-x-hidden transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="h-full scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-transparent">
          <ul className="flex flex-col gap-2 ml-4 pb-2">
            {section.items.map((item, index) => (
              <li key={index}>
                <Link 
                  to={item.href} 
                  className="block py-3 px-4 text-white text-sm rounded-md transition-all duration-300 hover:text-blue-500 hover:bg-blue-50 hover:translate-x-1" 
                  data-hover=""
                >
                  <span>{item.label}</span>
                  <div data-hover-bounds=""></div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}; 