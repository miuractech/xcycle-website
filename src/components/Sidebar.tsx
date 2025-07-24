import { useState } from "react";
import { menuData } from "../data/menuData";
import { MenuSection } from "./MenuSection";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  // Track which section is currently open (only one at a time)
  const [openSection, setOpenSection] = useState<string | null>(menuData[0]?.title || null);

  const toggleSection = (sectionTitle: string) => {
    // If clicking the currently open section, close it; otherwise, open the clicked section
    setOpenSection(prev => prev === sectionTitle ? null : sectionTitle);
  };

  const sidebarClasses = `
    fixed top-0 w-96 h-screen backdrop-blur-xl border-l border-gray-200 z-[60] 
    transition-all duration-500 
    ${isOpen ? 'right-0' : '-right-96'}
    max-sm:w-full max-sm:${isOpen ? 'right-0' : '-right-full'}
    max-md:w-80 max-md:${isOpen ? 'right-0' : '-right-80'}
  `;

  return (
    <>
      <aside className={sidebarClasses}>
        <div className="p-8 h-full">
          <div className="flex justify-end items-center mb-8 pb-4 ">
            <button 
              className="w-8 h-8 grid place-content-center rounded-full transition-all duration-300 text-gray-700 hover:text-white" 
              onClick={onClose} 
              data-hover=""
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
              <span data-hover-bounds=""></span>
            </button>
          </div>

          <nav className="flex flex-col gap-6">
            {menuData.map((section) => (
              <MenuSection 
                key={section.title} 
                section={section}
                isOpen={openSection === section.title}
                onToggle={() => toggleSection(section.title)}
              />
            ))}
          </nav>
        </div>
      </aside>

      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50" 
          onClick={onClose}
        />
      )}
    </>
  );
}; 