import { useState, useEffect } from "react";
import HeaderTop from "./HeaderTop";
import HeaderMain from "./HeaderMain";

const Header = () => {
  const [topHeader, setTopHeader] = useState(true);
  const [mainHeader, setMainHeader] = useState(false);

  const listenScrollEvent = () => {
    if (window.scrollY === 0) {
      setTopHeader(true);
      setMainHeader(false);
    } else if (window.scrollY > 680) {
      setMainHeader(true);
      setTopHeader(false);
    } else {
      setTopHeader(false);
      setMainHeader(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
  }, [window.scrollY]);

  return (
    <>
      {topHeader && (
        <>
          <HeaderTop />
        </>
      )}
      {mainHeader && (
        <>
          <HeaderMain />
        </>
      )}
    </>
  );
};

export default Header;
