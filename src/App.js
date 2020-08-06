import React, { useEffect, useState, useRef } from "react";
import Header from "./components/Header";
import Content from "./components/Content";

import "./sass/style.scss";

function App() {
  const [style, setStyle] = useState("show");
  const headerRef = useRef(null);

  useEffect(() => {
    const header = headerRef.current.getBoundingClientRect();

    const handleScrollEvent = () => {
      let top = window.scrollY;
      top > header.height ? setStyle("hide") : setStyle("show");
    };

    window.addEventListener("scroll", handleScrollEvent);

    return () => {
      window.removeEventListener("scroll", handleScrollEvent);
    };
  }, []);

  return (
    <div className='app'>
      <header ref={headerRef} className={style}>
        <Header />
      </header>
      <Content />
    </div>
  );
}

export default App;
