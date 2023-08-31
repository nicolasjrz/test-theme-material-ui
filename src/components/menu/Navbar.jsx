import { useRef, useState } from "react";

import { ModalNavbar } from "./ModalNavbar";
import { HeaderNavbar } from "./HeaderNavbar";

export const Navbar = () => {
  const navRef = useRef();
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);

  const showNavbar = () => {
    setIsNavbarVisible(!isNavbarVisible);
  };

  return (
    <>
      <HeaderNavbar isNavbarVisible={isNavbarVisible} showNavbar={showNavbar} />
      <ModalNavbar
        navRef={navRef}
        isNavbarVisible={isNavbarVisible}
        showNavbar={showNavbar}
      />
    </>
  );
};
