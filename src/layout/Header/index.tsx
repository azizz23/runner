import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import style from "../../styles/header.module.scss";

const Header = ({ scroll }: { scroll: number }) => {
  const location = useLocation();
  const [active, setActive] = useState(location.pathname !== "/");

  useEffect(() => {
    const handelHeaderColor = () => {
      if (location.pathname !== "/") return setActive(true);

      scroll > 0 ? setActive(true) : setActive(false);
    };

    // For first render
    handelHeaderColor();
  }, [scroll, location.pathname]);

  return (
    <header
      className={`py-3 ${active ? `${style.active} shadow` : ""} ${
        style.header
      } `}
    >
      <div className="container-fluid">
        <div className="logo">
          <Link
            to="/"
            className="text-decoration-none w-fit"
            style={{
              display: "inline-block",
            }}
          >
  
              <h5 className="ms-2 text-dark">Crypto-Runner</h5>
            
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
