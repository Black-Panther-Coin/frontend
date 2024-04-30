import React, { useState, useEffect } from "react";

const NavButtons = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      if (scrollTop > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 flex justify-between items-center w-full px-8 py-4 z-50 transition-all duration-500 ${
        isScrolled ? "bg-black shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="flex items-center">
        <button
          className="text-white text-lg md:text-xl font-semibold hover:text-purple-200 mr-4"
          onClick={() =>
            window.open("/src/assets/bpc.clawpaper.v1.1.pdf", "_blank")
          }
        >
          Read ClawPaper
        </button>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSdS8WXf6paOKK-nAn-BVN6zt4IcJ205Hipj7wIsB5G_9sW-mQ/viewform"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-lg md:text-xl font-semibold hover:text-purple-200 mr-4"
        >
          Presale Form
        </a>
        <button className="text-white text-lg md:text-xl font-semibold hover:text-purple-200">
          <w3m-button />
        </button>
      </div>
    </nav>
  );
};

export default NavButtons;
