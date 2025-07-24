import { useRef, useState } from "react";
import { MenuButton } from "./MenuButton";
import { Sidebar } from "./Sidebar";
import { useMenuPosition } from "../hooks/useMenuPosition";
import Logo from "../assets/logo.svg";
export const Header = () => {
  const menuBtnRef = useRef<HTMLButtonElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useMenuPosition(menuBtnRef);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-transparent p-4">
        <div className="max-w-6xl mx-auto px-8 flex items-center justify-between">
          <div className="logo">
            <a href="/">
              <div data-hover="">
                <img src={Logo} alt="Logo" className="h-10" />
                <span data-hover-bounds="" />
              </div>
            </a>
          </div>

          <div className="flex gap-4 items-center">
            <MenuButton
              ref={menuBtnRef}
              isOpen={isMenuOpen}
              onClick={toggleMenu}
            />
          </div>
        </div>
      </header>

      <Sidebar isOpen={isMenuOpen} onClose={closeMenu} />
    </>
  );
};
