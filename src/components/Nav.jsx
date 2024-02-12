import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";

const Nav = () => {
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="logo" width={130} height={29} />
        </a>
        <ul className="flex-1 flex justify-end items-center gap-16 max-lg:hidden">
          {navLinks.map((navItem) => (
            <li key={navItem.label}>
              <a
                className="fonts-montserrat leading-normal text-lg text-slate-gray"
                href={navItem.href}
              >
                {navItem.label}
              </a>
            </li>
          ))}
        </ul>
        <div>
          <img
            src={hamburger}
            alt="hamburger"
            height={25}
            width={25}
            className="hidden max-lg:block"
          />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
