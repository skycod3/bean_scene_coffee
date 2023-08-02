import { useState } from "react";
import { List, NotePencil, SignIn, X } from "@phosphor-icons/react";
import { screens } from "tailwindcss/defaultTheme";

import Nav from "../../components/Nav";
import Button from "../../components/Button";

import Logo from "../../assets/logo.svg";

import { useWindowSize } from "../../hooks/useWindowSize";

export interface CustomStyles extends React.CSSProperties {
  "--fluid-block-min"?: string;
  "--fluid-block-base"?: string;
  "--fluid-block-max"?: string;
  "--growth-factor"?: string;
  "--flow-space"?: string;
}

export default function Header() {
  const customStyles: CustomStyles = {
    "--fluid-block-max": "1.31rem",
  };

  const [width] = useWindowSize();
  const [navOpen, setNavOpen] = useState(false);

  const screenLg = Number(screens.lg.split("px")[0]);

  const isMobile = width < screenLg;

  return (
    <header className="absolute top-0 z-10 w-full">
      <div className="container" style={customStyles}>
        <div className="grid gap-4 items-center" style={{ gridTemplateColumns: "auto 1fr auto" }}>
          <a href="/">
            <img src={Logo} alt="Bean Scene" />
          </a>

          <Nav isMobile={isMobile} navOpen={navOpen} />

          {/* Mobile */}
          <div className="flex items-center gap-4 sm:gap-8 lg:hidden">
            <ul className="ml-auto flex gap-4 sm:gap-8">
              <li>
                <a className="flex underline" title="Sign In" href="#">
                  <SignIn size={24} fill="#fff" />
                </a>
              </li>

              <li>
                <a className="flex underline" title="Sign Up" href="#">
                  <NotePencil size={24} fill="#fff" />
                </a>
              </li>
            </ul>

            <button
              className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center"
              aria-label="Menu Navigation"
              aria-controls="main-nav"
              onClick={() => setNavOpen(!navOpen)}
            >
              {navOpen ? <X size={24} fill="#fff" /> : <List size={24} fill="#fff" />}
            </button>
          </div>

          {/* Desktop */}
          <ul className="gap-8 lg:gap-14 items-center hidden lg:flex">
            <li className="ml-auto">
              <a className="flex text-white underline" title="Sign In" href="#">
                Sign In
              </a>
            </li>

            <li>
              <Button title="Sign Up" className="button" data-theme="primary" />
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
